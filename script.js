'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 27;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (theMessage) {
  document.querySelector('.message').textContent = theMessage;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  //when not guessed
  if (!guess) {
    // document.querySelector('.message').textContent = 'no number';
    displayMessage('No Number !');
    //when guessed correctly
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct number';
    displayMessage('Correct Number !');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = ' #60b347 ';

    document.querySelector('.number').style.width = '30rem';
    //for highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'To High !' : 'To Low !';
      displayMessage(guess > secretNumber ? 'To High !' : 'To Low !');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'No more guesses left !';

      displayMessage('No More Guesses Left!');
      document.querySelector('.score').textContent = 0;

      //aafai
      document.querySelector('body').style.backgroundColor = ' #F42C1E ';

      document.querySelector('.number').textContent = secretNumber;
    }
  } //when guessed to high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'No more guesses left !';

  //     document.querySelector('.score').textContent = 0;

  //     //aafai
  //     document.querySelector('body').style.backgroundColor = ' #F42C1E ';

  //     document.querySelector('.number').textContent = secretNumber;
  //   } //when guessed low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'No more guesses left !';

  //     document.querySelector('.score').textContent = 0;
  //     //afai
  //     document.querySelector('body').style.backgroundColor = ' #F42C1E ';

  //     document.querySelector('.number').textContent = secretNumber;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
