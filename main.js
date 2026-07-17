function getUserChoice() {
    let userChoice = prompt("Hi! We are going to play 'Rock, paper and scissors'. Please, write your choice wisely").toLowerCase();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        alert("Please, write one of the options correctly. Try again!");
        return getUserChoice();
    }
}

function generateMachineChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

let userRounds = 0;
let machineRounds = 0;

function comparativeChoices(userOption, machineOption) {
    if (userOption === machineOption) {
        alert("It's a draw! Again!");
        console.log("It's a draw! Again!");
    } else if ((userOption === "rock" && machineOption === "scissors") || (userOption === "paper" && machineOption === "rock") || (userOption === "scissors" && machineOption === "paper")) {
        userRounds++;
        alert(`You won this round! The machine used ${machineOption}. You need ${5 - userRounds} round(s) to win!`);
        console.log(`You won this round! The machine used ${machineOption}. You need ${5 - userRounds} round(s) to win!`);
    } else {
        machineRounds++;
        alert(`The machine won this round! The machine used ${machineOption}. The machine needs ${5 - machineRounds} round(s) to win!`);
        console.log(`The machine won this round! The machine used ${machineOption}. The machine needs ${5 - machineRounds} round(s) to win!`);
    }
}

function displayWinner() {
    if (userRounds > machineRounds) {
        alert("You won against the machine the best five of rounds! Congrats!");
        console.log("You won against the machine the best five of rounds! Congrats!")
    } else {
        alert("You lost. The machine got 5 winning rounds. Im sorry.");
        console.log("You lost. The machine got 5 winning rounds. Im sorry.");
    }
}

function runGame() {
    let userSelection = getUserChoice();
    let machineSelection = generateMachineChoice();
    comparativeChoices(userSelection, machineSelection);
}

function main() {
    while ((userRounds < 5) && (machineRounds < 5))  {
        runGame();
    }
    displayWinner();
}

main();