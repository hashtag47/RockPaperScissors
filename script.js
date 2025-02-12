/** 1.Create computer controlled move */
let computerChoice = 0;
function getComputerChoice() {
  computerChoice = Math.random();
  let computer;
  if (computerChoice >= 0.3 && computerChoice < 0.6) {
    computer = "Scissor";
  } else if (computerChoice >= 0 && computerChoice < 0.3) {
    computer = "Paper";
  } else {
    computer = "Rock";
  }
  return computer;
}

// console.log("Computer throws: " + getComputerChoice());

/** 2.Create human controlled move */
function getHumanChoice() {
  let human = prompt("What is your strategy?");
  return human;
}

// console.log("User throws: " + getHumanChoice());

/** 3.Initialize variables to record scores */
/** 4.Create function to play a single round */
/** 5. Create function to play 5 rounds of the game*/
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice == "rock") {
      if (computerChoice == "rock") {
        console.log("Even! Both rock");
      } else if (computerChoice == "paper") {
        console.log("You win! Rock beats Paper");
        humanScore += 1;
      } else if (computerChoice == "scissor") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
      }
    } else if (humanChoice == "paper") {
      if (computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore += 1;
      } else if (computerChoice == "paper") {
        console.log("Even! Both Paper");
      } else if (computerChoice == "scissor") {
        console.log("You lose! Scissor beats Paper");
        computerScore += 1;
      }
    } else if (humanChoice == "scissor") {
      if (computerChoice == "rock") {
        console.log("You lose! Rock beats Scissor");
        computerScore += 1;
      } else if (computerChoice == "paper") {
        console.log("You win! Scissor beats Paper ");
        humanScore += 1;
      } else if (computerChoice == "scissor") {
        console.log("Even! Both Scissor");
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(
      "Total user score: " +
        humanScore +
        ", total computer score: " +
        computerScore
    );
  }
}

playGame();
