let winningObjects = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock',
}



function getComputerChoice() {
    let randNum = Math.random();
    if (randNum < .33) {
        return 'rock';
    }
    else if (randNum >= .33 && randNum < .66) {
        return 'paper';
    }
    else {
        return 'scissors';
    }

}


function getHumanChoice() {
    let choiceOfHuman = prompt("Rock, Paper, or Scissors? ").toLowerCase();
    if (["rock", "paper", "scissors"].includes(choiceOfHuman)) {
        return choiceOfHuman;
    }
    else {
        console.log('not an option');
    }
}

let humanScore = 0;
let computerScore = 0;
let ties = 0;


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        ties++
        alert('this round was a tie');
    }
    else if (winningObjects[humanChoice] === computerChoice) {
        humanScore++;
        alert('you have scored a point this round');
    }
    else if (winningObjects[computerChoice] === humanChoice) {
        computerScore++;
        alert('you lost this round to the computer');
    }
    else {
        return null;
    }
}

function playGame() {
    while (humanScore != 5 && computerScore != 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore == 5) {
        alert(`you win the game!
    computer score = ${computerScore}
    your score = ${humanScore}
    ties = ${ties}`
        )
    }
    else {
        alert(`you lost the whole game to the computer :(
    computer score = ${computerScore}
    your score = ${humanScore} 
    ties = ${ties}`
        )
    }

}


let menu = document.querySelector('#choices');

menu.addEventListener('mousedown', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'Rock':
            playRound(rock, getComputerChoice());
            break;
        case 'Paper':
            playRound(paper, getComputerChoice());
            break;
        case 'Scissors':
            playRound(scissors, getComputerChoice());
            break;
    }
});

menu.addEventListener('mouseup', () => {
    const scorehuman = document.getElementById('scorehuman');
    const scorecomputer = document.getElementById('scorecomputer');
    scorehuman.textContent = `${humanScore}`;
    scorecomputer.textContent = `${computerScore}`;
});

playGame();

