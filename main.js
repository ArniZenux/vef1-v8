// TODO hér vantar að sækja viðeigandi föll úr öðrum modules
import { show, hiddenAll, updateResultScreen } from './lib/ui.js';
import { isValidBestOf, checkGame, computerPlay, playAsText } from './lib/rock-paper-scissors.js';

/** Hámarks fjöldi best-of leikja, ætti að vera jákvæð heiltala stærri en 0 */
const MAX_BEST_OF = 10;

/** Fjöldi leikja sem á að spila í núverandi umferð */
let totalRounds;

/** Númer umferðar í núverandi umferð */
let currentRound = 0; 

/** Sigrar spilara í núverandi umferð */
let playerWins = 0;

/** Töp spilara í núverandi umferð */
let computerWins = 0;

let player_pickup = 0; 

/**
 * Fjöldi sigra spilara í öllum leikjum. Gætum reiknað útfrá `games` en til
 * einföldunar höldum við utan um sérstaklega.
 */
let totalWins = 0;

/**
 * Utanumhald um alla spilaða leiki, hver leikur er geymdur á forminu:
 *
 * ```
 * {
 *   player: 2,
 *   computer: 1,
 *   win: true,
 * }
 * ```
 */
const games = [];

/**
 * Uppfærir stöðu eftir að spilari hefur spilað.
 * Athugar hvort leik sé lokið, uppfærir stöðu skjá með `updateResultScreen`.
 * Birtir annað hvort `Næsti leikur` takka ef leik er lokið eða `Næsta umferð`
 * ef spila þarf fleiri leiki.
 *
 * @param {number} player Það sem spilari spilaði
 */
function playRound(player) {
  // Komumst að því hvað tölva spilaði og athugum stöðu leiks

  if( currentRound == totalRounds ){
    console.log("Game Over");
  }
  else{
    let computer = computerPlay(); 
    let winner;

    console.log("player: " , player.toString(), " : ", playAsText(player.toString()) ); 
    console.log("computer: ", computer, " : ", playAsText(computer));
    
    let result_win = checkGame(player.toString(), computer);
    
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
    
    currentRound++; 
    console.log(currentRound);
  
    // Uppfærum result glugga áður en við sýnum, hér þarf að importa falli
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
  
  // Uppfærum teljara ef ekki jafntefli, verðum að gera eftir að við setjum titil

  // Ákveðum hvaða takka skuli sýna

  // Sýnum niðurstöðuskjá
}

/**
 * Fall sem bregst við því þegar smellt er á takka fyrir fjölda umferða
 * @param {Event} e Upplýsingar um atburð
 */
function round(e) {
  // TODO útfæra
}

//hiddenAll(); 

// Takki sem byrjar leik
document
  .querySelector('.start button')
  .addEventListener('click', () => {
    show('round');
});

// Búum til takka
// createButtons(MAX_BEST_OF, round);
document
  .querySelector('button.one')
  .addEventListener('click',() => {
    const value_1 = document.querySelector('.result__totalRounds');
    value_1.textContent = '1';
    totalRounds = 1; 
    console.log(totalRounds);
});

document
  .querySelector('button.three')
  .addEventListener('click',() => {
    const value_3 = document.querySelector('.result__totalRounds');
    value_3.textContent = '3';
    totalRounds = 3; 
    console.log(totalRounds);
});

document
  .querySelector('button.five')
  .addEventListener('click',() => {
    const value_5 = document.querySelector('.result__totalRounds');
    value_5.textContent = '5';
    totalRounds = 5; 
    console.log(totalRounds);
});

document
  .querySelector('button.seven')
  .addEventListener('click',() => {
    const value_7 = document.querySelector('.result__totalRounds');
    value_7.textContent = '7';
    totalRounds = 7; 
});

document
  .querySelector('button.nine')
  .addEventListener('click',() => {
    const value_9 = document.querySelector('.result__totalRounds');
    value_9.textContent = '9';
    totalRounds = 9; 
    console.log(totalRounds);
});

// Event listeners fyrir skæri, blað, steinn takka
// TODO
document
  .querySelector('button.scissor')
  .addEventListener('click', () => {
    player_pickup = 1; 
    playRound(player_pickup); 

});

document
  .querySelector('button.paper')
  .addEventListener('click', () => {
    player_pickup = 2; 
    playRound(player_pickup); 
});

document
  .querySelector('button.rock')
  .addEventListener('click', () => {
    player_pickup = 3; 
    playRound(player_pickup); 
});

/**
 * Uppfærir stöðu yfir alla spilaða leiki þegar leik lýkur.
 * Gerir tilbúið þannig að hægt sé að spila annan leik í framhaldinu.
 */
function finishGame() {
  // Bætum við nýjasta leik
  console.log("dasfas");
  // Uppfærum stöðu

  // Bætum leik við lista af spiluðum leikjum

  // Núllstillum breytur

  // Byrjum nýjan leik!
}

function newRound(){
  totalRounds = 0; 
  playerWins = 0; 
  computerWins = 0;

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

}

// Næsta umferð og ljúka leik takkar
document.querySelector('button.finishGame')
  .addEventListener('click', finishGame);

document.querySelector('button.nextRound')
  .addEventListener('click', newRound);
