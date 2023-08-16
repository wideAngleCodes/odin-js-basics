

// game.js

let playerWins = 0;
let computerWins = 0;

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerWins++;
    return "You win!";
  } else {
    computerWins++;
    return "Computer wins!";
  }
}

function playGame(playerChoice) {
  const compChoice = computerChoice();
  const result = determineWinner(playerChoice, compChoice);
  document.getElementById("result").textContent = `You chose ${playerChoice}. Computer chose ${compChoice}. ${result} Score - You: ${playerWins}, Computer: ${computerWins}`;
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    playGame(playerChoice);
  });
});