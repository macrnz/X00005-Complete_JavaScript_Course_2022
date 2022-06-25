"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2022-03-18T21:31:17.178Z",
    "2022-04-23T07:42:02.383Z",
    "2022-01-28T09:15:04.904Z",
    "2022-04-01T10:17:24.185Z",
    "2022-05-08T14:11:59.604Z",
    "2022-06-22T17:01:17.194Z",
    "2022-06-22T23:36:17.929Z",
    "2022-06-24T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  //console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    /*const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;*/
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div><div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //IN EACH CALL, PRINT THE REMAINING TIME TO UI
    labelTimer.textContent = `${min}:${sec}`;

    //WHEN THE TIME IS AT 0, STOP TIMER AND LOGOUT USER
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }
    //DECREASE
    time--;
  };
  // SET TIME TO 5 MINUTES
  let time = 300;

  //CALL THE TIMER EVERY SECOND
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//////////////////////////////////////
//currentAccount = account1;
//updateUI(currentAccount);
//containerApp.style.opacity = 100;
//////////////////////////////////////

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    /*
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;*/
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    };
    //const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //TIMER
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //RESET TIMER
    clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //ADD TIMER
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      //RESET TIMER
      clearInterval(timer);
      timer = startLogOutTimer();

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////////////////////////////
/*
//CONVERTING AND CHECKING NUMBERS
console.log(23 === 23.0);

//CONVERSION
console.log(Number("23"));
console.log(+"23");

//PARSING
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10));

console.log(Number.parseInt("   2.5rem "));
console.log(Number.parseFloat("    2.5rem "));

//CHECKING IF VALUE IS NUMBER
console.log(Number.isNaN(20));

console.log(Number.isFinite(20));

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.2));

/////////////////////////////////////////////////////////////////////////
//MATH AND ROUNDING
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

//MAX AND MIN VALUE
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

//Pi VALUE
console.log(Math.PI * Number.parseFloat("10px") ** 2);

//ROUNDING OFF WITH RANDOM NUMBERS
console.log(Math.trunc(Math.random() * 6) + 1);

//MAX AND MIN VALUE OF RANDOM NUMBERS
const ramdomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1);
console.log(ramdomInt(10, 20));

//ROUNDING INTEGERS
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor("23.9"));

//TRUNC VS FLOOR IN NEGATIVE NUMBERS
console.log(Math.trunc(23.3));
console.log(Math.floor(-23.3));

//ROUNDING DECIMALS
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

/////////////////////////////////////////////////////////////////////////
//REMAINDER OPERATOR
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = "orangered";
    }
    if (i % 3 === 0) row.style.backgroundColor = "blue";
  });
});

/////////////////////////////////////////////////////////////////////////
//NUMERIC SEPARATORS
const diameter = 287_460_000_000; //287460000000 SHOULD BE: 287,460,000,000.00
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI);

console.log(+"230000");
console.log(+"230_000");
console.log(parseInt("230_000"));

/////////////////////////////////////////////////////////////////////////
//WORKING WITH BigInt

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);

//BigInt Function
console.log(7979179879756461467641461461464169n);
console.log(BigInt(7979179879756461467641461461464169));

//OPERATIONS
console.log(10000n + 10000n);
console.log(43176371343173071317341341341n * 14313414314341867134316341n);

const huge = 43143176131486463845715751534153431n;
const num = 23;
console.log(huge * num);
console.log(huge * BigInt(num));


//EXCEPTIONS
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == "20");

console.log(huge + " is REALLY big!!!");

//DIVISIONS
console.log(11n / 3n);


/////////////////////////////////////////////////////////////////////////
//CREATING DATES
const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 24, 2015"));

console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//WORKING WITH DATES
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142228180000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);


/////////////////////////////////////////////////////////////////////////
//OPERATIONS WITH DATES
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);


/////////////////////////////////////////////////////////////////////////
//INTERNATIONALIZING DATES (Intl)
//INTERNATIONALIZING NUMBERS (Intl)
const num = 3884764.23;
const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  useGrouping: false,
};

console.log("US: " + Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: " + Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria: " + Intl.NumberFormat("ar-SY", options).format(num));

/////////////////////////////////////////////////////////////////////////
//TIMERS: setTimeout and setInterval
setTimeout(() => {
  console.log("Times UP!");
}, 10000); //IN MILISECONDS
console.log("Time starts in 0!");
setTimeout(() => {
  console.log("Time starts in 9!");
}, 9000); //IN MILISECONDS
setTimeout(() => {
  console.log("Time starts in 8!");
}, 8000); //IN MILISECONDS
setTimeout(() => {
  console.log("Time starts in 7!");
}, 7000); //IN MILISECONDS
setTimeout(() => {
  console.log("Time starts in 6!");
}, 6000); //IN MILISECONDS
setTimeout(() => {
  console.log("Time starts in 5!");
}, 5000); //IN MILISECONDS
setTimeout(() => {
  console.log("Time starts in 4!");
}, 4000); //IN MILISECONDS
setTimeout(() => {
  console.log("Time starts in 3!");
}, 3000); //IN MILISECONDS
setTimeout(() => {
  console.log("Time starts in 2!");
}, 2000); //IN MILISECONDS
setTimeout(() => {
  console.log("Time starts in 1!");
}, 1000); //IN MILISECONDS

//STOP TIMER: clearTimeout()

//setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
  
}, 10000);
*/
