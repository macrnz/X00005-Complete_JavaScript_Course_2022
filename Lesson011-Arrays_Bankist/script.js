"use strict";

/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice());
console.log([...arr]);

//SPLICE
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse);
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));

//-------------------------------------------------------------------------------------------------------------------------------------------

//AT
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

//-------------------------------------------------------------------------------------------------------------------------------------------

//FOR EACH LOOP METHOD

//for (const movement of moements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(
  '------------------------------------------------------------------'
);

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

console.log(
  '------------------------------------------------------------------'
);

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)} `);
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------

//FOR EACH METHOD ON MAPS

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//FOR EACH METHOD ON SETS
const currencies_unique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currencies_unique);
currencies_unique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

*/
//-------------------------------------------------------------------------------------------------------------------------------------------
//CODING CHALLENGE

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the daya into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is atleast 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and LAST TWO dogs actually have cats, not dogs!
So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data.
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
4. Run the function for both test datasets.

HINT: Use tools from all lectures in this section so far

TEST DATA 1: Julia's data [3, 5, 2, 12, 7]; Kate's data [4, 1, 15, 8, 3]

TEST DATA 2: Julia's data [9, 16, 6, 8, 3]; Kate's data [10, 5, 6, 1, 4]


const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

//-------------------------------------------------------------------------------------------------------------------------------------------

//MAP METHODS

/*
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

const movementtoUSD = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);
console.log(movementtoUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
  `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
    mov
  )}`;

  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

console.log(movementsDescriptions);

//FILTER METHOD
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawls = movements.filter(function (mov) {
  return mov < 0;
});

console.log(movements);
console.log(deposits);
console.log(withdrawls);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

//REDUCE METHOD

console.log(movements);

//ACCUMULATOR
const balance = movements.reduce((acc, cur) => acc + cur, 0); //main

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov; //other method
console.log(balance2);

//MAXIMUM VALUE
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max)
*/

//-------------------------------------------------------------------------------------------------------------------------------------------
//CODING CHALLENGE # 2
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays og dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16+ dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at;east 18 years old).

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)

4. Run the function for both test datasets.

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]


const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average2 = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(`${avg1}, ${avg2}`);


const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  //.map((mov) => mov * eurToUsd)
  .map((mov, i, arr) => {
    //console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + cur);

console.log(totalDepositsUSD);
*/

//-------------------------------------------------------------------------------------------------------------------------------------------
//CODING CHALLENGE # 3
/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge0 = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average2 = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};

const avg1 = calcAverageHumanAge0([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge0([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1 + avg2);

//-------------------------------------------------------------------------------------------------------------------------------------------

//FIND METHOD

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

//-------------------------------------------------------------------------------------------------------------------------------------------

//SOME AND VERY
console.log(movements);

//EQUALITY
console.log(movements.includes(-130));

//CONDITION
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

//EVERY
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

//SEPARATE CALLBACKS
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//-------------------------------------------------------------------------------------------------------------------------------------------

//FLAT AND FLATMAP METHODS

//THE FLAT METHOD
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1));

const accountMovements = accounts.map((acc) => acc.movements);
const allMovements = accountMovements.flat();
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);

const accountMovements = accounts.map((acc) => acc.movements);
const allMovements = accountMovements.flat();
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
const overallBalance2 = accounts.flatMap((acc) => acc + mov, 0);


//-------------------------------------------------------------------------------------------------------------------------------------------

//SORTING ARRAYS

//STRINGS
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

//NUMBERS
console.log(movements);
//console.log(movements.sort()); <-THIS ONE DOESN'T WORK
//RETURN < 0, A will be before B
//RETURN > 0, B will be before A

//ASCENDING
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
});

//DESCENDING
movements.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
});

//SIMPLIFIED
movements.sort((a, b) => a - b);


//-------------------------------------------------------------------------------------------------------------------------------------------

//FILL METHOD
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//CREATE AN ARRAY FROM ANOTHER ARRAY
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1); //cur is not used so can be replaced by '_'
console.log(z);
*/

//SUMMARY

/*
TO MUTATE ORIGINAL ARRAY:
ADD TO ORIGINAL = .push .unshift
REMOVE FROM ORIGINAL = .pop .shift .splice
OTHERS = .reverse .sort .fill

A NEW ARRAY:
COMPUTED FROM ORIGINAL = .map
FILTERED USING CONDITION = .filter
PORTION OF ORIGINAL = .slice
ADDING ORIGINAL TO OTHER = .concat
FLATTENING THE ORIGINAL = .flat .flatMap

AN ARRAY INDEX:
BASED ON VALUE = .indexOf
BASED ON TEST CONDITION = .findIndex
AN ARRAY ELEMENT BASED ON TEST CONDITION = .find

KNOW IF ARRAY INCLUDES:
BASED ON VALUE = .include
BASED ON TEST CONDITION = .some .every
A NEW STRING BASED ON SEPARATOR STRING = .join

TO TRANSFORM TO VALUE:
BASED ON ACCUMULATOR = .reduce
TO JUST LOOP ARRAY = .forEach


//ARRAY METHODS PRACTICE 1

//GET THE LIST OF ARRAY MOVEMENTS FROM AN ARRAY
const bankDepositSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
//ADD FLAT TO REMOVE FROM INNER ARRAY
//ADD FILTER TO REMOVE NEGATIVE VALUES
//ADD REDUCE TO SUM ALL VALUES
//OR JUST USE
//const bankDepositSum = accounst.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0)

console.log(bankDepositSum);

//ARRAY METHODS PRACTICE 2

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000);

//ARRAY METHOD PRACTICE 3
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums; //DON'T FORGET TO RETURN DATA
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums);

const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      //cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums; //DON'T FORGET TO RETURN DATA
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits);
console.log(withdrawals);

//ARRAY METHOD PRACTICE 4
//this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  const expectations = [
    "a",
    "an",
    "the",
    "but",
    "or",
    "on",
    "in",
    "with",
    "and",
  ];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (expectations.includes(word) ? word : capitalize(word)))
    .join(" ");
  return titleCase;
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
*/

//-------------------------------------------------------------------------------------------------------------------------------------------
//CODING CHALLENGE #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose)
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//SOLUTION FOR NUMBER 1
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//SOLUTION FOR NUMBER 2
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }.`
);

