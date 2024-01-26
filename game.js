const choices = ['ROCK', 'PAPER', 'SCISSORS'];


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function getUserChoice(){
    while (true){
    let userChoice = prompt('Your choice: ').toUpperCase();
    if (userChoice === choices[0]){
        return choices[0];
    }
    else if (userChoice === choices[1]){
        return choices[1];
    }
    else if (userChoice === choices[2]){
        return choices[2];
    }
   
        
    else{alert("Invalid input")}
    }
}

function singleRound(){
    while (true){

    let player = getUserChoice();
    let computer = getComputerChoice();

    if ((player === choices[0] && computer === choices[2]) ||
        (player === choices[1] && computer === choices[0]) ||
        (player === choices[2] && computer === choices[1])){
             alert("Congrats, you win!");
             return 1;
        }
    else if((player === choices[0] && computer === choices[0]) ||
            (player === choices[1] && computer === choices[1]) ||
            (player === choices[2] && computer === choices[2])){
                alert("It's a tie!");

            }
    
    else{
        alert("You lost!");
        return 0;
    }
    }
}

function game(){
    let userScore = 0;
    let compScore = 0;
    for(let rounds = 0; rounds < 6; rounds++){
        let roundResult = singleRound();
        console.log(roundResult);
        if (roundResult === 1){
            userScore++;
        }
        else if (roundResult === 0){
            compScore++;
        }

        console.log(userScore,compScore);
    }
    if(userScore > compScore){
        alert("We have a champion!");
    }
}

game();