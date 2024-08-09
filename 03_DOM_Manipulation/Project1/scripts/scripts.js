// define the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// define the score
let score = 20;

// define the highscore
let highscore = 0;

// display message function
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};
 
// check the input
document.querySelector('.check').addEventListener('click', function () {
    // get the value of the input
    const guess = Number(document.querySelector('.guess').value);

    // validate the input
    if (!guess) {
        displayMessage('⛔ No number!');
    // if the player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // if the guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff0000';
        }
    }
});

// reset the game
document.querySelector('.again').addEventListener('click', function () {
    // reset the score
    score = 20;
    document.querySelector('.score').textContent = score;
    // reset the secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // reset the message
    displayMessage('Start guessing...');
    // reset the input
    document.querySelector('.guess').value = '';
    // reset the number
    document.querySelector('.number').textContent = '?';
    // reset the background color
    document.querySelector('body').style.backgroundColor = '#222';
    // reset the number width
    document.querySelector('.number').style.width = '15rem';
});