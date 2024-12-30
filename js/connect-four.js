let currentPlayerColor = 'red'; // Start with player red as default
let board = Array(7).fill().map(() => Array(6).fill('')); // 6 rows, 7 columns

// Function to create the game board
function createBoard() {
  const boardContainer = document.getElementById('connect-four-board');
  boardContainer.innerHTML = ''; // Clear any previous grid

  // Loop to create the game grid dynamically (6 rows, 7 columns)
  for (let col=0; col<7; col++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (let row=0; row<6; row++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.onclick = () => dropCoin(col); // Call dropCoin when a column is clicked
      cell.setAttribute('data-row', row); // Store row for debugging (optional)
      cell.setAttribute('data-col', col); // Store column for debugging (optional)
      rowDiv.appendChild(cell);
    }
    boardContainer.appendChild(rowDiv);
  }

  // Set initial message displaying which player's turn it is
  document.getElementById('message').innerText = `${currentPlayerColor}'s turn`;
}

// Function to drop the token into the column
function dropCoin(col) {
  // Loop through rows from bottom (row 5) to top (row 0) to find the first empty spot in the column
  for (let row = 5; row >= 0; row--) {
    if (board[row][col] === '') {
      // Place token in the first empty cell in the column
      board[row][col] = currentPlayerColor;

      // Update the visual board: set the background color of the cell to the current player's color
      document.getElementsByClassName('row')[row].children[col].style.backgroundColor = currentPlayerColor;

      // Check if the current player has won
      if (checkWinner()) {
        currentPlayerColor = currentPlayerColor === 'red' ? 'yellow' : 'red';
        document.getElementById('message').innerText = `${currentPlayerColor} wins!`;
        setTimeout(() => alert(`${currentPlayerColor} wins!`), 100); // Show a pop-up winner message
        // Trigger confetti
        setTimeout(() => {
            confetti({
                particleCount: 200,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 100);
      }

    
      
      // Change to the other player's turn
      currentPlayerColor = currentPlayerColor === 'red' ? 'yellow' : 'red';
      document.getElementById('message').innerText = `${currentPlayerColor}'s turn`; // Update the message for the next turn
      break; // Stop the loop once the token has been dropped
    }
  }
}

// Function to check for a winner
function checkWinner() {
  // Loop through each cell to check for a winner (horizontal, vertical, diagonal)
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      if (board[row][col] !== '' && checkDirection(row, col)) {
        return true; // If a winner is found, return true
      }
    }
  }
  return false; // No winner found
}

// Function to check all 4 directions for a winning line (horizontal, vertical, diagonal)
function checkDirection(row, col) {
  const directions = [
    [1, 0], // Horizontal
    [0, 1], // Vertical
    [1, 1], // Diagonal /
    [1, -1] // Diagonal \
  ];

  // Loop through each direction
  for (let [dx, dy] of directions) {
    let count = 1; // Start with the current cell

    // Check in the positive direction (right, down, or diagonally)
    for (let i = 1; i < 4; i++) {
      let newRow = row + i * dx;
      let newCol = col + i * dy;

      // Check if the new cell is within bounds and the token matches
      if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7 && board[newRow][newCol] === board[row][col]) {
        count++; // Increment the count if the token matches
      } else {
        break; // Stop if there's no match
      }
    }

    // Check in the negative direction (left, up, or diagonally)
    for (let i = 1; i < 4; i++) {
      let newRow = row - i * dx;
      let newCol = col - i * dy;

      // Check if the new cell is within bounds and the token matches
      if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7 && board[newRow][newCol] === board[row][col]) {
        count++; // Increment the count if the token matches
      } else {
        break; // Stop if there's no match
      }
    }

    // If we find 4 consecutive matching tokens, return true for a winner
    if (count >= 4) return true;
  }
  return false; // No winner found
}

// Initial call to create the board
createBoard();
