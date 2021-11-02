// Hér þarf að laga þannig að hægt sé að sækja og nota föllin
const MAX_BEST_OF = 10;

export function isValidBestOf(bestOf, maxBestOf) {
  if (isNaN(bestOf)) {
    return false;
  }

  // Ekki á bili
  if (0 >= bestOf || bestOf >= MAX_BEST_OF) {
    return false;
  }

  // Ekki oddatala
  if (bestOf % 2 !== 1) {
    return false;
  }

  return true;
}

export function playAsText(play) {
  switch (play) {
    case '1':
      return 'Skæri';
    case '2':
      return 'Blað';
    case '3':
      return 'Steinn';
    default:
      return 'Óþekkt';
  }
}

export function checkGame(player, computer) {
  // Skæri vinnur blað
  if (player === '1' && computer === '2') {
    return 1;
  }

  // Blað vinnur stein
  else if (player === '2' && computer === '3') {
    return 1;
  }

  // Steinn vinnur skæri
  else if (player === '3' && computer === '1') {
    return 1;
  }


  // Jafntefli!
  else if (player === computer) {
    return 0;
  }

  // Annars vinnur tölva!
  return -1;
}

/**
 * Spilar fyrir tölvu.
 * Hér væri hægt að taka inn _fyrri_ leiki spilari til að gera tölvu snjallari..
 *
 * @returns {number} Heiltala á bilinu [1, 3]
 */
export function computerPlay() {
  return (Math.floor(Math.random() * 3) + 1).toString();
}
