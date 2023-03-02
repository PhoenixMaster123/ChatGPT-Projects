const board = document.getElementById("board");

// Create the chess board
function createBoard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("square");
      if ((row + col) % 2 === 0) {
        square.classList.add("white");
      } else {
        square.classList.add("black");
      }
      square.id = `${row}${col}`;
      board.appendChild(square);
    }
  }
}

// Add the pieces to the board
function addPieces() {
  const pieces = [    "r", "n", "b", "q", "k", "b", "n", "r",    "p", "p", "p", "p", "p", "p", "p", "p",    "", "", "", "", "", "", "", "",    "", "", "", "", "", "", "", "",    "", "", "", "", "", "", "", "",    "", "", "", "", "", "", "", "",    "P", "P", "P", "P", "P", "P", "P", "P",    "R", "N", "B", "Q", "K", "B", "N", "R"  ];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.getElementById(`${row}${col}`);
      const piece = pieces.shift();
      if (piece) {
        const pieceElem = document.createElement("div");
        pieceElem.classList.add("piece");
        pieceElem.innerHTML = piece;
        square.appendChild(pieceElem);
      }
    }
  }
}

// Move the piece
function movePiece(piece, fromSquare, toSquare) {
  const fromElem = document.getElementById(fromSquare);
  const toElem = document.getElementById(toSquare);
  const pieceElem = fromElem.querySelector(".piece");
  const capturedElem = toElem.querySelector(".piece");
  if (capturedElem) {
    capturedElem.remove();
  }
  toElem.appendChild(pieceElem);
}

// Check if the move is legal
function isLegalMove(piece, fromSquare, toSquare) {
  // Check if the move is legal
  return true;
}

// Handle the click event
function handleClick(event) {
  const squareElem = event.target.closest(".square");
  if (squareElem) {
    const fromSquareElem = document.querySelector(".selected");
    if (fromSquareElem) {
      const pieceElem = fromSquareElem.querySelector(".piece");
      const fromSquare = fromSquareElem.id;
      const toSquare = squareElem.id;
      if (isLegalMove(pieceElem.innerHTML, fromSquare, toSquare)) {
        movePiece(pieceElem, fromSquare, toSquare);
      }
      fromSquareElem.classList.remove("selected");
    } else {
      if (squareElem.querySelector(".piece")) {
        squareElem.classList.add("selected");
      }
    }
  }
}

createBoard();
addPieces();
board.addEventListener("click", handleClick);
