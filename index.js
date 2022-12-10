// A function that randomly returns rock, paper or scissors
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  if (randomNumber === 2) return "scissors";
}

// A function that returns the winner
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();

  if (player === computerSelection) {
    return "Both chose " + player + ". No winner";
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

let playerScore = 0;
let computerScore = 0;

window.onload = function () {
  const rockbtn = document.getElementById("rockbtn");
  const paperbtn = document.getElementById("paperbtn");
  const scissorsbtn = document.getElementById("scissorsbtn");

  rockbtn.onclick = function () {
    const computerSelection = computerPlay();
    const winner = playRound("rock", computerSelection);
    trackScore(winner);
    displayResults(winner);
    displayScore();

    displayWinner();
  };

  paperbtn.onclick = function () {
    const computerSelection = computerPlay();
    const winner = playRound("paper", computerSelection);
    trackScore(winner);
    displayResults(winner);
    displayScore();

    displayWinner();
  };

  scissorsbtn.onclick = function () {
    const computerSelection = computerPlay();
    const winner = playRound("scissors", computerSelection);
    trackScore(winner);
    displayResults(winner);
    displayScore();

    displayWinner();
  };
};

function displayResults(results) {
  document.getElementById("results").innerHTML = results;
}

function displayScore() {
  document.getElementById("scores").innerHTML =
    "Player Score: " + playerScore + " | " + "Computer score: " + computerScore;
}

function trackScore(winner) {
  if (winner.includes("You win")) {
    playerScore++;
  } else if (winner.includes("You lose")) {
    computerScore++;
  }
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  displayScore();
}

function displayWinner() {
  if (playerScore == 5) {
    document.getElementById("winner").innerHTML = "Player Wins!";

    resetScores();
  } else if (computerScore == 5) {
    document.getElementById("winner").innerHTML = "Computer Wins!";
    resetScores();
  }
}

// A function that keeps scores after 5 rounds of playing rock,paper scissors
// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (let round = 0; round < 5; round++) {
//     //If not up to 5 rounds, play again
//     if (round < 5) {
//       const theWinner = playRound(
//         prompt("Enter rock, paper or scissors"),
//         computerSelection
//       );
//       console.log(theWinner);

//       if (theWinner.includes("You win")) {
//         playerScore = playerScore + 1;
//       }
//       if (theWinner.includes("You lose")) {
//         computerScore = computerScore + 1;
//       }
//     }

// At the end of the round
//     if (round === 4) {
//       console.log("end of round");
//       if (playerScore > computerScore) {
//         alert("Player wins with " + playerScore + " points.");
//       } else {
//         alert("Computer wins with " + computerScore + " points.");
//       }
//     }
//   }
// }

// game();
