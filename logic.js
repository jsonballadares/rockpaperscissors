function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay(){
    let computerSelection = getRandomInt(1,3);
    switch(computerSelection){
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "papers";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection.toLowerCase() === "scissors"){
            return "You Win! Rock beats Scissors";
        }else if(computerSelection.toLowerCase() === "papers"){
            return "You Lose! Paper beats Rock";
        }else{
            return "Tie! You Both Chosse Rock!";
        }
    }else if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection.toLowerCase() === "scissors"){
            return "Tie! You Both Chosse Scissors!";
        }else if(computerSelection.toLowerCase() === "papers"){
            return "You Win! Scissors beats Papers";
        }else{
            return "You Lose! Rock beats Scissors!";
        }
    }else{
        if(computerSelection.toLowerCase() === "scissors"){
            return "You Lose! Scissors beats Papers";
        }else if(computerSelection.toLowerCase() === "papers"){
            return "Tie! You Both Chosse Papers!";
        }else{
            return "You Win! Papers beats Rock!";
        }
    }
  }


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
const humanScore = document.getElementById('humanScore');
const robotScore = document.getElementById('robotScore');
let winCount = 0;
let lossCount = 0;
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let playerSelection;
    switch(button.id){
        case "rockButton":
            playerSelection = "rock";
            break;
        case "papersButton":
            playerSelection = "papers";
            break;
        case "scissorsButton":
            playerSelection = "scissors";
            break;
    }
    result = playRound(playerSelection,computerPlay());
    console.log(result);
    if(result.toLowerCase().includes("win")){
        winCount++;
    }else{
        lossCount++;
    }
    humanScore.innerText = "Human Score: " + winCount;
    robotScore.innerText = "Robot Score: " + lossCount;
    if(winCount >= 5){
        humanScore.innerText = "Human Won! Refresh To Try Again";
        robotScore.innerText = "Robot Loss!";
    }else if(lossCount >= 5){
        humanScore.innerText = "Human Loss! Refresh To Try Again";
        robotScore.innerText = "Robot Won!";
    }
  });
});
  