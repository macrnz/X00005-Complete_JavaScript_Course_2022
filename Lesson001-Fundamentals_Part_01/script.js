console.log('01 - JavaScript Fundamentals - Part 01\n ')

/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let first_name = 'Matilda';
console.log(first_name);
console.log(first_name);
console.log(first_name);
console.log(first_name);
console.log(first_name);

let CONSTANT_VALUE = 'All upper case if constant value';
console.log(CONSTANT_VALUE);

// Comment Section
/*

This is a Multi-Line Comment



console.log(typeof true);
console.log(typeof 'JavaScript');
console.log(typeof 23);

//Undefined
let javascriptisfun;

console.log(javascriptisfun);

//Original
//let javascriptisfun = true;

//console.log(javascriptisfun);

//Re-assign new variable, do not use let
javascriptisfun = 'YES!';

console.log(javascriptisfun);

//Constant Variable
const birth_year = 1992;

//Basic Operators

const current_year = 2022;
const age_big_boss = current_year - 1992;
const age_pretty_boss = age_big_boss - 4;

console.log(age_big_boss);
console.log(age_pretty_boss);

//More than 1 Different Values in the log

console.log(age_big_boss * 2, age_big_boss / 10, 2 ** 3);

/*
Addition:       '+'
Subtraction:    '-'
Multiplication: '*'
Division:       '/'
Exponent        '**'
Additional      '+=' '-=' '*=' '/='
x=x+1:          'x++'
x=x-1:          'x--'
Comparison:     '>' '<' '>=' '<='


const my_first_name = 'Mark Renz';
const my_middle_name = 'Lagman';
const my_last_name = 'Carillo';

console.log(my_first_name + ' ' + my_middle_name + ' ' + my_last_name);

*/

//---------------------------------------------------------------------------------------------------------------
//Coding Challenge #1

console.log('* CODING CHALLENGE No.01')

/*
Mark and John are trying to compare their BMI (Body mass Index), which is calculated using the formula:
BMI = mass / height **2 = mass / (height * height).
(mass in kg and height in meter).

1. Sotre Mark's and John's mass and height in variables
2. Calculate both their BMI's using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about wether Mark has a higher BMI than John.

TEST DATA 1: Marks weight is 78kg and is 1.69m tall, John weights 92kg and is 1.95m tall.
TEST DATA 2: Marks weight is 95kg and is 1.88m tall, John weights 85kg and is 1.76m tall.
*/

//Mark's Data:
let mark_weight;
let mark_height;

//John's Data"
let john_weight;
let john_height;

//Output for Test Data 1
mark_weight = 78;
mark_height = 1.69;
john_weight = 92;
john_height = 1.95;
let mark_BMI = mark_weight / (mark_height ** 2);
let john_BMI = john_weight / (john_height ** 2);
let markHigherBMI = mark_BMI > john_BMI;
console.log(mark_BMI + ' > ' + john_BMI);
console.log(markHigherBMI);

//Output for Test Data 2
mark_weight = 95;
mark_height = 1.88;
john_weight = 85;
john_height = 1.76;
mark_BMI = mark_weight / (mark_height ** 2);
john_BMI = john_weight / (john_height ** 2);
markHigherBMI = mark_BMI > john_BMI;
console.log(mark_BMI + ' > ' + john_BMI);
console.log(markHigherBMI);


//Section Spacer
console.log('\n ----------------------------------------------------\n ')

/*
//TAKING DECISIONS: IF/ELSE STATEMENTS
console.log('* Taking Decisions: if/else statements')
const age = 15;

if (age >= 18) {
    console.log('Sarah can stard driving license');
}
else {
    const yearsLeft = 18 - age;
    console.log('Sarah is too young. wait another ' + yearsLeft + ' years :)');
}
*/

//---------------------------------------------------------------------------------------------------------------
//Coding Challenge #2

console.log('* CODING CHALLENGE No.02')

