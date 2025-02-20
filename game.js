let mathRandom;
let computerMove;
let computerMove_words;
let my_move;
let score1 = {
    wins: 0,
    loses: 0,
    ties: 0
  }
let result ;
let store = localStorage.getItem(score1);

function Rock_icon() {
  my_move = `<img src="images/rock-emoji.png"  class="rock-image" />`
  mathRandom = Math.random();
  if (mathRandom > 0 && mathRandom <= 1 / 3) {
    computerMove_words = "Rock";
    computerMove = `<img src="images/rock-emoji.png"  class="rock-image" />`
  } else if (mathRandom > 1 / 3 && mathRandom <= 2 / 3) {
    computerMove_words = "Paper";
    computerMove = `<img src="images/paper-emoji.png" class="paper-image" />`
  } else if (mathRandom > 2 / 3 && mathRandom <= 1) {
    computerMove_words = "Scissor";
    computerMove = ` <img src="images/scissors-emoji.png" class="scissor-image" />`
  }


  if(computerMove_words === "Rock"){
    result = 'You Tie'
  }
  else if(computerMove_words === "Paper"){
    result = 'You Lose'
  }

  else if(computerMove_words === "Scissor"){
    result = 'You Win'
  }


  if(result === 'You Tie'){
    score1.ties = score1.ties + 1
  }
  else if(result === 'You Lose'){
    score1.loses = score1.loses + 1
  }
  else if(result === 'You Win'){
    score1.wins = score1.wins + 1
  }

  localStorage.setItem(score1,JSON.stringify(`Wins: ${score1.wins} ,Loses: ${score1.loses} ,Ties: ${score1.ties}`));

  document.querySelector('.picks-display').innerHTML = `you ${my_move} ${computerMove} computer`;
  document.querySelector('.result-display').innerHTML = result;
  document.querySelector('.score-display').innerHTML =  `Wins: ${score1.wins} ,Loses: ${score1.loses} ,Ties: ${score1.ties}`;
  
}





























function Paper_icon() {
    my_move = `<img src="images/paper-emoji.png" class="paper-image" />`
    mathRandom = Math.random();
    if (mathRandom > 0 && mathRandom <= 1 / 3) {
      computerMove_words = "Rock";
      computerMove = `<img src="images/rock-emoji.png"  class="rock-image" />`
    } else if (mathRandom > 1 / 3 && mathRandom <= 2 / 3) {
      computerMove_words = "Paper";
      computerMove = `<img src="images/paper-emoji.png" class="paper-image" />`
    } else if (mathRandom > 2 / 3 && mathRandom <= 1) {
      computerMove_words = "Scissor";
      computerMove = ` <img src="images/scissors-emoji.png" class="scissor-image" />`
    }
  
  
    if(computerMove_words === "Rock"){
      result = 'You Win'
    }
    else if(computerMove_words === "Paper"){
      result = 'You Tie'
    }
  
    else if(computerMove_words === "Scissor"){
      result = 'You Lose'
    }
  
  
    if(result === 'You Tie'){
      score1.ties = score1.ties + 1
    }
    else if(result === 'You Lose'){
      score1.loses = score1.loses + 1
    }
    else if(result === 'You Win'){
      score1.wins = score1.wins + 1
    }
  
    localStorage.setItem(score1,JSON.stringify(`Wins: ${score1.wins} ,Loses: ${score1.loses} ,Ties: ${score1.ties}`));
  
    document.querySelector('.picks-display').innerHTML = `you ${my_move} ${computerMove} computer`;
    document.querySelector('.result-display').innerHTML = result;
    document.querySelector('.score-display').innerHTML =  `Wins: ${score1.wins} ,Loses: ${score1.loses} ,Ties: ${score1.ties}`;
    
  }




















  function Scissor_icon() {
    my_move = `<img src="images/scissors-emoji.png" class="scissor-image" />`
    mathRandom = Math.random();
    if (mathRandom > 0 && mathRandom <= 1 / 3) {
      computerMove_words = "Rock";
      computerMove = `<img src="images/rock-emoji.png"  class="rock-image" />`
    } else if (mathRandom > 1 / 3 && mathRandom <= 2 / 3) {
      computerMove_words = "Paper";
      computerMove = `<img src="images/paper-emoji.png" class="paper-image" />`
    } else if (mathRandom > 2 / 3 && mathRandom <= 1) {
      computerMove_words = "Scissor";
      computerMove = ` <img src="images/scissors-emoji.png" class="scissor-image" />`
    }
  
  
    if(computerMove_words === "Rock"){
      result = 'You Lose'
    }
    else if(computerMove_words === "Paper"){
      result = 'You Win'
    }
  
    else if(computerMove_words === "Scissor"){
      result = 'You Tie'
    }
  
  
    if(result === 'You Tie'){
      score1.ties = score1.ties + 1
    }
    else if(result === 'You Lose'){
      score1.loses = score1.loses + 1
    }
    else if(result === 'You Win'){
      score1.wins = score1.wins + 1
    }
  
    localStorage.setItem(score1,JSON.stringify(`Wins: ${score1.wins} ,Loses: ${score1.loses} ,Ties: ${score1.ties}`));
  
    document.querySelector('.picks-display').innerHTML = `you ${my_move} ${computerMove} computer`;
    document.querySelector('.result-display').innerHTML = result;
    document.querySelector('.score-display').innerHTML =  `Wins: ${score1.wins} ,Loses: ${score1.loses} ,Ties: ${score1.ties}`;
    
  }




  function reset(){
    score1 = {
        wins: 0,
        loses: 0,
        ties: 0
    }
    localStorage.setItem(score1,JSON.stringify(`Wins: ${score1.wins} ,Loses: ${score1.loses} ,Ties: ${score1.ties}`));
  
    document.querySelector('.result-display').innerHTML = 'Game Was Reset !';
    document.querySelector('.score-display').innerHTML =  `Wins: ${score1.wins} ,Loses: ${score1.loses} ,Ties: ${score1.ties}`;
  }
document.querySelector('.the_lastScore').innerHTML =  `Last played: \n ${store}`;
