//Function for computer to randomly play rock, paper, scissors 
function computerPlay(){
    let options=["rock", "paper", "scissors"];
    let randomizedOptions=Math.floor(Math.random()*options.length);
    return (options[randomizedOptions]) ;
    }

//Add event listeners to all buttons 
const buttons = document.querySelectorAll("button");            
buttons.forEach(function(button){                             
    button.addEventListener('click', function(e){ 
        //Set object declaration for player 
        let playerSelection = this.textContent.toLowerCase();
        document.querySelector(".your-display").src = 'images/'+playerSelection+'.png';
        document.querySelector(".you-play").textContent = 'You Play:';
        //Set object declaration for computer
        let computerSelection = computerPlay();
        document.querySelector(".computer-display").src = 'images/'+computerSelection+'.png';
        document.querySelector(".computer-play").textContent = 'Computer Plays:';
        //Play 1 round and return the result 
        let result = playRound(playerSelection,computerSelection);
        document.querySelector(".result").textContent = (result);
        //Add Operator Images 
        if (result.includes("You Win")){
            document.getElementById("operator").src = 'images/youwin.png';
        } else if (result.includes("You Lose")){
            document.getElementById("operator").src = 'images/youlose.png';
        } else {
            document.getElementById("operator").src = 'images/draw.png';
        }
        //Set object declaration to keep score 
        document.querySelector(".score-heading").textContent = 'Score';
        document.querySelector(".final-score").textContent = yourScore+' to '+computerScore;
    });
});

// Create Score System 
let yourScore = 0;
let computerScore = 0;

//Play 1 round of rock, paper, scissors 
function playRound(playerSelection,computerSelection){
    if (playerSelection===computerSelection){
        return ("It's a tie");
    } else {
        if (playerSelection==="rock"){
            if (computerSelection==="paper"){
                computerScore++;
                checkWinner();
                return (`You Lose! Paper beats Rock`);
            }else{
                yourScore++;
                checkWinner();
                return( `You Win! Rock beats Scissors`);
            }
        } else if (playerSelection==="paper"){
            if(computerSelection==="rock"){
                yourScore++
                checkWinner();
                return(`You Win! Paper beats Rock`);
            } else{
                computerScore++;
                checkWinner();
                return(`You Lose! Scissors beats Paper`);
            }
        } else{
            if (playerSelection==="scissors"){
                if(computerSelection==="rock"){
                    computerScore++;
                    checkWinner();
                    return(`You Lose! Rock beats Scissors`);
                }else{
                    yourScore++;
                    checkWinner();
                    return(`You Win! Scissors beats Paper`);
                }
            }
        }
    }
    
}

//Check the winner 
function checkWinner(){
    if (yourScore <5 && computerScore<5){
    }else{
        reportWinner();
        setTimeout(zeroScore, 500);
    }
}
function zeroScore(){
    yourScore = 0;
    computerScore = 0;
}

//Function to Report a Winner 
function reportWinner(){
    if (yourScore===5){
         document.querySelector(".report-winner").textContent = ("Yay! You beat the computer! Click below to play again!");
    } else if (computerScore===5){
        document.querySelector(".report-winner").textContent = ("You lose! Computer is the Champion. Click below to play again!");
    }else{
        document.querySelector(".report-winner").textContent = "hi!";
    }
};




   
  