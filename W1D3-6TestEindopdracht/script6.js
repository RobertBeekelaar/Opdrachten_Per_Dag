let name = prompt('Welcome what is your name?', ['John Doe']);

alert(`Hello ${name}! Welcome to the game: Guess the Number!`);


let playerNumber = parseInt(prompt('Guess a number between 0 and 25', ['0']));

let computerNumber = Math.floor(Math.random() * 25);

let times = 1;


while (playerNumber !== computerNumber && times < 5) {
  if (playerNumber < 0 || playerNumber > 25) {
    alert('This is not a number between 0 and 25, you still have ' + (5 - times));
  } else {
    alert('You choose ' + playerNumber + '. That is not correct. You still have ' + (5 - times) + ' times to try left.');
  }
  playerNumber = parseInt(prompt('Want to try again?', ['0']));
  times++;
};


if (playerNumber === computerNumber) {
  alert('I choose ' + computerNumber + 'You choose: ' + playerNumber + 'as well. Congrats the game is over!');
} else {
  alert('It is Game Over..Better luck next time!');
};


alert('Goodbye ' + name + ',thanks for playing, see you next time!');