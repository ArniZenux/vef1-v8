import { show, hiddenAll, updateResultScreen, notshow, newGame } from './lib/ui.js';
import { isValidBestOf, checkGame, computerPlay, playAsText } from './lib/rock-paper-scissors.js';

// 
// Globals 
//
let totalRounds;
let currentRound = 0; 
let counter = 0 ; 
let playerWins = 0;
let computerWins = 0;
let player_pickup = 0; 
let best_Of_winner = false; 

let totalWins = 0;
let losssssser = 0; 

/**
 * Utanumhald um alla spilaða leiki, hver leikur er geymdur á forminu:
 *
 * ```
 * {
 *   player: 2,
 *   computer: 1,
 *   win: true,
 * }
 * 
 */
const games = [
  {
    playerWins: 2,
    computerWins: 3,
  }
];

function checkWinner(player, computer){
  if(player > computer){
    totalWins++;
  }
  else{
    losssssser++;
  }
}

//
//  Main game - loop 
//
function playRound(player) {
  
  currentRound++;

  if( currentRound == totalRounds ){
    console.log("Game Over");
  }
  else{
    let computer = computerPlay();   // rock-paper-scissor.js  - Find random for computer
    let winner;

    console.log("player: " , player.toString(), " : ", playAsText(player.toString()) ); 
    console.log("computer: ", computer, " : ", playAsText(computer));
    
    let result_win = checkGame(player.toString(), computer); // athuga hvort player or computer wins
    
    if(result_win == 1){
      console.log("winner is player: ", result_win);
      winner = 'þú vannst';
      playerWins++;
    }
    
    else if(result_win == -1){
      console.log("winner is computer: ", result_win);
      winner = 'Tölva sigrar';
      computerWins++;
    }
    
    else if(result_win == 0){
      console.log("jafntefli : ", result_win);
      winner = 'jafntefli';
    }
          
    if(isValidBestOf(totalRounds, playerWins))
    {
      currentRound = totalRounds; 
      console.log("Best of round!!");
    }

    updateResultScreen({
      player: player.toString(),
      computer: computer.toString(),
      result : winner,
      currentRound : currentRound,
      totalRounds : totalRounds,
      playerWins: playerWins,
      computerWins: computerWins,
    });
  }
}

//
// Button : 1 , 3,  5,  7,  9
//
document
  .querySelector('button.one')
  .addEventListener('click',() => {
    const value_1 = document.querySelector('.result__totalRounds');
    value_1.textContent = '1';
    totalRounds = 1; 
    console.log(totalRounds);
    show('play');
});

document
  .querySelector('button.three')
  .addEventListener('click',() => {
    const value_3 = document.querySelector('.result__totalRounds');
    value_3.textContent = '3';
    totalRounds = 3; 
    console.log(totalRounds);
    show('play');

});

document
  .querySelector('button.five')
  .addEventListener('click',() => {
    const value_5 = document.querySelector('.result__totalRounds');
    value_5.textContent = '5';
    totalRounds = 5; 
    console.log(totalRounds);
    show('play');
});

document
  .querySelector('button.seven')
  .addEventListener('click',() => {
    const value_7 = document.querySelector('.result__totalRounds');
    value_7.textContent = '7';
    totalRounds = 7; 
    show('play');
});

document
  .querySelector('button.nine')
  .addEventListener('click',() => {
    const value_9 = document.querySelector('.result__totalRounds');
    value_9.textContent = '9';
    totalRounds = 9; 
    console.log(totalRounds);
    show('play');
});

//
// Button : skæri, blað, steinn
//
document
  .querySelector('button.scissor')
  .addEventListener('click', () => {
    player_pickup = 1; 
    playRound(player_pickup); 
    show('result');
    notshow();
});

document
  .querySelector('button.paper')
  .addEventListener('click', () => {
    player_pickup = 2; 
    playRound(player_pickup); 
    show('result');
    notshow();

});

document
  .querySelector('button.rock')
  .addEventListener('click', () => {
    player_pickup = 3; 
    playRound(player_pickup); 
    show('result');
    notshow();
});


//
// Button : Næsta  umferð 
//
function newRound() {
  if(currentRound <= totalRounds){
    show('play');
  }
  else{
    newGame();
  }
}

//
// Button : Næsti leikur
//
function finishGame(){
  
  counter++;

  best_Of_winner = false; 

  const resultPlayer = document.querySelector('.result__player');
  resultPlayer.textContent = '----';
  
  const resultComputer = document.querySelector('.result__computer');
  resultComputer.textContent = '----';

  const resultWinner = document.querySelector('.result__result');
  resultWinner.textContent = '----';
  
  const roundOfGame = document.querySelector('.result__currentRound');
  roundOfGame.textContent = 0;

  const TotalRound = document.querySelector('.result__totalRounds');
  TotalRound.textContent = 0;

  const statusOfGame = document.querySelector('.result__status');
  statusOfGame.textContent = 'Staðan er : ' + playerWins + ' - ' + computerWins;

  const TotalGame = document.querySelector('.games__played');
  TotalGame.textContent = counter; 
  
  checkWinner(playerWins, computerWins);
  const TotalWinner = document.querySelector('.games__wins');
  TotalWinner.textContent = totalWins;

  const TotalLosser = document.querySelector('.games__losses');
  TotalLosser.textContent = losssssser;
 
  totalRounds = 0; 
  playerWins = 0; 
  computerWins = 0;
  currentRound = 0; 

}

// Næsta umferð og ljúka leik takkar
document.querySelector('button.finishGame')
  .addEventListener('click', finishGame);

document.querySelector('button.nextRound')
  .addEventListener('click', newRound);


// fela allt name "byrja leik" í byrjun. 
hiddenAll(); 

//
// Button : Byrja leik
//
document
  .querySelector('.start button')
  .addEventListener('click', () => show('rounds'));