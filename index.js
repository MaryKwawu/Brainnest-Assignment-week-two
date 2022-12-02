// A function that randomly returns rock, paper or scissors
function Computerplay() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  if (randomNumber === 2) return "scissors";
}

// A function that returns the winner
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();

  if (player === "rock" && computerSelection === "rock") {
    return "Both chose rock. No winner";
  }
  if (player === "paper" && computerSelection === "paper") {
    return "Both chose paper. No winner";
  }
  if (player === "scissors" && computerSelection === "scissors") {
    return "Both chose scissors. No winner";
  }

  // ROCK against SCISSORS
  if (player === "rock" && computerSelection === "scissors") {
    return "You win. Rock beats scissors";
  }
  if (player === "scissors" && computerSelection === "rock") {
    return "You lose. Rock beats scissors";
  }

  // SCISSORS against paper
  if (player === "scissors" && computerSelection === "paper") {
    return "You win. Scissors beats paper";
  }

  if (player === "paper" && computerSelection === "scissors") {
    return "You lose. Scissors beats paper";
  }

  // PAPER against ROCK

  if (player === "paper" && computerSelection === "rock") {
    return "You win. Paper beats rock";
  }
  if (player === "rock" && computerSelection === "paper") {
    return "You lose. Paper beats rock";
  }
}

const computerSelection = Computerplay();

// A function that keeps scores after 5 rounds of playing rock,paper scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 0; round < 5; round++) {
    //If not up to 5 rounds, play again
    if (round < 5) {
      const theWinner = playRound(
        prompt("Enter rock, paper or scissors"),
        computerSelection
      );
      console.log(theWinner);

      if (theWinner.includes("You win")) {
        playerScore = playerScore + 1;
      }
      if (theWinner.includes("You lose")) {
        computerScore = computerScore + 1;
      }
    }

    // At the end of the round
    if (round === 4) {
      console.log("end of round");
      if (playerScore > computerScore) {
        alert("Player wins with " + playerScore + " points.");
      } else {
        alert("Computer wins with " + computerScore + " points.");
      }
    }
  }
}

game();
