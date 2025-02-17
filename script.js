/** 1.Create computer controlled move */
function getComputerChoice() {
  const computerChoice = Math.random();
  if (computerChoice >= 0.3 && computerChoice < 0.6) {
    return "Scissor";
  } else if (computerChoice >= 0 && computerChoice < 0.3) {
    return "Paper";
  } else {
    return "Rock";
  }
}
/** 2.Create human controlled move */
var humanChoice = "";

/** 3.Initialize variables to record scores */
var humanScore = 0;
var computerScore = 0;
var roundCount = 0;
const maxRounds = 5;

/** 4.Create function to play a single round */
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    result.textContent = `Even! Both chose ${humanChoice}\nTotal user score: ${humanScore}, total computer score: ${computerScore}`;
    result.style.whiteSpace = "pre-line";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore += 1;
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}\nTotal user score: ${humanScore}, total computer score: ${computerScore}`;
    result.style.whiteSpace = "pre-line";
  } else {
    computerScore += 1;
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}\nTotal user score: ${humanScore}, total computer score: ${computerScore}`;
    result.style.whiteSpace = "pre-line";
  }
  roundCount += 1;

  if (roundCount >= maxRounds) {
    endGame();
  }
}

function endGame() {
  let finalResult = "";
  if (humanScore > computerScore) {
    finalResult = "You won the contest! 🎉";
  } else if (computerScore > humanScore) {
    finalResult = "Computer won the contest! 😢";
  } else {
    finalResult = "It's a tie! 😐";
  }

  result.textContent = `\n${finalResult}`;
  result.style.whiteSpace = "pre-line";

  paperBtn.disabled = true;
  rockBtn.disabled = true;
  scissorBtn.disabled = true;
}

/** 5. Set up event listeners for buttons */
const paperBtn = document.querySelector(".data-paper");
const rockBtn = document.querySelector(".data-rock");
const scissorBtn = document.querySelector(".data-scissor");
const restartBtn = document.querySelector(".restart");
const result = document.querySelector(".data-result");

paperBtn.addEventListener("click", () => {
  humanChoice = "paper";
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

rockBtn.addEventListener("click", () => {
  humanChoice = "rock";
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

scissorBtn.addEventListener("click", () => {
  humanChoice = "scissor";
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

restartBtn.addEventListener("click", () => {
  result.textContent = "";
  roundCount = 0;
  computerScore = 0;
  humanScore = 0;
  paperBtn.disabled = false;
  rockBtn.disabled = false;
  scissorBtn.disabled = false;
});
