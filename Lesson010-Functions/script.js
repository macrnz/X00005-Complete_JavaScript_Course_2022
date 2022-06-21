'use strict';

/*
const bookings = [];

const create_booking = function (
  flight_num,
  num_passengers = 1,
  price = 199 * num_passengers
) {
  //ES5
  //num_passengers = num_passengers || 1;
  //price = price || 199;

  const booking = {
    flight_num,
    num_passengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

create_booking('LH123');
create_booking('LH123', 2, 800);
create_booking('LH123', 2);
create_booking('LH123', 5);


//-------------------------------------------------------------------------------------------------------------------------------------------

const flight = 'LH234';
const mark = {
  name: 'Mark Renz Carillo',
  passport: 1234567890,
};

const check_in = function (flight_num, passenger) {
  flight_num = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1234567890) {
    alert('Checked in');
  } else {
    alert('Wrong Passport!');
  }
};

check_in(flight, mark);
console.log(flight);
console.log(mark);

const new_passport = function (person) {
  person.passport = 4018910894089;
};

new_passport(mark);
check_in(flight, mark);


//-------------------------------------------------------------------------------------------------------------------------------------------

const one_word = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upper_first_word = function (str) {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upper_first_word);
transformer('Javascript is the best!', one_word);

const high5 = function () {
  console.log('hello');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

//-------------------------------------------------------------------------------------------------------------------------------------------

//Normal Method
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Mark');
greeterHey('Anne');

//Another method
const greetarr = greeting => name => console.log(`${greeting} ${name}`);

greetarr('Hey')('Mark');

//-------------------------------------------------------------------------------------------------------------------------------------------

const lufthansa = {
  airline: 'Lufthansa',
  iata_code: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iata_code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iata_code}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Mark Carillo');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iata_code: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//CALL METHOD

//book(23, 'Sarah Williams'); <-THIS DOESN'T WORK
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iata_code: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//APPLY METHOD
const flight_data = [583, 'George Cooper'];
book.apply(swiss, flight_data);
console.log(swiss);

book.call(swiss, ...flight_data);
console.log(swiss);

//-------------------------------------------------------------------------------------------------------------------------------------------

//BIND METHOD
const book_ew = book.bind(eurowings);
const book_LH = book.bind(lufthansa);
const book_LX = book.bind(swiss);

book_ew(23, 'Steven Williams');

const book_ew_23 = book.bind(eurowings, 23);

book_ew_23('Mark Carillo');
book_ew_23('Martha Cooper');

lufthansa.planes = 300;
lufthansa.buy_plane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buy_plane.bind(lufthansa));

//PARTIAL APPLICATION
const add_tax = (rate, value) => value + value * rate;
console.log(add_tax(0.1, 200));

const add_vat = add_tax.bind(null, 0.23); //add_vat = value => value + value *0.23;

console.log(add_vat(100));
console.log(add_vat(23));

const add_tax_rate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const add_vat2 = add_tax_rate(0.23);
console.log(add_vat2(100));
console.log(add_vat2(23));


//-------------------------------------------------------------------------------------------------------------------------------------------

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  //GET ANSWER
  registered_answer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    //REGISTER ANSWER
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
  },
  display_results(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registered_answer.bind(poll));

poll.display_results.call({ answers: [5, 2, 3] }, 'string');
poll.display_results.call({ answers: [1, 2, 3, 4, 5] });

//-------------------------------------------------------------------------------------------------------------------------------------------

//NORMAL FUNCTION EXPRESSION
const run_once = function () {
  console.log('This will never run again');
};
run_once();

//IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function () {
  console.log('This will never run again x2');
})();

//ANOTHER IMMEDIATELY INVOKED FUNCTION EXPRESSION
(() => console.log('This will ALSO never run again'))();


//-------------------------------------------------------------------------------------------------------------------------------------------

const secure_booking = function () {
  let passenger_count = 0;
  return function () {
    passenger_count++;
    console.log(`${passenger_count} passengers`);
  };
};
const booker = secure_booking();

booker();
booker();
booker();

console.dir(booker);

//-------------------------------------------------------------------------------------------------------------------------------------------

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

//EXAMPLE 2
const board_passengers = function (n, wait) {
  const per_group = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${per_group} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

//const per_group = 1000;
board_passengers(180, 3);

*/
//-------------------------------------------------------------------------------------------------------------------------------------------

//CODING CHALLENGE 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