/*
Mark and John are trying to compare their BMI (Body mass Index), which is calculated using the formula:
BMI = mass / height **2 = mass / (height * height).
(mass in kg and height in meter).

1. Sotre Mark's and John's mass and height in variables
2. Calculate both their BMI's using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about wether Mark has a higher BMI than John.

TEST DATA 1: Marks weight is 78kg and is 1.69m tall, John weights 92kg and is 1.95m tall.
TEST DATA 2: Marks weight is 95kg and is 1.88m tall, John weights 85kg and is 1.76m tall.
*/

//Output for Test Data 1
mark_weight = 78;
mark_height = 1.69;
john_weight = 92;
john_height = 1.95;
mark_BMI = mark_weight / (mark_height ** 2);
john_BMI = john_weight / (john_height ** 2);
if (mark_BMI > john_BMI) {
    console.log("Mark's BMI(" + mark_BMI + ") is higher than John's BMI(" + john_BMI + ")!");
}
else {
    console.log("Mark's BMI(" + mark_BMI + ") is lower than John's BMI(" + john_BMI + ")!");
}

//Output for Test Data 2
mark_weight = 95;
mark_height = 1.88;
john_weight = 85;
john_height = 1.76;
mark_BMI = mark_weight / (mark_height ** 2);
john_BMI = john_weight / (john_height ** 2);
if (mark_BMI > john_BMI) {
    console.log("Mark's BMI(" + mark_BMI + ") is higher than John's BMI(" + john_BMI + ")!");
}
else {
    console.log("Mark's BMI(" + mark_BMI + ") is lower than John's BMI(" + john_BMI + ")!");
}

//Section Spacer
console.log('\n ----------------------------------------------------\n ')

/*
if
else if
else
*/

// Input for console
// const your_variable_here = prompt("Well hello there")

/*
and =   &&
or  =   ||
not =   !
*/

//---------------------------------------------------------------------------------------------------------------
//Coding Challenge #3

console.log('* CODING CHALLENGE No.03')
/*
1. Calculate the average score of each team, using the test data below.
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for
that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule,
a team only wins if it has a higher score than the other team, and the same time
a score of atleast 100 points. HINT: Use a logical operator to test for minimum
score, as well as multiple else if blocks.
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both
teams have the same score and both have a score greater or equal 100 points.
Otherwise, no team wins the trophy.

TEST DATA:
Dolphins Scores:    96  108 89
Koalas Scores:      88  91  110

TEST DATA BONUS 1:
Dolphins Scores:    97  112 101
Koalas Scores:      109 95  123

TEST DATA BONUS 2:
Dolphins Scores:    97  112 101
Koalas Scores:      109 95  106
*/

let score_dolphins_total;
let score_koalas_total;
let ave_dolphins;
let ave_koalas;

//DATA INPUT BASIC
console.log("BASIC CHALLENGE")
score_dolphins_total = 96 + 108 + 89;
score_koalas_total = 88 + 91 + 110;
ave_dolphins = score_dolphins_total / 3;
ave_koalas = score_koalas_total / 3;

console.log("Checker:" + ave_dolphins + " " + ave_koalas)

if (ave_dolphins > ave_koalas) {
    console.log("The winner with an average score of: " + ave_dolphins + " is Dolphins!")
}
else if (ave_dolphins < ave_koalas) {
    console.log("The winner with an average score of: " + ave_koalas + " is Koalas!")
}
else if (ave_dolphins = ave_koalas) {
    console.log("The winner with an average score of: " + ave_dolphins + " is a DRAW!")
}

//DATA INPUT BONUS 1:
console.log("BONUS CHALLENGE 1")
score_dolphins_total = 97 + 112 + 101
score_koalas_total = 109 + 95 + 123
ave_dolphins = score_dolphins_total / 3;
ave_koalas = score_koalas_total / 3;

console.log("Checker:" + ave_dolphins + " " + ave_koalas)

