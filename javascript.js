// Array with 3 choices
const hand = ['rock', 'paper', 'scissors'];
const result =['You', 'Computer']
// #region Get Elements
const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const score = document.querySelector('#score');
    score.innerText = `You: 0 | Computer: 0`;
const choice = document.querySelector('#choice');
const winner = document.querySelector('#winner');
const restartButton = document.querySelector('#restartButton');
const winText = document.querySelector('#winText');
// #endregion

// Declare Variables
let userChoice;
let computerChoice;
    let humanScore = 0;
    let computerScore = 0;
let roundOutcome
    let targetWin = 5;

// #region Get Computer Value
function getComputerChoice () {
    let random = Math.floor(Math.random() * 3);
    computerChoice = hand[random];
}
// #endregion

// #region Get Button press and assign Value
rockButton.addEventListener('click', () => {
    userChoice = hand[0];
    getComputerChoice();
    console.log("User chose: Rock")
    playRound();
    output();
    checkGameEnd();
})
paperButton.addEventListener('click', () => {
    userChoice = hand[1];
    getComputerChoice();
    console.log("User chose: Paper")
    playRound();
    output();
    chekcGameEnd();
})
scissorsButton.addEventListener('click', () => {
    userChoice = hand[2];
    getComputerChoice();
    console.log("User chose: Scissors")
    playRound();
    output();
    checkGameEnd(); 
})
// #endregion

function playRound () {
    if (userChoice == computerChoice) {
        roundOutcome = "Its a tie!";}

    else if (userChoice == 'rock' && computerChoice == 'scissors' ||
             userChoice == 'paper' && computerChoice == 'rock' ||
             userChoice == 'scissors' && computerChoice == 'paper') {
        roundOutcome = `You win ${userChoice} beats ${computerChoice}!`;
        humanScore++;}

        else if (userChoice == 'rock' && computerChoice == 'paper' ||
                 userChoice == 'paper' && computerChoice == 'scissors' ||
                 userChoice == 'scissors' && computerChoice == 'rock') {
        roundOutcome = `You lose ${computerChoice} beats ${userChoice}!`;
        computerScore++;}

                    else {console.log("Unexpected Results")}
    
 }    

function output () {
    score.innerText = `You: ${humanScore} | Computer: ${computerScore}`;
    choice.innerText = `You chose: ${userChoice} | Computer chose: ${computerChoice}`;
    winner.innerText = roundOutcome;
}

function checkGameEnd() {
    if (humanScore >= targetWin) {
        alert('You have won the game!');
        winText.innerText = 'You win the Game!';
        disableButtons();
        choice.innerText = '';
        winner.innerText = '';
        document.getElementById('restartButton').style.display = 'inline-block';}
        else if (computerScore >= targetWin) {
            alert('Computer has won the game!');
            winText.innerText = 'Computer wins the Game!';
            disableButtons();
            choice.innerText = '';
            winner.innerText = '';
            document.getElementById('restartButton').style.display = 'inline-block';}

}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

restartButton.addEventListener('click', () => {
    location.reload();});
    