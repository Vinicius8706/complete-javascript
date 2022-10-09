'use strict';

// Selecting elements with id
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
let currentScore = 0;
score0El.textContent = 0
let activePlayer = 0;
const scores = [0, 0]
score1El.textContent = 0
diceEl.classList.add('hidden')

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1

  //2 Display dice

  diceEl.classList.remove('hidden')
  diceEl.src = `dice-${dice}.png`
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    current0El.textContent = currentScore; //CHANGE LATER
  } else {
    //Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
  }
})