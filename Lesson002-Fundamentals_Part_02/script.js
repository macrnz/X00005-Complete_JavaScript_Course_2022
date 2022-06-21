console.log('01 - JavaScript Fundamentals - Part 02\n ')
function print(text) {
    console.log(text)
}
console.log("CONTENTS:")

print("00 ACTIVATING STRICT MODE");
'use strict';
//this command should always be place top of code

print("01 FUNCTIONS");
/*
function trigger() {
    console.log("this is how to use a function")
}
trigger() //this is how to run the function

function trigger_with_value(item_01, item_02) {
    console.log(item_01, item_02);
    const trigger_return_value = "This will print " + item_01 + " and " + item_02;
    return trigger_return_value
}
const output_trigger = trigger_with_value("value01", "value02");
console.log(output_trigger)
*/

print("02 FUNCTION DECLARATION VS EXPRESSIONS");
/*
function trigger_declaration(value) { } //this is a function declaration
const trigger_expression = function (value) { } //this is a function expression
*/

print("03 ARROW FUNCTION");
/*
//single value
const convert = trigger_value => "This " + trigger_value + " will return and print on the console";
const output_trigger = convert("text here");
console.log(output_trigger);

//more than 1 value
const convert_1 = (trigger_value_1, trigger_value_2) => "This " + trigger_value_1 + " will return and print on the console with " + trigger_value_2;
const output_trigger_1 = convert_1("text here", "another text");
console.log(output_trigger_1);
*/

print("03 FUNCTIONS CALLING OTHER FUNCTIONS");
/*
function trigger_inside(value_inside_01, value_inside_02) {
    return ("result for input " + value_inside_01), ("result for output " + value_inside_02)
}

function trigger_outside(value_outside_01, value_outside_02) {
    const text_output_01 = trigger_inside(value_outside_01, value_outside_02);
    const text_output_02 = trigger_inside(value_outside_01, value_outside_02);
    const output_all = "This line will print " + text_output_01 + "\n and this line will print " + text_output_02;
    return output_all
}
console.log(trigger_outside(2, 3))
*/
print("04 REVIEWING FUNCTIONS")

print("05 CODING CHALLENGE 01")
/*
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each teams competes 3 times, and then the average of the 3 scores is calculated
(so one average score per team).
A team only wins if it has at least DOUBLE the average score of the other team.
Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.
2. Use the function to calculate the average for both teams.
3. Create a function 'CheckWinner' that takes the average score of each team as parameters
(avgDolphins, avgKoalas), and then logs the winner to console, together with the victory points
according to the rule above. Example: Koalas Win (30 vs 13).
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time,

TEST DATA 1: Dolphins score 44, 23, 71. Koalas score 65, 54, 49.
TEST DATA 2: Dolphins score 85, 54, 41. Koalas score 23, 34, 47.
*/
/*
let dolphins_score;
let koalas_score;

const average_dolphin = (score_1, score_2, score_3) => ((score_1 + score_2 + score_3) / 3)
const average_koalas = (score_4, score_5, score_6) => ((score_4 + score_5 + score_6) / 3)

function winner_checker(score_1, score_2, score_3, score_4, score_5, score_6) {
    dolphins_score = average_dolphin(score_1, score_2, score_3);
    koalas_score = average_koalas(score_4, score_5, score_6);
    if (dolphins_score >= (koalas_score * 2)) {
        console.log("Dolphins WIN. Score " + dolphins_score + " vs " + koalas_score);
    }
    else if (koalas_score >= (dolphins_score * 2)) {
        console.log("Koalas WIN. Score " + koalas_score + " vs " + dolphins_score);
    }
    else {
        console.log("Nobody Wins!")
    }
}
print("\nTEST DATA 1");
print("Data checker " + ((44 + 23 + 71) / 3) + " and " + ((65 + 54 + 49) / 3));
winner_checker(44, 23, 71, 65, 54, 49)

print("\nTEST DATA 2");
print("Data checker " + ((85 + 54 + 41) / 3) + " and " + ((23 + 34 + 27) / 3));
winner_checker(85, 54, 41, 23, 34, 27)
*/

print("06 INTRODUCTION TO ARRAYS");
/*
const item_list = ['item_01', 'item_02', 'item_03', 'etc'];
const another_list = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(item_list[0]); //output will be item_01
console.log(item_list[1]); //output will be item_02
console.log(item_list.length) //output will be how many items are in the list
item_list[1] = 'item_replaced'; //replaces item_02 temporarily depending on the situation until changed again
*/

print("07 BASIC ARRAY OPERATIONS (METHODS");
/*
const item_list = ['item_01', 'item_02', 'item_03'];

item_list.push('item_04'); //adds another item at the end of the list
item_list.unshift('item_00'); //adds another item at the first position of the list
item_list.pop; //removes the item at the end of the list
item_list.shift; //removes the item at the first position of the list
item_list.indexOf('item_03'); //will show on what position item_03 is which is position 2
item_list.includes('item_03'); //to check if the item is in the list and returns to true/false
*/

