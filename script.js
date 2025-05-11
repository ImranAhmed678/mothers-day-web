function showEnvelope() {
    document.getElementById('popup').style.display = 'flex';
  }
  
  function openEnvelope() {
    document.getElementById('envelope').classList.add('open');
    setTimeout(() => {
      typeMessage(message, 'typed-text');
      createConfetti(); // Start confetti after message appears
    }, 800);
  }
  
  function closePopup() {
    const envelope = document.getElementById('envelope');
    envelope.classList.remove('open');
    document.getElementById('typed-text').innerHTML = '';
    setTimeout(() => {
      document.getElementById('popup').style.display = 'none';
    }, 500);
  }
  
  function typeMessage(text, elementId, speed = 50) {
    let i = 0;
    const el = document.getElementById(elementId);
    el.innerHTML = '';
    function type() {
      if (i < text.length) {
        if (text[i] === "\n") {
          el.innerHTML += "<br>";
        } else {
          el.innerHTML += text[i];
        }
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }
  
  const message = `
    Thank you for everything you've done for me.\n
    I love and appreciate you more than words can express. 💕\n
    You're my hero, my guide, and my biggest blessing.\n
    Happy Mother's Day! 🌷
  `;
  
  function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    for (let i = 0; i < 100; i++) {
      const confettiPiece = document.createElement('div');
      confettiPiece.classList.add('confetti-piece');
      confettiPiece.style.left = `${Math.random() * 100}vw`;
      confettiPiece.style.animationDuration = `${Math.random() * 3 + 3}s`;
      confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
      confettiContainer.appendChild(confettiPiece);
    }
  }
  