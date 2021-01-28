function rockPaperScissors() {

    function choiceElements() {
        let choiceElement = Math.random();
        if (choiceElement <= 0.33) {
            return "rock";
        } else if (choiceElement >= 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    
    let machineScore = 0;
    let personScore = 0;
    let win = "You win!";
    let lose = "You lose!";
    let tie = "It's a tie!";
    
    function theGame(personChoice, machineChoice) {
        if (personChoice.toLowerCase() === "rock") {
            if (machineChoice === "scissors") {
                personScore += 1;
                return win;
            } else if (machineChoice === "paper") {
                machineScore += 1;
                return lose;
            } else {
                return tie;
            }            
        }
        if (personChoice.toLowerCase() === "paper") {
            if (machineChoice === "rock") {
                personScore += 1;
                return win;
            } else if (machineChoice === "scissors") {
                machineScore += 1;
                return lose;
            } else {
                return tie;    
            }
        }
        if (personChoice.toLowerCase() === "scissors") {
            if (machineChoice === "paper") {
                personScore += 1;
                return win;
            } else if (machineChoice === "rock") {
                machineScore += 1;
                return lose;
            } else {
                return tie;
            }
        }
    }
    
    let playerName = prompt("Type your name: ");
    
    for (i=0; i<5; i++) {
        let personChoice = prompt("Hello, " + playerName.charAt(0).toUpperCase() + 
        playerName.slice(1).toLowerCase() + "." + " Do you prefer: Rock, Paper or Scissor?");
        const machineChoice = choiceElements();
        theGame(personChoice, machineChoice);
    }
    
    document.getElementById("result").innerHTML = playerName.charAt(0).toUpperCase() + 
    playerName.slice(1).toLowerCase() + "," + " your result is: " + personScore; 
            
}    