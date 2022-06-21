'use strict';
/*
//SPREAD, BECAUSE ON RIGHT SIDE OF +
const arr = [1, 2, ...[3, 4]];

//REST, BECAUSE ON LEFT SIDE OF =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);


//SHORT CIRCUITING

//|| OR OPERATOR
//IF FIRST OPERATOR IS TRUE, IT WILL OUPUT THE FIRST VALUE
console.log(3 || 'Jonas');

//IF FIRST OPERATOR IS NOT TRUE, IT WILL SKIP ON NEXT
console.log('' || 'Jonas');

//IT WILL ALWAYS RETURN THE FIRST TRUE VALUE
console.log(true || 0);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//IF BOTH ARE NOT TRUE, IT WILL RETURN THE LAST VALUE
console.log(undefined || null);

//&& AND OPERATOR

//RETURNS THE FIRST FALSE VALUE
console.log(0 && 'Jonas');

//IF ALL TRUE, RETURNS THE LAST VALUE
console.log(7 && 'Jonas');

//ALWAYS RETURNS THE FIRST FALSE VALUE

console.log('Hello' && 23 && null && 'Jonas');

const rest1 = {
  name: 'Capri',
  numGuest:20
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

rest1.numGuest || = 10;
rest2.numGuest || = 10;

console.log(rest1);
console.log(rest2);

//?? NULLISH COALESCING OPERATOR
//ONLY IDENTIFIES NULL AND UNDEFINED VALUES, NOT 0 OR ''



//CODING CHALLENGE 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Never',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandoski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;

//2.
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

//3.
const allplayers = [...players1, ...players2];
console.log(allplayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printgoals = function (...players) {
  console.log(players.length + ' goals were scored');
};
printgoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printgoals('Davies', 'Muller');
printgoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');

/*
//THE FOR-OF LOOP
const your_array_here = ['item1', 'item2', 'item3']
for (const your_looper_here of your_array_here) console.log(your_looper_here;)


// Data needed for a later exercise
*/
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openinghours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

//PROPERTY NAMES
const properties = Object.keys(openinghours);
console.log(properties);

let openstr = 'We are open on ' + properties.length + ' days: ';
for (const day of properties) {
  openstr += day + ', ';
}
console.log(openstr);

//PROPERTY VALUES
const values = Object.values(openinghours);
console.log(values);

//ENTIRE OBJECT
const entries = Object.entries(openinghours);

for (const [day, { open, close }] of entries) {
  console.log('on ' + key + ' we open at ' + open + ' and close at ' + close);
}
*/
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
*/
/*
console.log(
  '--------------------------------------------------------------------------------------------------------'
);

//SET
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']));

console.log(
  '--------------------------------------------------------------------------------------------------------'
);

//MAPS
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

let time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, ' Test');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

rest.clear();
console.log(rest);
console.log(rest.size);

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again!'],
]);
console.log(question);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log('Answer ' + key + ': ' + value);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//CONVERT MAP TO ARRAY
console.log([...question]);*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = type.startsWith('Delayed')
    ? '0'
    : '' + type.replace('-', '') + from + to + time.replace(':', 'h');
  console.log(output);
}