print("08 CODING CHALLENGE 02")
/*
Steven is still building his tip calculator, using the same rules as before!
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different
the tip is 20%.

1. Write a function 'calctip' that takes any value as an input and returns the
corresponding tip, calculated based on the rules above (you can check out the code from
first tip calculator challenge if you need to). Use the function type you like the most.
Test the function using the bill value of 100.
2. And now let's use arrays! so create an array called 'bills' containing the text data below.
3. create an array 'tips' containing the tip value for each bill, calculated from the
function you created before.
4. BONUS: create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44
*/
/*
let tip;
let bill;
const list_bill = [125, 555, 44];
const list_tip = [];
const list_total = [];

function tip_calculator(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    }
    else { return bill * 0.20 }
}

print("\nFIRST BILL");
tip = tip_calculator(list_bill[0]);
list_tip.push(tip);
bill = list_bill[0] + list_tip[0];
list_total.push(bill);

console.log(list_bill);
console.log(list_tip);
console.log(list_total);

print("\nSECOND BILL");
tip = tip_calculator(list_bill[1]);
list_tip.push(tip);
bill = list_bill[1] + list_tip[1];
list_total.push(bill);

console.log(list_bill);
console.log(list_tip)
console.log(list_total)

print("\nTHIRD BILL");
tip = tip_calculator(list_bill[2]);
list_tip.push(tip);
bill = list_bill[2] + list_tip[2];
list_total.push(bill);

console.log(list_bill);
console.log(list_tip)
console.log(list_total)
*/

print("09 INTRODUCTION TO OBJECTS");

print("10 DOT VS BRACKET NOTATIONS");

print("11 OBJECT METHODS")

print("12 CODING CHALLENGE 03");
/*
Let's go back to Mark and John comparing their BMI's!
This time, let's use objects to implement their calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in m).

1. For each of them, create an object with properties for their full name, mass, and height
(Mark Miller and John Smith).
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has a higher BMI, together with the full name and the respective BMI.
Example: John's BMI (28.3) is higher than Mark's (23.9)!

TEST DATA: Mark weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.
*/
/*
const dictionary_mark = {
    full_name: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calc_bmi: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
}

const dictionary_john = {
    full_name: 'John Smith',
    weight: 92,
    height: 1.95,
    calc_bmi: function () {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
}

console.log("Data Checker: Mark's BMI is " + dictionary_mark.calc_bmi() + " while \n John's BMI is " + dictionary_john.calc_bmi());
console.log((dictionary_john > dictionary_mark ? (dictionary_john.full_name + "'s BMI (" + dictionary_john.bmi + ") is higher than " + dictionary_mark.full_name + "'s (" + dictionary_mark.bmi + ")!") : (dictionary_mark.full_name + "'s BMI (" + dictionary_mark.bmi + ") is higher than " + dictionary_john.full_name + "'s (" + dictionary_john.bmi + ")!")));
*/

print("13 ITERATION: THE FOR LOOP");
/*
for (let loop_limit = 1; loop_limit <= 10; loop_limit++) {
    console.log(loop_limit)
}
*/

print("14 LOOPING ARRAYS, BREAKING AND CONTINUING");
print("15 LOOPING BACKWARDS AND LOOPS IN LOOPS");
print("16 THE WHILE LOOP");
print("17 CODING CHALLENGE 04");
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values.
2. Create empty arrays for the tips and the totals ('tips' and 'totals').
3. Use the 'calctip' function we wrote before (no need to repeat) to calculate tips
and total values (bill + tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52

HINT: call calctip in the loop and use the push method to add values to the tips and totals arrays

4. BONUS: Write a function 'calcaverage' which takes an array called 'arr' as an argument.
This function calculates the average of all numbers in the given array.
This is a DIFFICULT challenge (we haven't done this before!) Here is how to solve it:
    4.1. First, you will need to add up all values in the array,
    to do the addition, start by creating a variable 'sum' that starts at 0.
    then loop the array using a 'for' loop.
    In each iteration, add the current value to the 'sum' variable.
    This way, by the end of the loop, you have all values added together.
    4.2. To calculate the average, divide the sum you calculated before by the length of the array
    (because that's the number of elements)
    4.3. Call the function with the 'totals' array.
*/
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calctips(bill) {
    tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
    total = bill + tip;
    tips.push(tip);
    totals.push(total);
}

function calcaverage_bill() {
    let total_bill = bills.reduce((a, b) => a + b, 0);
    ave_bill = total_bill / bills.length;
    return ave_bill;
}

function calcaverage_tip() {
    let total_tip = tips.reduce((a, b) => a + b, 0);
    ave_tip = total_tip / tips.length;
    return ave_tip;
}

function calcaverage_total() {
    let total_total = totals.reduce((a, b) => a + b, 0);
    ave_total = total_total / totals.length;
    return ave_total;
}

for (let i = 0; (i <= bills.length - 1); i++) {
    calctips(bills[i]);
}
average_bill = calcaverage_bill();
average_tip = calcaverage_tip();
average_total = calcaverage_total();

console.log("Bills: " + bills);
console.log("Tips: " + tips);
console.log("Totals: " + totals);
console.log("Average Bill: " + average_bill);
console.log("Average Tip: " + average_tip);
console.log("Average Total: " + average_total);
*/