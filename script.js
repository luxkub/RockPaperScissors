function handleRockClick() {
    playRound("Rock");
}

function handlePaperClick() {
    playRound("Paper");
}

function handleScissorsClick() {
    playRound("Scissors");
}

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.startbutton');
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    startButton.addEventListener('click', startGame);

    function startGame() {
        rock.addEventListener("click", handleRockClick);
        paper.addEventListener("click", handlePaperClick);
        scissors.addEventListener("click", handleScissorsClick);

        const playerScore = document.querySelector('.player1 .score')
        const cpuScore = document.querySelector('.cpu .score')

        const startButton = document.querySelector('.startbutton')
        startButton.textContent = 'RESET';

        playerScore.textContent = "0";
        cpuScore.textContent = "0";
    }
});

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(choice) {
    let playerScore = document.querySelector('.player1 .score');
    let cpuScore = document.querySelector('.cpu .score');
    let message = document.querySelector('.header2');

    let random = getComputerChoice();
    if (choice == random) {
        message.textContent = "TIE!";
    }
    if ((choice == "Rock") && (random == "Paper")) {
        message.textContent = 'YOU LOSE! PAPER BEATS ROCK';
        cpuScore.textContent++;
    } else if ((choice == "Rock") && (random == "Scissors")) {
        message.textContent = 'YOU WIN! ROCK BEATS SCISSORS';
        playerScore.textContent++;
    }

    if ((choice == "Paper") && (random == "Rock")) {
        message.textContent = 'YOU WIN! PAPER BEATS ROCK';
        playerScore.textContent++;
    } else if ((choice == "Paper") && (random == "Scissors")) {
        message.textContent = 'YOU LOSE! SCISSORS BEATS PAPER';
        cpuScore.textContent++;
    }

    if ((choice == "Scissors") && (random == "Rock")) {
        message.textContent = 'YOU LOSE! ROCK BEATS SCISSORS';
        cpuScore.textContent++;
    } else if ((choice == "Scissors") && (random == "Paper")) {
        message.textContent = 'YOU WIN! SCISSORS BEATS PAPER';
        playerScore.textContent++;
    }

    if (playerScore.textContent == '2') {
        message.textContent = 'YOU WIN! GAME OVER';
        gameOver();
    } else if (cpuScore.textContent == '2') {
        message.textContent = 'YOU LOSE! GAME OVER';
        gameOver();
    }
}

function gameOver() {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    rock.removeEventListener("click", handleRockClick);
    paper.removeEventListener("click", handlePaperClick);
    scissors.removeEventListener("click", handleScissorsClick);
}