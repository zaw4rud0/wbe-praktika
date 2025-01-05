function isWinningLine(board, player, row, col, deltaRow, deltaCol) {
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < 4; i++) {
        const r = row + i * deltaRow;
        const c = col + i * deltaCol;
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== player) {
            return false;
        }
    }
    return true;
}

function connect4Winner(player, board) {
    const rows = board.length;
    const cols = board[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === player) {
                if (
                    isWinningLine(board, player, row, col, 0, 1) || // Horizontal
                    isWinningLine(board, player, row, col, 1, 0) || // Vertical
                    isWinningLine(board, player, row, col, 1, 1) || // Diagonal descending
                    isWinningLine(board, player, row, col, -1, 1)   // Diagonal ascending
                ) {
                    return true;
                }
            }
        }
    }
    return false;
}

module.exports = { connect4Winner };
