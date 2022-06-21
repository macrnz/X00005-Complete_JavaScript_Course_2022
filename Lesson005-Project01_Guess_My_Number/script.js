'use strict';

//SELECTING AND MANIPULATING EVENTS

//DOM Manipulation

//Getting the text content of a class
////document.querySelector('.classnamehere').textContent
//Modifying the value of a class
//document.querySelector('.classnamehere').textContent = 'place your text here'

//Getting the value of a class
//console.log(document.querySelector('.guess').value);
//Modifying the value of a class
//document.querySelector('.guess').value = 23;

//HANDLING CLICK EVENTS

//Adding what will happen when a button is clicked
/*
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
});
*/

//RANDOM NUMBER GENERATOR
let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//This is for checking value
//document.querySelector('.number').textContent = secret_number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //WHEN THERE IS NO INPUT
  if (!guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'No Number!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
    //WHEN GUESS NUMBER IS CORRECT
  } else if (guess === secret_number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    //WHEN MODIFYING STYLES
    document.querySelector('.body').style.backgroundColor = '#60b437';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //WHEN GUESS NUMBER IS TOO HIGH
  } else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
    //WHEN GUESS NUMBER TOO LOW
  } else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret_number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
