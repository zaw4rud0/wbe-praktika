let state = createInitialState();
let currentPlayer = "r";

function createInitialState() {
    return Array(6).fill("").map(() => Array(7).fill(""));
}

function elt(type, attrs = {}, ...children) {
    let node = document.createElement(type);
    Object.keys(attrs).forEach(key => node.setAttribute(key, attrs[key]));
    for (let child of children) {
        node.append(typeof child === "string" ? document.createTextNode(child) : child);
    }
    return node;
}

function createPiece(color) {
    return elt("div", {class: `piece ${color}`});
}

function showBoard() {
    const board = document.querySelector(".board");
    board.innerHTML = "";

    state.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const field = elt("div", {class: "field"});
            field.addEventListener("click", () => handleFieldClick(colIndex));

            if (cell === "r") field.appendChild(createPiece("red")); 
            else if (cell === "b") field.appendChild(createPiece("blue"));

            board.appendChild(field);
        });
    });

    updateTurnDisplay();
}

function handleFieldClick(col) {
    for (let row = state.length - 1; row >= 0; row--) {
        if (state[row][col] === "") {
            state[row][col] = currentPlayer;
            currentPlayer = currentPlayer === "r" ? "b" : "r";
            showBoard();
            return;
        }
    }
    alert("This field is already occupied!");
}

function resetGame() {
    state = createInitialState();
    currentPlayer = "r";
    showBoard();
}

function updateTurnDisplay() {
    const turnDisplay = document.querySelector("#turn-display");
    turnDisplay.textContent = `Next turn: ${currentPlayer === "r" ? "Red" : "Blue"}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const newGameButton = document.querySelector("#new-game-button");
    newGameButton.addEventListener("click", resetGame);
    showBoard();
});
