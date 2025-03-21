function runTypingEfect() {
  const text = "I am Jakub Cerny.";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 300;

  // Vyčistíme obsah, pokud tam již nějaký je
  typingElement.textContent = "";
  typeText(text, typingElement, typingDelay, () => {
    // Po dokončení efektu počkáme 2 sekundy a znovu spustíme efekt
    setTimeout(runTypingEfect, 2000);
  });
}

function typeText(text, typingElement, typingDelay, callback) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);

      if (i === text.length - 1 && typeof callback === "function") {
        callback();
      }
    }, typingDelay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingEfect);
