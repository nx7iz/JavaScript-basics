let score = JSON.parse(localStorage.getItem('score')) ||  {
    wins: 0,
    losses: 0,
    ties: 0
  }; 

  updateScore();
  
  
  /* (does the same thing as above)
  if (score === null || !score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
  }
  */
 
  let isAutoPlaying = false;
  let intervalId;
  function autoPlay() {
    if (!isAutoPlaying) {
      intervalId = setInterval(function() {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000);
      isAutoPlaying = true;
    } else {
      // To stop a interval
      clearInterval(intervalId);
      isAutoPlaying = false;
    }

  }

  function playGame(playerMove) {
    
    const computerMove = pickComputerMove();
    
    let result = '';
    
    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose';
      } else if (computerMove === 'paper') {
        result = 'You win';
      } else if (computerMove === 'scissors') {
        result = 'Tie';
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win';
      } else if (computerMove === 'paper') {
        result = 'Tie';
      } else if (computerMove === 'scissors') {
        result = 'You lose';
      }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Tie';
        } else if (computerMove === 'paper') {
          result = 'You lose';
        } else if (computerMove === 'scissors') {
          result = 'You win';
        }
      }
      if (result === 'You win') {
        score.wins++;
      } else if (result === 'You lose') {
        score.losses++;
      } else if (result === 'Tie') {
        score.ties++;
      }
      // converts score to string as LS takes string.
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result')
      .innerHTML = result; 

    document.querySelector('.js-moves')
      .innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon"> 
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;

    updateScore();

    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.\nWins: ${score.wins
    // }, Loses: ${score.losses}, Ties: ${score.ties}`)
  }

  function updateScore() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins
      }, Loses: ${score.losses}, Ties: ${score.ties}`;
    localStorage.setItem('score', JSON.stringify(score));
  }
  
  function pickComputerMove() {
    let computerMove = '';
    const randomNumber = (Math.random());

    if (randomNumber >= 0 && randomNumber < (1/3)) {
        computerMove = 'rock';
      } else if (randomNumber >= 1/3 && randomNumber < (2/3)) {
        computerMove = 'paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }

    return computerMove;
  }

