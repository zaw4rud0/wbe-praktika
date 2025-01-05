let state = Array(6).fill("").map(() => Array(7).fill(""));

function elt(type, attrs, ...children) {
    let node = document.createElement(type)
    Object.keys(attrs).forEach(key => {
        node.setAttribute(key, attrs[key])
    })
    for (let child of children) {
        if (typeof child != "string") node.appendChild(child)
        else node.appendChild(document.createTextNode(child))
    }
    return node
}

function showBoard() {
    const board = document.querySelector(".board");
    board.innerHTML = "";

    state.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const field = elt("div", {class: "field"});

            if (cell === "r") {
                field.appendChild(elt("div", {class: "piece red"}));
            } else if (cell === "b") {
                field.appendChild(elt("div", {class: "piece blue"}));
            }

            board.appendChild(field);
        });
    });
}

function randomizeState() {
    const row = Math.floor(Math.random() * 6);
    const col = Math.floor(Math.random() * 7);
    const random = Math.random();

    if (random < 0.33) {
        state[row][col] = "";
    } else if (random < 0.66) {
        state[row][col] = "r";
    } else {
        state[row][col] = "b";
    }

    showBoard();
}

document.addEventListener("DOMContentLoaded", () => {
    showBoard();
    setInterval(randomizeState, 1000);
});