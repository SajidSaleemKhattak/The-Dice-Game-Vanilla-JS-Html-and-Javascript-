"use strict";

// SELECTING ELEMENTS;
let scorep1 = document.getElementById("score--0");
let scorep2 = document.getElementById("score--1");
let dice = document.querySelector(".dice");
let new_game = document.querySelector(".btn--new");
let roll_dice = document.querySelector(".btn--roll");
let hold_dice = document.querySelector(".btn--hold");
let player0 = document.getElementById("current--0");
let player1 = document.getElementById("current--1");
let background_1 = document.querySelector(".player--0");
let background_2 = document.querySelector(".player--1");
let current_score, active_player, final_score, playing, back_active;

function init() {
  current_score = 0;
  active_player = 0;
  final_score = [0, 0];
  playing = true;

  background_1.classList.add("player--active");
  background_1.classList.remove("player--winner");
  background_2.classList.remove(`player--active`);
  background_2.classList.remove("player--winner");
  scorep1.textContent = 0;
  scorep2.textContent = 0;
  dice.classList.add("hidden");
}

init();
// This FUNCTION WILL BE USED TO SWITCH PLAYERS;

function switching_player() {
  // SETTING THE CURRENT SCORE = 0 🤣🤣🤣 BECAUSE YOU GOT ONE :
  current_score = 0;
  document.getElementById(`current--${active_player}`).textContent = 0;
  //NOW SWITCHING TO THE NEXT PLAYER AS WELL:
  active_player = active_player === 0 ? 1 : 0;

  background_1.classList.toggle("player--active");
  background_2.classList.toggle("player--active");
}

//ADDING THE EVENT LISTENERS FOR THE ROLL DICE BUTTON:
roll_dice.addEventListener("click", function () {
  if (playing) {
    // Radnodm Number Generated:
    let random = Math.floor(Math.random() * 6) + 1;
    // When that random number is generated we have to change the PNG IMAGE accordingly and also we have to REMOVE the HIDDEN CLASS:

    // SETTING THE DICE ACCORDINGLY TO THE RANDOM NUMBER BETWEEN 1 - 6 :
    dice.src = `dice-${random}.png`;
    // REMOVING THE HIDDEN CLASS;
    dice.classList.remove("hidden");

    // Now checking if the DICE = 1 In that case we will switch to the next Player:
    if (random !== 1) {
      // IMCREMENTING CURRENT SCORE UNTIL IT THE DICE GETS EITHER 1 THEN WE HAD TO SET THE CURRENT SCORE AGAIN TO ZERO AND IF SOMEONE CLICKS ON HOLD THE WE HAVE TO SAVE THE CURRENT SCORE TO THE PLAYER'S MAIN SCORE:

      //INCREMENTING:
      current_score += random;
      document.getElementById(`current--${active_player}`).textContent =
        current_score;
      // console.log(active_player);
    } else {
      switching_player();
    }
  }
});

hold_dice.addEventListener("click", function () {
  if (playing) {
    final_score[active_player] = final_score[active_player] + current_score;
    // CURRENT SCORE ADDS TO THE PLAYER TOTAL SCORE WHEN HE CLICKS ON HOLD AND ITSLEF GETS ZERO
    document.getElementById(`score--${active_player}`).textContent =
      final_score[active_player];
    document.getElementById(`current--${active_player}`).textContent = 0;

    //IF PLAYER TOTAL SCORE>=100 => PLAYER WINS :
    if (final_score[active_player] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${active_player}`)
        .classList.add("player--winner");
      document
        .querySelector(`player--${active_player}`)
        .classList.remove("player-active");
      dice.classList.add("hidden");
    }
    // SWITCHING PLAYER:
    else switching_player();
  }
});

new_game.addEventListener("click", init);
