import Player from "./Player.js";

const players = [];
let circleTurn;
let draw = 1;
const fields = document.querySelectorAll('.board > .field');
const resetButton = document.querySelector(".reset-btn");
const playerOne = new Player("Pieter", "X");
const playerTwo = new Player("Jan", "O");
const showPLayerOne = document.querySelector(".player-one");
const showPLayerTwo = document.querySelector(".player-two");
const winningCombinations = [
    [fields[0], fields[1], fields[2]],
    [fields[3], fields[4], fields[5]],
    [fields[6], fields[7], fields[8]],
    [fields[0], fields[3], fields[6]],
    [fields[1], fields[4], fields[7]],
    [fields[2], fields[5], fields[8]],
    [fields[0], fields[4], fields[8]],
    [fields[2], fields[4], fields[6]]
]

players.push(playerOne, playerTwo);

for (let i = 0; i < fields.length; i++) {
    const fieldEl = fields[i];
    fieldEl.addEventListener("click", addSymbolToField);
}

resetButton.addEventListener("click", resetGame);

//Add symbol to field function
function addSymbolToField(field) {
    const fieldContent = field.target;
    if (fieldContent.textContent === 'X' || fieldContent.textContent === 'O') {
        alert('This field can not be used');
        draw--;
    } else {
        const currentBox = circleTurn ? players[1].symbol : players[0].symbol;
        placeMark(fieldContent, currentBox);
        swapTurns();
    }
    checkWinner();
    /*
    * Add the current player symbol to the field textContent
    * Make a place symbol funtion
    * Make a swap turns funtion
    */
}

//Place symbol function
function placeMark(element, currentBox) {
    element.textContent = currentBox;
}

//Swap turns function
function swapTurns() {
    circleTurn = !circleTurn;
}

// Show players function
function showPLayers() {
    for (let i = 0; i < players.length; i++) {
        const player = players[i];

        let playerText = "Name: " + player.name + ", " + "Symbol: " + player.symbol
            + ", " + "Score: " + player.points + ", " + "Level: " + player.level;

        if (i == 0) {
            showPLayerOne.innerHTML = playerText;
        } else if (i == 1) {
            showPLayerTwo.innerHTML = playerText;
        }
    }
}

showPLayers();

//Check winner function
function checkWinner() {
    // Winning combinations for player 1
    for (let i = 0; i < winningCombinations.length; i++) {
        if ((winningCombinations[i][0].textContent == players[0].symbol) && (winningCombinations[i][1].textContent == players[0].symbol) && 
        (winningCombinations[i][2].textContent == players[0].symbol)) {
            alert("Player 1 has won!!");
            players[0].addPoints();
            resetBoard();
            draw = 0;
            showPLayers();
        }
    }
    //Winning combinations for player 2
    for (let i = 0; i < winningCombinations.length; i++) {
        if ((winningCombinations[i][0].textContent == players[1].symbol) && (winningCombinations[i][1].textContent == players[1].symbol) && 
        (winningCombinations[i][2].textContent == players[1].symbol)) {
            alert("Player 2 has won!!");
            players[1].addPoints();
            resetBoard();
            draw = 0;
            showPLayers();
        }
    }
    //Check for draw
    if (draw == fields.length) {
        alert('draw');
        resetBoard();
        draw = 1;
    } else {
        draw++;
    }
    /**
     * Add an algorithm to check if someone has three in a row
     * Also make sure you check for a draw (gelijkspel)
     * Add an alert that says who won
     * Add an alert if the game ends in a draw 
     * Add points to the winner 
     * Reset the board
     * Show players with the added point
     */
}

//Reset board function
function resetBoard() {
    for (let i = 0; i < fields.length; i++) {
        const element = fields[i];
        element.textContent = "";
    }
}

//Reset game function
function resetGame() {
    resetBoard();

    players[0].points = 0;
    players[1].points = 0;
    players[0].level = 1;
    players[1].level = 1;
    draw = 1;

    showPLayers();
}

console.log('File loaded');