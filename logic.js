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

  function game(){
      let playerSelection = computerPlay();
      let computerSelection = computerPlay();
      let winCount = 0;
      let lossCount = 0;
      let result = "";
      for(let i = 0; i < 5; i++){
        result = playRound(playerSelection,computerSelection);
        console.log(result);
        if(result.toLowerCase().includes("win")){
            winCount++;
        }else{
            lossCount++;
        }
        playerSelection = computerPlay();
        computerSelection = computerPlay(); 
      }
      if(winCount > lossCount){
        console.log("YOU WIN!");
      }else if(winCount < lossCount){
        console.log("YOU LOSS!");
      }else{
        console.log("YOU TIED!");
      }
  }
  
game();
  