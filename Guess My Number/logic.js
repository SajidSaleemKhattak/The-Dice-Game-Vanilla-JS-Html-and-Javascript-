'use strict';
let check_btn = document.querySelector('.btn.check');
let number_selected = document.querySelector('.guess');
let [score_DOC] = document.getElementsByClassName('score');
let [finalscore] = document.getElementsByClassName('highscore');
let again = document.querySelector('.again');
let number = document.querySelector('.number');
console.log(number, 'NUMER');
console.log(again);
let [message] = document.getElementsByClassName('message');
let score = 20;

// RANDOM NUMBER GENERATOR
let random_val = Math.floor(Math.random() * 21);
console.log(random_val);

// CLICK BUTTON HANDLER
check_btn.addEventListener('click', () => {
  if (!number_selected.value == '') {
    let user_input = Number(number_selected.value.trim());
    console.log('TYPE OF USER INPUT:', typeof user_input);
    console.log('random number selected is ', random_val);
    console.log('The number you chose is ', user_input);

    if (typeof user_input === 'number' && !isNaN(user_input)) {
      if (random_val === user_input) {
        console.log('You WON');
        document.querySelector('body').style.backgroundColor = '#60b347';
        finalscore.innerHTML = score;
        message.innerHTML = '🎉Correct';
        number.innerHTML = random_val;
        number.style.width = '30rem';
      } else if (random_val > user_input) {
        if (score >= 0) {
          score--;
          score_DOC.innerHTML = score;
          message.innerHTML = '👇Too Low';
        }
      } else {
        if (score >= 0) {
          score--;
          score_DOC.innerHTML = score;
          message.innerHTML = '☝Too High';
        }
      }
    } else {
      console.log('Please enter a valid number');
    }
  }
});

// AGAIN BUTTON LOGIC:
again.addEventListener('click', () => {
  score = 20;
  number_selected.value = null;
  random_val = Math.floor(Math.random() * 21);
  console.log(random_val);
  finalscore.innerHTML = 0;
  score_DOC.innerHTML = 20;
  message.innerHTML = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = ' #222';
  number.innerHTML = '?';
  number.style.width = '15rem';
});