//SOLUTION FOR NUMBER 3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

//SOLUTION FOR NUMBER 4
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

//SOLUTION FOR NUMBER 5
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

//SOLUTION FOR NUMBER 6
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

//SOLUTION FOR NUMBER 7
console.log(dogs.filter(checkEatingOkay));

//SOLUTION FOR NUMBER 8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

//-------------------------------------------------------------------------------------------------------------------------------------------

//DISPLAY LOGS

const display_movements = function (movements, sort = false) {
  movements.forEach(function (mov, i) {
    //containerMovements.innerHTML = "";

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//display_movements(account1.movements);

//COMPUTING USERNAMES

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

//calcDisplayBalance(account1.movements);

//SUMMARY DISPLAY

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      //console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};

//calcDisplaySummary(account1.movements);

//FINDING ACCOUNTS

//console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");

//console.log(account);

//SIMPLIFIED RESULTS

const updateUI = function (acc) {
  //DISPLAY MOVEMENTS
  display_movements(currentAccount.movements);

  //DISPLAY BALANCE
  calcDisplayBalance(currentAccount);

  //DISPLAY SUMMARY
  calcDisplaySummary(currentAccount);
  //console.log("login");
};

//IMPLEMENTING LOGIN
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); //THIS WILL PREVENT THE PAGE FROM REFRESHING

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  //console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //DISPLAY UI AND WELCOME MESSAGE
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //CLEAR LOGIN FIELDS
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

//IMPLEMENTING TRANSFERS

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //console.log("valid");
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = " ";
});

//GRANTING A LOAN
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = " ";
});

//FINDINDEX METHOD TO CLOSING AN ACCOUNT

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value === currentAccount.pin)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1); //DELETE ACCOUNT OR REMOVED FROM ARRAY
    containerApp.style.opacity = 0; //HIDE UI
  }
  inputCloseUsername.value = inputClosePin.value = " ";
});

//SORTING MOVEMENTS

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  display_movements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//OTHER USE OF ARRAY.FROM STRUCTURE
//const moementsUI = Array.from(document.querySelectorAll(".movements__value"));
//console.log(moementsUI);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace(" EUR", ""))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll(".movements__value")];
});
