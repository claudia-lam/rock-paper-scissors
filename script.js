const handGestures = ['rock', 'paper', 'scissors']; 

//Computer Selection 
function getComputerSelection() {
    const randomNum = Math.floor(Math.random() * 3); 
    const computerChoice = handGestures[randomNum]; 
    displayImages(computerChoice, 'computer'); 
    console.log(computerChoice); 
    return randomNum; 
}

//Player Selection 
function getPlayerSelection(event) {
    const playerChoice = event.target.alt; 
    displayImages(playerChoice, 'player'); 
    return handGestures.indexOf(playerChoice); 
}


function displayImages(move, owner) {
    const playerImages = document.querySelector(`.${owner}-img`); 
    playerImages.src = `images/${move}.png`
}

// Create Score System 
let playerScore = 0;
let computerScore = 0;

//Display Score 
function displayScore() {
    //create div to display score 
    const scores = document.querySelector('.display-score'); 
    scores.innerText = `${playerScore} - ${computerScore}`; 
    //add inner text to display score 
}

function displayOperator() {
    const img = document.createElement('.img'); 
    img.src = 
}

//Play 1 round of rock, paper, scissors 
function playRound(computer, player) {
    const displayResult = document.querySelector('.display-result'); 
    if (computer === 0 && player === 2) { //rock beats scissors 
      computerScore++; 
      displayResult.innerText = 'you lose, try again'; 
    } else if (player === 0 && computer === 2) {
      playerScore++; 
      displayResult.innerText = 'you win!'; 
    } else if (computer === player) {
      displayResult.innerText = 'Its a tie'; 
    } else if (computer > player) {
      computerScore++; 
      displayResult.innerText = 'you lose, try again!'; 
    } else {
      playerScore++; 
      displayResult.innerText = 'you win!'; 
    }
  }


//Play multiple rounds 
function playGame(gameFunc, event) {
    const computerSelection = getComputerSelection(); 
    const playerSelection = getPlayerSelection(event); 
    gameFunc(computerSelection, playerSelection); 
    displayScore(); 
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

const moveButtons = document.querySelectorAll('.move-button'); 
Array.from(moveButtons).forEach(button => {
  button.addEventListener('click', function(e) {
    playGame(playRound, e); 
    console.log(e); 
  }); 
})



// //Function to Report a Winner 
// function reportWinner(playerScore, computerScore){
//     if (playerScore === computerScore){
//          document.querySelector(".report-winner").innerText = ("Yay! You beat the computer! Click below to play again!");
//     } else if (computerScore > playerScore){
//         document.querySelector(".report-winner").innerText = ("You lose! Computer is the Champion. Click below to play again!");
//     }else{
//         document.querySelector(".report-winner").innerText = "hi!";
//     }
// };

