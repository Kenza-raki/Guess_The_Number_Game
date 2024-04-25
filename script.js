document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector("input");
  const guess = document.querySelector(".guess");
  const checkButton = document.querySelector("button");
  const remainChances = document.querySelector(".chances span");
  const wrapper = document.querySelector(".wrapper");
  const backgroundMusic = document.getElementById('backgroundMusic');
  let musicPlayed = false;

  document.addEventListener('click', () => {
    
    if (!musicPlayed) {
      backgroundMusic.play();
      musicPlayed = true;
    }
  });

  
  const correctSound = document.getElementById('correctSound');
  const wrongSound = document.getElementById('wrongSound');
  correctSound.volume = 0.5; 
  wrongSound.volume = 0.5;   

  input.focus();

  let randomNum = Math.floor(Math.random() * 100) + 1;
  let chance = 10;

  checkButton.addEventListener("click", () => {
    chance--;

    let inputValue = parseInt(input.value);

    if (inputValue === randomNum) {
      
      wrapper.innerHTML = '';
      
    
      const loseGif = document.createElement('img');
      loseGif.src = 'congrats.gif'; 
      loseGif.alt = 'You lose';
      loseGif.classList.add('lose-gif'); 
      wrapper.appendChild(loseGif);
      
     
      const lostMessage = document.createElement('p');
      lostMessage.textContent = 'Congratulations ! That is correct';
      lostMessage.style.fontSize = '32px'; 
      lostMessage.style.fontWeight = 'bold'; 
      lostMessage.style.color = '#DE0611'; 
      lostMessage.style.marginTop = '20px'; 
      lostMessage.style.border = '2px solid white'; 
      lostMessage.style.padding = '10px'; 
      lostMessage.style.borderRadius = '10px'; 
      wrapper.appendChild(lostMessage);

      
      
      checkButton.textContent = 'Replay';
      input.disabled = true;
      correctSound.play(); 
    } else if (inputValue > randomNum && inputValue <= 100) {
      [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
      guess.style.color = "thistle";
      wrongSound.play(); 
      wrapper.classList.add('shake-left-right'); 
      setTimeout(() => wrapper.classList.remove('shake-left-right'), 800); 
    } else if (inputValue < randomNum && inputValue > 0) {
      [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
      guess.style.color = "thistle";
      wrongSound.play(); 
      wrapper.classList.add('shake-left-right'); 
      setTimeout(() => wrapper.classList.remove('shake-left-right'), 800); 
    } else {
      [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
      guess.style.color = "thistle";
      wrongSound.play(); 
      wrapper.classList.add('shake-left-right'); 
      setTimeout(() => wrapper.classList.remove('shake-left-right'), 800); 
    }

    if (chance === 0) {
      
      wrapper.innerHTML = '';
      
     
      const loseGif = document.createElement('img');
      loseGif.src = 'lose.gif'; 
      loseGif.alt = 'You lose';
      loseGif.classList.add('lose-gif'); 
      wrapper.appendChild(loseGif);
      

      const lostMessage = document.createElement('p');
      lostMessage.textContent = 'You lost the game';
      lostMessage.style.fontSize = '32px'; 
      lostMessage.style.fontWeight = 'bold'; 
      lostMessage.style.color = '#DE0611'; 
      lostMessage.style.marginTop = '20px'; 
      lostMessage.style.border = '2px solid white'; 
      lostMessage.style.padding = '10px'; 
      lostMessage.style.borderRadius = '10px'; 
      wrapper.appendChild(lostMessage);

      
     
      checkButton.textContent = 'Replay';
      input.disabled = true;
    }
    

    if (chance < 0) {
      window.location.reload();
    }
  });
});
