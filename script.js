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

//Play 1 round of rock, paper, scissors 
function playRound(computer, player) {
    const displayResult = document.querySelector('.display-result'); 
    const displayOperator = document.querySelector('.display-operator'); 
    if (computer === 0 && player === 2) { //rock beats scissors 
      computerScore++; 
      displayResult.innerText = 'you lose, try again'; 
      displayOperator.src = `images/youlose.png`; 
    } else if (player === 0 && computer === 2) {
      playerScore++; 
      displayResult.innerText = 'you win!'; 
      displayOperator.src = `images/youwin.png`; 
    } else if (computer === player) {
      displayResult.innerText = 'Its a tie'; 
      displayOperator.src = `images/draw.png`; 
    } else if (computer > player) {
      computerScore++; 
      displayResult.innerText = 'you lose, try again!'; 
      displayOperator.src = `images/youlose.png`; 
    } else {
      playerScore++; 
      displayResult.innerText = 'you win!'; 
      displayOperator.src = `images/youwin.png`; 
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
    }
  }

//Modal 
const modal = document.querySelector('.modal-container'); 
const restartBtn = document.querySelector('#restart-btn'); 
const finalResults = document.querySelector('#final-result'); 

//Declare winner 
function declareWinner(playerScore, computerScore) {
    modal.showModal(); 
    if (playerScore === computerScore) {
      finalResults.innerText = 'Its a tie! Both winners'; 
    } else if (playerScore > computerScore) {
      finalResults.innerText = 'You won the game!'; 
    } else {
      finalResults.innerText = 'You lost the game!';
    }
}

//Restart the Game 
restartBtn.addEventListener('click', e => {
    location.reload();  
    modal.close(); 
}); 


const moveButtons = document.querySelectorAll('.move-button'); 
Array.from(moveButtons).forEach(button => {
  button.addEventListener('click', function(e) {
    if (!moveButtons) return; 
    playGame(playRound, e); 
  }); 
})


