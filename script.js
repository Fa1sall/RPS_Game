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
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function playRound(humanChoice,computerChoice){
        humanChoice = humanSelection.toLowerCase();
        computerChoice = computerSelection.toLowerCase();
        if(humanChoice==computerChoice){
            console.log("Tie! %s and %s are equal",humanChoice,computerChoice);
        }
        if(humanChoice=="paper" && computerChoice=="rock"){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(humanChoice=="rock" && computerChoice=="paper"){
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        if(humanChoice=="rock" && computerChoice=="scissor"){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(humanChoice=="scissor" && computerChoice=="rock"){
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        if(humanChoice=="scissors" && computerChoice=="paper"){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(humanChoice=="paper" && computerChoice=="scissors"){
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for(let i=0;i<5;i++){
        playRound(humanSelection,computerSelection);
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

playGame();