if ((ave_dolphins && ave_koalas) >= 100) {
    if (ave_dolphins > ave_koalas) {
        console.log("The winner with an average score of: " + ave_dolphins + " is Dolphins!")
    }
    else if (ave_dolphins < ave_koalas) {
        console.log("The winner with an average score of: " + ave_koalas + " is Koalas!")
    }
    else if (ave_dolphins = ave_koalas) {
        console.log("The winner with an average score of: " + ave_dolphins + " is a DRAW!")
    }
}
else if ((ave_dolphins || ave_koalas) >= 100) {
    if (ave_dolphins > ave_koalas) {
        console.log("The winner with an average score of: " + ave_dolphins + " is Dolphins!")
    }
    else if (ave_dolphins < ave_koalas) {
        console.log("The winner with an average score of: " + ave_koalas + " is Koalas!")
    }
    else if (ave_dolphins = ave_koalas) {
        console.log("The winner with an average score of: " + ave_dolphins + " is a DRAW!")
    }
}
else if ((!ave_dolphins && !ave_koalas) >= 100) {
    console.log("NOBODY WINS!")
}

//DATA INPUT BONUS 2:
console.log("BONUS CHALLENGE 2")
score_dolphins_total = 97 + 112 + 101
score_koalas_total = 109 + 95 + 106
ave_dolphins = score_dolphins_total / 3;
ave_koalas = score_koalas_total / 3;

console.log("Checker:" + ave_dolphins + " " + ave_koalas)

if ((ave_dolphins && ave_koalas) >= 100) {
    if (ave_dolphins > ave_koalas) {
        console.log("The winner with an average score of: " + ave_dolphins + " is Dolphins!")
    }
    else if (ave_dolphins < ave_koalas) {
        console.log("The winner with an average score of: " + ave_koalas + " is Koalas!")
    }
    else if (ave_dolphins = ave_koalas) {
        console.log("The winner with an average score of: " + ave_dolphins + " is a DRAW!")
    }
}
else if ((ave_dolphins || ave_koalas) >= 100) {
    if (ave_dolphins > ave_koalas) {
        console.log("The winner with an average score of: " + ave_dolphins + " is Dolphins!")
    }
    else if (ave_dolphins < ave_koalas) {
        console.log("The winner with an average score of: " + ave_koalas + " is Koalas!")
    }
    else if (ave_dolphins = ave_koalas) {
        console.log("The winner with an average score of: " + ave_dolphins + " is a DRAW!")
    }
}
else if ((!ave_dolphins && !ave_koalas) >= 100) {
    console.log("NOBODY WINS!")
}

/*
switch
case
break
default
*/

//Section Spacer
console.log('\n ----------------------------------------------------\n ')
//---------------------------------------------------------------------------------------------------------------
//Coding Challenge #4

console.log('* CODING CHALLENGE No.04')
/*
Steven want to build a very simple tip calculator for whenever he goes eating
in a restaurant. In his country its usual to tip 15% if the bill value is between 50 and 300.
If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value.
Create a variable called 'tip' for this. It's not allowed to use if/else statement.
(If it's easier for you, you can start with an if/else statement, and then try to convert it
into ternary operator!).

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: 'The bill was 275, the tip was 41.25, and the total value is 316.25'

TEST DATA: Test for the bill 275, 40 and 430.
*/
let bill;
let tip;

bill = 275
console.log("The bill was " + bill + ", " + "the tip was " + ((bill >= 50 && bill <= 300) ? (tip = bill * 0.15) : tip = bill * 0.20) + " and the total value is " + (bill + tip))

bill = 40
console.log("The bill was " + bill + ", " + "the tip was " + ((bill >= 50 && bill <= 300) ? (tip = bill * 0.15) : tip = bill * 0.20) + " and the total value is " + (bill + tip))

bill = 430
console.log("The bill was " + bill + ", " + "the tip was " + ((bill >= 50 && bill <= 300) ? (tip = bill * 0.15) : tip = bill * 0.20) + " and the total value is " + (bill + tip))