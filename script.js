

function getComputerChoice(){
    const choiceArr = ["Rock", "Paper", "Scissors"];
    return choiceArr[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());