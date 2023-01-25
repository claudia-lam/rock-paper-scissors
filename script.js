//Computer Selection 
function getComputerSelection() {
    return Math.floor(Math.random() * 3); 
}

//Player Selection 
function getPlayerSelection(whichButton) {
    const handGestures = ['rock', 'paper', 'scissors']; 
    const playerChoice = whichButton.target.name; 
    return handGestures.indexOf(playerChoice); 
}


// //Add event listeners to all buttons 
// const buttons = document.querySelectorAll("button");            
// buttons.forEach(function(button){                             
//     button.addEventListener('click', function(e){ 
//         //Set object declaration for player 
//         let playerSelection = this.textContent.toLowerCase();
//         document.querySelector(".your-display").src = 'images/'+playerSelection+'.png';
//         document.querySelector(".you-play").textContent = 'You Play:';
//         //Set object declaration for computer
//         let computerSelection = computerPlay();
//         document.querySelector(".computer-display").src = 'images/'+computerSelection+'.png';
//         document.querySelector(".computer-play").textContent = 'Computer Plays:';
//         //Play 1 round and return the result 
//         let result = playRound(playerSelection,computerSelection);
//         document.querySelector(".result").textContent = (result);
//         //Add Operator Images 
//         if (result.includes("You Win")){
//             document.getElementById("operator").src = 'images/youwin.png';
//         } else if (result.includes("You Lose")){
//             document.getElementById("operator").src = 'images/youlose.png';
//         } else {
//             document.getElementById("operator").src = 'images/draw.png';
//         }
//         //Set object declaration to keep score 
//         document.querySelector(".score-heading").textContent = 'Score';
//         document.querySelector(".final-score").textContent = yourScore+' to '+computerScore;
//     });
// });

// Create Score System 
let playerScore = 0;
let computerScore = 0;

//Play 1 round of rock, paper, scissors 
function playRound(computer, player) {
    if (computer === 0 && player === 2) { //rock beats scissors 
      computerScore++; 
      return 'you lose, try again'
    } else if (player === 0 && computer === 2) {
      playerScore++; 
      return 'you win!'; 
    } else if (computer === player) {
      return 'Its a tie'; 
    } else if (computer > player) {
      computerScore++; 
      return 'you lose, try again!'; 
    } else {
      playerScore++; 
      return 'you win!'; 
    }
  }

//Play multiple rounds 
function playGame(gameFunc, event) {
    const computerSelection = getComputerSelection(); 
    const playerSelection = getPlayerSelection(event); 
    console.log('comp:'+computerSelection, 'player:'+ playerSelection); 
    gameFunc(computerSelection, playerSelection);
    console.log('scores:' + computerScore, playerScore); 
    checkWinner(playerScore, computerScore);
}
  
//Check winner 
function checkWinner(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
      declareWinner(playerScore, computerScore); 
      resetGame(); 
    }
  }


//Declare winner 
function declareWinner(playerScore, computerScore) {
    if (playerScore === computerScore) {
      console.log('Its a tie! Both winners') ; 
    } else if (playerScore > computerScore) {
      console.log('You won the game!') ; 
    } else {
      console.log('You lost the game!');
    }
  }

function resetGame() {
    playerScore = 0; 
    computerScore = 0; 
}

const moveButtons = document.querySelectorAll('.move'); 
Array.from(moveButtons).forEach(button => {
  button.addEventListener('click', function(e) {
    playGame(playRound, e); 
    
  }); 
})

// //Function to Report a Winner 
// function reportWinner(playerScore, computerScore){
//     if (playerScore === computerScore){
//          document.querySelector(".report-winner").textContent = ("Yay! You beat the computer! Click below to play again!");
//     } else if (computerScore > playerScore){
//         document.querySelector(".report-winner").textContent = ("You lose! Computer is the Champion. Click below to play again!");
//     }else{
//         document.querySelector(".report-winner").textContent = "hi!";
//     }
// };

