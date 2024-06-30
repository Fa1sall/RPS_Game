function getComputerChoice(){
    let arr = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * 3);
    return arr[index];
}

function getHumanChoice(){
    let input = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    if(input=="rock" || input=="paper" || input=="scissors"){
        return input;
    }
    return 0;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice,computerChoice){
        humanSelection = humanChoice.toLowerCase();
        computerSelection = computerChoice.toLowerCase();
        if(humanSelection==computerSelection){
            console.log(`Tie! ${humanSelection} and ${computerSelection} are equal`);
        }
        if((humanSelection=="paper" && computerSelection=="rock") && (humanSelection=="rock" && computerSelection=="scissor") && (humanSelection=="scissors" && computerSelection=="paper")){
            console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
            humanScore++;
        }
        else{
            console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
            computerScore++;
        }
    }

    playGame();

    for(let i=0;i<5;i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }

    /*console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if(humanScore>computerScore){
        console.log("Player Wins!");
    }
    else{
        console.log("Computer Wins");
    }*/
}



