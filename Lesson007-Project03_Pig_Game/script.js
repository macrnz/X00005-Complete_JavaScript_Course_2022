'use strict';
//MODIFYING THE DATA OF ID
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1');
const currentscore0 = document.getElementById('current--0');
const currentscore1 = document.getElementById('current--1');
const diceel = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
let playing;
let scores;
let currentscore;
let activeplayer;

//STARTING CONDITIONS
const newgame = function () {
  score0el.textContent = 0;
  score1el.textContent = 0;
  currentscore0.textContent = 0;
  currentscore1.textContent = 0;
  diceel.classList.add('hidden');
  player0el.classList.remove('player--winner');
  player1el.classList.remove('player--winner');
  player0el.classList.add('player--active');
  player1el.classList.remove('player--active');
  playing = true;
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
};

newgame();

const switchplayer = function () {
  document.getElementById('current--' + activeplayer).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
};

//ROLLING DICE FUNCTIONALITY
btnroll.addEventListener('click', function () {
  if (playing) {
    // 1. GENERATE A RANDOM DICE ROLL
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. DISPLAY DICE
    diceel.classList.remove('hidden');
    diceel.src = 'dice-' + dice + '.png';
    // 3. CHECK FOR ROLLED 1: IF TRUE, SWITCH TO OTHER PLAYER
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById('current--' + activeplayer).textContent =
        currentscore;
    } else {
      switchplayer();
    }
  }
});
btnhold.addEventListener('click', function () {
  if (playing) {
    //1. ADD CURRENT SCORE TO ACTIVE PLAYER'S SCORE
    scores[activeplayer] += currentscore;
    document.getElementById('score--' + activeplayer).textContent =
      scores[activeplayer];
    //2. CHECK IF PLAYER's SCORE >= 100
    //2.1 FINISH THE GAME
    if (scores[activeplayer] >= 100) {
      playing = false;
      diceel.classList.add('hidden');
      document
        .querySelector('.player--' + activeplayer)
        .classList.add('player--winner');
      document
        .querySelector('.player--' + activeplayer)
        .classList.remove('player--active');
    }
    //2.2 SWITCH TO THE NEXT PLAYER
    else {
      switchplayer();
    }
  }
});

btnnew.addEventListener('click', newgame);
