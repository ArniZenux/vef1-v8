import { playAsText } from './rock-paper-scissors.js';

/**
 * Býr til takka fyrir umferðir, festir `onClick` við og bætir
 * við `.rounds__buttons`.
 *
 * @param {number} max Hámark umferða
 * @param {function} onClick Fall sem keyra skal þegar ýtt er á takka
 */
export function createButtons(max, onClick) {
  const start = document.querySelector('.start');
  start.onClick = fela();
}

function fela(){
  start.classList.add('hidden');
}

export function hiddenAll(){
  // Element fyrir „parta“ leiks sem við viljum fela og sýna
  const start = document.querySelector('.start');
  const rounds = document.querySelector('.rounds');
  const play = document.querySelector('.play');
  const result = document.querySelector('.result');

  // Felum allt
  start.classList.add('show');
  rounds.classList.add('hidden');
  play.classList.add('hidden');
  result.classList.add('hidden');
}

export function show(part) {
  const start = document.querySelector('.start');
  const rounds = document.querySelector('.rounds');
  //const play = document.querySelector('.play');
  //const result = document.querySelector('.result');

  start.classList.add('hidden');
  rounds.classList.add('hidden');
  //play.classList.add('hidden');
  //result.classList.add('hidden');
  
  switch (part) {
    case 'start':
      start.classList.remove('hidden');
      break;
    case 'rounds':
      rounds.classList.remove('hidden');
      break;
    /*case 'play':
      play.classList.remove('hidden');
      break;
    case 'result':
      result.classList.remove('hidden');
      break;
    */      
    default:
      console.warn(`${part} óþekkt`);
  }
  
  //debugger;
}

//
// Update game status. 
//
export function updateResultScreen({ player, computer, result, currentRound, totalRounds, playerWins, computerWins }) {
  
  const resultPlayer = document.querySelector('.result__player');
  resultPlayer.textContent = playAsText(player);
  
  const resultComputer = document.querySelector('.result__computer');
  resultComputer.textContent = playAsText(computer);

  const resultWinner = document.querySelector('.result__result');
  resultWinner.textContent = result;
  
  const roundOfGame = document.querySelector('.result__currentRound');
  roundOfGame.textContent = currentRound;

  const statusOfGame = document.querySelector('.result__status');
  statusOfGame.textContent = 'Staðan er : ' + playerWins + ' - ' + computerWins;
  
}
