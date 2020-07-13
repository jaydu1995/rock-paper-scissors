function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection == "rock" && computerSelection == "paper":
      return "You lose! Paper beats Rock";
    case playerSelection == "paper" && computerSelection == "scissors":
      return "You lose! Scissors beats Paper";
    case playerSelection == "scissors" && computerSelection == "rock":
      return "You lose! Rock beats Scissors";
    case playerSelection == "rock" && computerSelection == "scissors":
      return "You win! Rock beats Scissors";
    case playerSelection == "paper" && computerSelection == "rock":
      return "You win! Paper beats Rock";
    case playerSelection == "scissors" && computerSelection == "paper":
      return "You win! Scissors beats Paper";
    case playerSelection == "rock" && computerSelection == "rock":
      return "It's a draw! Rock ties with Rock!";
    case playerSelection == "paper" && computerSelection == "paper":
      return "It's a draw! Paper ties with Paper!";
    case playerSelection == "scissors" && computerSelection == "scissors":
      return "It's a draw! Sccisors ties with Scissors!";
    default:
      return "Please enter one of rock, paper, or scissors.";
  }
}

function computerPlay() {
  choices = ["rock", "paper", "scissors"];
  return choices[getRandomInt(3)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function disableOptions() {
  buttons.forEach((button) => {
    button.disabled = true;
  })
}

const buttons = document.querySelectorAll(".option");
const h1 = document.querySelector('h1');
const results = document.querySelector(".results");
const score = document.querySelector(".score");
const btnPlayAgain = document.createElement('button');
let result;
let playerSelection;
let playerWins = 0;
let computerWins = 0;

btnPlayAgain.textContent = "Play Again?";
btnPlayAgain.id = "play-again";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.value;
    result = playRound(playerSelection, computerPlay());

    if (result.includes("win")) {
      playerWins++;
    } else if (result.includes("lose")) {
      computerWins++;
    }

    results.firstElementChild.textContent = result;
    if (computerWins === 5 || playerWins === 5) {
      whoWon =
        playerWins > computerWins
          ? "You won the game!"
          : "Computer won the game!";

      results.firstElementChild.textContent = whoWon;
      score.textContent = `You: ${playerWins} Computer: ${computerWins}`;
      results.appendChild(btnPlayAgain);
      h1.hidden = true;
      disableOptions();
      computerWins = 0;
      playerWins = 0;
    } else score.textContent = `You: ${playerWins} Computer: ${computerWins}`;
  });
});

btnPlayAgain.addEventListener('click', () => {
  buttons.forEach(button => button.disabled = false);
  results.removeChild(btnPlayAgain);
  h1.hidden = false;
  results.firstElementChild.textContent = "";
  score.textContent = "";
});
