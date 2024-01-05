

function getComputerChoice(){
    const choiceArr = ["rock", "paper", "scissors"];
    return choiceArr[Math.floor(Math.random() * 3)];
}

let userChoice;
let playerScore = 0;
let computerScore = 0;

const rbtn = document.querySelector('#rock');
const pbtn = document.querySelector('#paper');
const sbtn = document.querySelector('#scissors');

rbtn.addEventListener('click', () => {
    userChoice = "rock";
    console.log(userChoice);
    playRound(userChoice, getComputerChoice());
    whoWon();
});

pbtn.addEventListener('click', () => {
    userChoice = "paper";
    console.log(userChoice);
    playRound(userChoice, getComputerChoice());
    whoWon();
});

sbtn.addEventListener('click', () => {
    userChoice = "scissors";
    console.log(userChoice);
    playRound(userChoice, getComputerChoice());
    whoWon();
});

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock")
    {
        const imageP = document.querySelector('#adj-p-img');
        const imageC = document.querySelector('#adj-c-img');
        imageP.src = "./img/rock.png";
        imageC.src = "./img/rock.png";
        const winOrLose = document.getElementById('result');
        winOrLose.textContent = "Draw";
    }
    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        const imageP = document.querySelector('#adj-p-img');
        const imageC = document.querySelector('#adj-c-img');
        imageP.src = "./img/rock.png";
        imageC.src = "./img/paper.webp";
        const winOrLose = document.getElementById('result');
        winOrLose.textContent = "Lost";
        computerScoreUP();
    }
    else if (playerSelection === "rock" && computerSelection === "scissors")
    {
        const imageP = document.querySelector('#adj-p-img');
        const imageC = document.querySelector('#adj-c-img');
        imageP.src = "./img/rock.png";
        imageC.src = "./img/scissors.png";
        const winOrLose = document.getElementById('result');
        winOrLose.textContent = "Won";
        playerScoreUP();
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") 
    {
        const imageP = document.querySelector('#adj-p-img');
        const imageC = document.querySelector('#adj-c-img');
        imageP.src = "./img/paper.webp";
        imageC.src = "./img/scissors.png";
        const winOrLose = document.getElementById('result');
        winOrLose.textContent = "Lost";
        computerScoreUP();
    }
    else if (playerSelection === "paper" && computerSelection === "rock") 
    {
        const imageP = document.querySelector('#adj-p-img');
        const imageC = document.querySelector('#adj-c-img');
        imageP.src = "./img/paper.webp";
        imageC.src = "./img/rock.png";
        const winOrLose = document.getElementById('result');
        winOrLose.textContent = "Won";
        playerScoreUP();
    }
    else if (playerSelection === "paper" && computerSelection === "paper") 
    {
        const imageP = document.querySelector('#adj-p-img');
        const imageC = document.querySelector('#adj-c-img');
        imageP.src = "./img/paper.webp";
        imageC.src = "./img/paper.webp";
        const winOrLose = document.getElementById('result');
        winOrLose.textContent = "Draw";
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") 
    {
        const imageP = document.querySelector('#adj-p-img');
        const imageC = document.querySelector('#adj-c-img');
        imageP.src = "./img/scissors.png";
        imageC.src = "./img/scissors.png";
        const winOrLose = document.getElementById('result');
        winOrLose.textContent = "Draw";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") 
    {
        const imageP = document.querySelector('#adj-p-img');
        const imageC = document.querySelector('#adj-c-img');
        imageP.src = "./img/scissors.png";
        imageC.src = "./img/paper.webp";
        const winOrLose = document.getElementById('result');
        winOrLose.textContent = "Won";
        playerScoreUP();
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") 
    {
        const imageP = document.querySelector('#adj-p-img');
        const imageC = document.querySelector('#adj-c-img');
        imageP.src = "./img/scissors.png";
        imageC.src = "./img/rock.png";
        const winOrLose = document.getElementById('result');
        winOrLose.textContent = "Lost";
        computerScoreUP();
    }
}


function playerScoreUP() {
    let score = document.querySelector('.p_score');
    playerScore++;
    score.textContent = "Player: " + playerScore;
}

function computerScoreUP() {
    let score = document.querySelector('.c_score');
    computerScore++;
    score.textContent = "Player: " + computerScore;
}

function whoWon()
{
    if (playerScore === 5)
    {
    const win = document.getElementById('result');
        win.textContent = "You Won !!!";
        restartGame();
    }
    else if (computerScore === 5)
    {
    const win = document.getElementById('result');
        win.textContent = "You lost :(";
        restartGame();
    }
}

function restartGame() {
    setTimeout(() => {
        document.querySelector(".pop-up").style.display = "flex";
    }, 0.4);

}

document.getElementById('rst-btn').addEventListener('click', () => {
    document.querySelector(".pop-up").style.display = "none";
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.p_score').textContent = "Player: " + playerScore;
    document.querySelector('.c_score').textContent = "Player: " + computerScore;
    document.getElementById('result').textContent = "???";
});
