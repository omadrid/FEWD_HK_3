// cache some HTML info for reference
var human = document.getElementById('humanScore');
var computer = document.getElementById('computerScore');                                       
var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var statusMsg = document.getElementById('status');
var userInput;
// Get user input, define the onclick event handlers
rockBtn.onclick = rockIsClicked;
paperBtn.onclick = paperIsClicked;
scissorsBtn.onclick = scissorsIsClicked;

function rockIsClicked() {
  userInput = "rock";
  var robotInput = getRobotInput();
  compare(userInput, robotInput);
};
function paperIsClicked() {
  userInput = "paper";
  compare(userInput, getRobotInput());
};
function scissorsIsClicked() {
  userInput = "scissors";
  compare(userInput, getRobotInput());
};
// Get robot input by generating random number
function getRobotInput() {
  var choices = {
    1: "paper",
    2: "scissors",
    3: "rock"
  };

  var randomNumber = Math.ceil(Math.random() * 3);
  return choices[randomNumber];
};
// Calculate who wins
function compare(userInput, robotInput) {
  console.log("user: "+ userInput);
  console.log("computer: "+ robotInput);
  if (
      (userInput == "scissors" && robotInput == "paper") ||
      (userInput == "paper" && robotInput == "rock")     ||
      (userInput == "rock" && robotInput == "scissors") 
     ) {
    console.log("User win");
  } else if (
      (robotInput == "scissors" && userInput == "paper") ||
      (robotInput == "paper" && userInput == "rock")     ||
      (robotInput == "rock" && userInput == "scissors") 
    ) {
    console.log("User lose");
    postLoser (); {
      document.getElementById('!!!!!!')
    }
  } else {
    console.log("Draw");
    }
  }
//