const arr = ["rock", "paper", "scissor"];
let play = true;
while (play) {
  const computerChoice = arr[Math.floor(Math.random() * 4)];
  let playerChoice = prompt(
    "Let's play Rock🪨, Paper📃, and Scissor✂️. Enter your choice"
  );
  playerChoice = playerChoice.toLowerCase();
  if (
    playerChoice != "rock" &&
    playerChoice != "paper" &&
    playerChoice != "scissor"
  )
    alert("Enter a valid choice");
  else {
    let result;
    if (computerChoice == playerChoice) result = "It's a tie💨";
    else if (playerChoice == "rock") {
      if (computerChoice == "paper") result = "Computer wins";
      else result = "You win";
    } else if (playerChoice == "paper") {
      if (computerChoice == "rock") result = "You win";
      else result = "Computer wins";
    } else {
      if (computerChoice == "rock") result = "Computer wins";
      else result = "You win";
    }
    alert(
      `Your choice: ${playerChoice.toUpperCase()} \nComputer's choice: ${computerChoice.toUpperCase()} \nResult: ${result} `
    );
  }
  play = confirm("Do you want to continue playing? 👀");
}
