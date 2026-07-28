let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let div = document.getElementById("textContainer");
let spanRounds = document.createElement("span");
let body = document.querySelector('body');
let resetButton = document.createElement('button')
resetButton.setAttribute('id', 'resetButton');
resetButton.textContent = 'RESET';

div.appendChild(spanRounds);
let userChoice;
let gameActive = true;

function getUserChoice(buttonSelected) {
    return userChoice = buttonSelected.target.id;
}

rockButton.addEventListener("click", getUserChoice);
rockButton.addEventListener("click", runGame);
paperButton.addEventListener("click", getUserChoice);
paperButton.addEventListener("click", runGame);
scissorsButton.addEventListener("click", getUserChoice);
scissorsButton.addEventListener("click", runGame);

function resetGame() {
    userRounds = 0;
    machineRounds = 0;
    userChoice;
    gameActive  = true;
    body.style.background = "url('https://thumbs.dreamstime.com/b/demostraci%C3%B3n-de-la-mano-del-hombre-un-piedra-papel-o-tijera-juego-153788684.jpg')";
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'left bottom';
    resetButton.remove();
    spanRounds.textContent = "";
    div.style.backgroundColor = '';
    div.style.color = '';
}

resetButton.addEventListener('click', resetGame);

function generateMachineChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

let userRounds = 0;
let machineRounds = 0;


function comparativeChoices(userOption, machineOption) {
    if (userOption === machineOption) {
        spanRounds.textContent = "It's a draw! Again!";
        console.log("It's a draw! Again!");
        body.style.background = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IttirbIB5tuMspFhZbuhD7rrsDGLlqQkmOclidT7u07hlxGFQva5RrI&s=10')";
        body.style.backgroundSize = 'cover';
        div.style.backgroundColor = '#aca920';
        div.style.color = '#fff';
        
        
    } else if ((userOption === "rock" && machineOption === "scissors") || (userOption === "paper" && machineOption === "rock") || (userOption === "scissors" && machineOption === "paper")) {
        userRounds++;
        spanRounds.textContent = `You won this round! The machine used ${machineOption}. You need ${5 - userRounds} round(s) to win!`;
        console.log(`You won this round! The machine used ${machineOption}. You need ${5 - userRounds} round(s) to win!`);
        body.style.background = "url('https://img.magnific.com/fotos-premium/jovenes-multirraciales-alegres-levantando-manos-apretando-punos_116547-42553.jpg')";
        body.style.backgroundSize = 'cover';
        div.style.backgroundColor = '#0e8018';
        div.style.color = '#fff';
    } else {
        machineRounds++;
        spanRounds.textContent = `The machine won this round! The machine used ${machineOption}. The machine needs ${5 - machineRounds} round(s) to win!`;
        console.log(`The machine won this round! The machine used ${machineOption}. The machine needs ${5 - machineRounds} round(s) to win!`);
        body.style.background = "url('https://as1.ftcdn.net/jpg/04/52/28/82/1000_F_452288297_hdGV4iAcPi1ZL9SQ9wD4W9GAbIQXBZLt.jpg')";
        body.style.backgroundSize = 'cover';
        div.style.backgroundColor = '#b91c1c';
        div.style.color = '#fff';
    }
}


function runGame() {
    if (gameActive) {
        if ((userRounds < 5) && (machineRounds < 5)) {
                let machineSelection = generateMachineChoice();
                comparativeChoices(userChoice, machineSelection);
                if ((userRounds == 5) || (machineRounds == 5)) {
                    displayWinner()
                    body.appendChild(resetButton);
                    gameActive = false;
                }
            }
    }
    
}

function displayWinner() {
    if (userRounds > machineRounds) {
        spanRounds.textContent = "You won against the machine the best five of rounds! Congrats!";
        console.log("You won against the machine the best five of rounds! Congrats!");
        body.style.background = "url('https://preview.redd.it/supermega-fans-when-matt-ryan-say-yeah-guys-weve-got-a-lot-v0-d2r264x9rj481.jpg?auto=webp&s=db955ff3aa5c9b73d06ebc5c43dd3679479b449a')";
        body.style.backgroundSize = 'cover';
    } else {
        spanRounds.textContent = "You lost. The machine got 5 winning rounds. Im sorry.";
        console.log("You lost. The machine got 5 winning rounds. Im sorry.");
        body.style.background = "url('https://img.magnific.com/free-photo/sitting-people-watching-football-public-place-night_1268-18316.jpg')";
        body.style.backgroundSize = 'cover';
    }
}

