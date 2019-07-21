function computerPlayer(){
    let computerPlay = Math.random();
    if(computerPlay<=0.33){
        return "rock";
    } else if(computerPlay>=0.66){
        return "paper";
    } else {
        return "scissors";
    }                
}   

let computerScore = 0;
let playerScore = 0; 
let win = "You win!";
let lose = "You lose!";
let tie = "It's a tie!";                                   

function playRound(playerSelection, computerSelection) {
      
    if(playerSelection.toLowerCase() === "rock"){
        if(computerSelection === "scissors"){                        
            playerScore += 1;
            return win;

        }else if(computerSelection === "paper"){
            computerScore += 1;
            return lose;
        }else {                        
            return tie;
        }                    
    }
    if(playerSelection.toLowerCase() === "paper"){
        if(computerSelection === "rock"){
            playerScore += 1;
            return win;
        }else if(computerSelection === "scissors"){
            computerScore += 1;
            return lose;
        }else {
            return tie;
        }
    }
    if(playerSelection.toLowerCase() === "scissors"){
        if(computerSelection === "rock"){
            computerScore += 1;
            return lose;
        }else if(computerSelection === "paper"){
            playerScore += 1;
            return win;
        }else {
            return tie;
        }
    }                 
}   

let person = prompt("Please, type your name: ");                         

for (i=0; i<5; i++) {
    let playerSelection = prompt("Hello, " + person.charAt(0).toUpperCase()+ person.slice(1).toLowerCase() + "." + " Dou you prefer Rock, Paper or Scissors? ");    
    const computerSelection = computerPlayer();    
    playRound(playerSelection, computerSelection);                                     
}       

document.getElementById("result").innerHTML = person.charAt(0).toUpperCase() + person.slice(1).toLowerCase() + "," + " your result is: " + playerScore; 