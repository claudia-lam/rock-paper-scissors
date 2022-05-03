//Function for computer to randomly play rock, paper, scissors 
function computerPlay(){
    let options=["rock", "paper", "scissors"];
    let randomizedOptions=Math.floor(Math.random()*options.length);
    return (options[randomizedOptions]) ;
    }

// Create Score System 
let yourScore=0;
let computerScore=0;
//Play 1 round of rock, paper, scissors 
function playRound(playerSelection,computerSelection){
    if (playerSelection===computerSelection){
        return ("It's a tie");
    } else {
        if (playerSelection==="rock"){
            if (computerSelection==="paper"){
                computerScore++;
                return (`You Lose! Paper beats Rock`);
            }else{
                yourScore++;
                return( `You Win! Rock beats Scissors`);
            }
        } else if (playerSelection==="paper"){
            if(computerSelection==="rock"){
                yourScore++
                return(`You Win! Paper beats Rock`);
            } else{
                computerScore++;
                return(`You Lose! Scissors beats Paper`);
            }
        } else{
            if (playerSelection==="scissors"){
                if(computerSelection==="rock"){
                    computerScore++;
                    return(`You Lose! Rock beats Scissors`);
                }else{
                    yourScore++;
                    return(`You Win! Scissors beats Paper`);
                }
            }
        }
    }
    
}


//Loop the functions 
function game(){
    for (let i = 0; i < 5; i++) {
        let computerSelection=computerPlay();
        console.log(`Computer selects: ${computerSelection}`);
        playerSelection=prompt('rock, paper, or scissors?').toLowerCase(); 
        console.log(`You select: ${playerSelection}`);
        console.log(playRound(playerSelection,computerSelection));
        console.log(`Your Score: ${yourScore}, Computer Score: ${computerScore}`);
     }
}
//Call the game() function 
game();

    
//Function tor Report a Winner 
function reportWinner(){
if (yourScore>computerScore){
    return ("You are the winner!");
}else if(computerScore>yourScore){
    return ("The computer wins!");
}else{
    return ("It's a draw!");
}
}

//Printing A Winner 
console.log(reportWinner());


    let currentBottles=99;
    while (currentBottles>=0){
        if (currentBottles===1){
        console.log("1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.");
        }else if(currentBottles===0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");
        }else{
        console.log(currentBottles+" bottles of beer on the wall,"+currentBottles+ " bottles of beer.Take one down and pass it around,"+ --currentBottles +"bottles of beer on the wall.");
    }
    }
    }
  