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
  