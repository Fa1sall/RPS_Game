let humanScore = 0;
let computerScore = 0;
let selection = document.getElementById('player_img')
let botSelection = document.getElementById('bot_img')
let gameStart = document.getElementsByClassName('ctrl_btn')
let result = document.getElementById('round-results');

function getComputerChoice(){
    let arr = ['rock','paper','scissors'];
    let index = Math.floor(Math.random() * 3);
    return arr[index];
}

function startGame(){
    const rock = document.getElementById('rock_btn');
    rock.addEventListener('click',()=>{
        selection.src = "Images/rock.png";
        //console.log("rock");
        updateScore('rock',comp_play());
    });

    const paper = document.getElementById('paper_btn');
    paper.addEventListener('click',()=>{
        selection.src = "Images/paper.png";
        //console.log("paper");
        updateScore('paper',comp_play());
    });

    const scissors = document.getElementById('scissors_btn');
    scissors.addEventListener('click',()=>{
        selection.src = "Images/scissors.png";
        //console.log("scissors");
        updateScore('scissors',comp_play());
    });

    function comp_play(){
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        
        if(computerChoice=="rock"){
            botSelection.src = "Images/rock.png";
        }
        else if(computerChoice=="paper"){
            botSelection.src = "Images/paper.png";
        }
        else{
            botSelection.src = "Images/scissors.png";
        }
        return computerChoice;
    };
}

function updateScore(humanChoice,computerChoice){
    humanSelection = humanChoice;
    computerSelection = computerChoice;
    if(humanSelection==computerSelection){
        result.textContent = `Tie! ${humanSelection} and ${computerSelection} are equal`;
        console.log(`Tie! ${humanSelection} and ${computerSelection} are equal`);
    }
    else if((humanSelection=="paper" && computerSelection=="rock") || (humanSelection=="rock" && computerSelection=="scissors") || (humanSelection=="scissors" && computerSelection=="paper")){
        result.textContent = `You Win! ${humanSelection} beats ${computerSelection}`;
        console.log(`You Win! ${humanSelection} beats ${computerSelection}`);
        humanScore++;
        document.getElementById('human_score').textContent = `You: ${humanScore}`;
    }
    else{
        result.textContent = `You Lose! ${computerSelection} beats ${humanSelection}`;
        console.log(`You Lose! ${computerSelection} beats ${humanSelection}`);
        computerScore++;
        document.getElementById('computer_score').textContent = `Computer: ${computerScore}`;
    }
}

startGame();






//function playGame(){
//    
//    for(let i=0;i<5;i++){
//        let humanChoice = getHumanChoice();
//        let computerChoice = getComputerChoice();
//        /*console.log(humanChoice);
//        console.log(computerChoice);*/
//        playRound(humanChoice,computerChoice);
//    }  
//}
//


//playGame();
//
//console.log(`Player Score: ${humanScore}`);
//console.log(`Computer Score: ${computerScore}`);
//if(humanScore>computerScore){
//    console.log("Player Wins!");
//}
//else if(humanScore==computerScore){
//    console.log("Tie!");
//}
//else{
//    console.log("Computer Wins!");
//}
//