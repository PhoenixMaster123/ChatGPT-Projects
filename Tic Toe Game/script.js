const cells = document.querySelectorAll('.cell');
let turn = 'X';
let gameOver = false;
let xWins = 0;
let oWins = 0;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

document.getElementById('reset-button').addEventListener('click', resetGame);

function handleClick(e) {
    if (gameOver) return;
    const cell = e.target;
    cell.textContent = turn;
    cell.classList.add('disabled');
    cell.removeEventListener('click', handleClick); // remove event listener with 'once' option
    if (checkWin()) {
        gameOver = true;
        if (turn === 'X') {
            xWins++;
            alert(`Game Over! X wins!`);
        } else {
            oWins++;
            alert(`Game Over! O wins!`);
        }
        updateWins();
    } else if (checkDraw()) {
        gameOver = true;
        alert(`Game Over! It's a draw!`);
    } else {
        turn = turn === 'X' ? 'O' : 'X';
        updateTurn();
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return cells[index].textContent === turn;
        });
    });
}

function checkDraw() {
    return [...cells].every(cell => {
        return cell.textContent !== '';
    });
}

function updateWins() {
    document.getElementById('x-wins').textContent = xWins;
    document.getElementById('o-wins').textContent = oWins;
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('disabled');
        cell.addEventListener('click', handleClick, { once: true }); // add event listener with 'once' option
    });
    turn = 'X';
    gameOver = false;
    updateTurn();
}

function updateTurn() {
    document.querySelector('.turn').textContent = turn;
}

updateWins();
updateTurn();
