// Trigger confetti on winning
function triggerConfetti() {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  
  // Display win message
  function showWinMessage() {
    const winMessage = document.createElement("div");
    winMessage.textContent = "Yayy!! You won!";
    winMessage.style.position = "fixed";
    winMessage.style.top = "50%";
    winMessage.style.left = "50%";
    winMessage.style.transform = "translate(-50%, -50%)";
    winMessage.style.fontSize = "2rem";
    winMessage.style.color = "pink";
    winMessage.style.zIndex = "1000";
    document.body.appendChild(winMessage);
    
    // Trigger confetti when the game is won
    triggerConfetti();
  }
  
  // Call showWinMessage when the user wins the game
  // This logic will depend on the game's specific conditions
  // For demonstration, we just trigger this manually
  setTimeout(showWinMessage, 3000);  // Simulate a win after 3 seconds

  function chooseToken() {
    const token = prompt("Choose your token: X or O");
    if (token === "X" || token === "O") {
      startGame(token);
    } else {
      alert("Invalid choice. Please choose 'X' or 'O'.");
    }
  }
  
  function startGame(playerToken) {
    // Initialize game logic
    alert(`${playerToken} has started the game!`);
    // Game implementation goes here (player vs player)
  }
  
  