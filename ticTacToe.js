const board = document.getElementById('board');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function renderBoard() {
    board.innerHTML = '';
    gameBoard.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => cellClick(index));
        if (cell === 'X') {
            cellElement.classList.add('X');
        } else if (cell === 'O') {
            cellElement.classList.add('O');
        }
        board.appendChild(cellElement);
    });
}

function cellClick(index) {
    if (!gameActive || gameBoard[index] !== '') return;

    gameBoard[index] = currentPlayer;
    renderBoard();

    if (checkWinner()) {
        renderBoard();
        const message = currentPlayer === 'X' ? 'Player X wins!' : 'Player O wins!';
        showPopup(message);
        gameActive = false;
    } else if (gameBoard.every(cell => cell !== '')) {
        showPopup("It's a tie!");
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]           
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c];
    });
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const restartButton = document.getElementById('restart-button');

    popupMessage.textContent = message;
    restartButton.style.display = 'block';
    popup.style.display = 'block';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function restartGame() {
    hidePopup();
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    renderBoard();
}

renderBoard();
