let number = Math.floor(Math.random() * 100) + 1;
let guess = 0;
let count = 0;
do {
  count++;
  guess = prompt("Guess a number between 1 to 100: ");
  guess = Number.parseInt(guess);
  if (guess < 1 || guess > 100) console.log("Invalid Number");
  else if (guess < number) console.log("Guess something bigger");
  else if (guess > number) console.log("Guess something smaller");
  else console.log("Correct Number: Your score is ", 100 - count);
} while (guess != number);
