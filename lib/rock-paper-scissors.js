const MAX_BEST_OF = 10;

export function isValidBestOf(bestOf, wins) {
  if(bestOf == 1){
    if(wins == 1){
      //best_Of_winner = true; 
      return true;
    }
  }
  else if(bestOf == 3){
    if(wins == 2){
      //best_Of_winner = true; 
      return true;
    }
  }
  else if(bestOf == 5){
    if(wins == 3){
      //best_Of_winner = true; 
      return true;
    }
  }
  else if(bestOf == 7){
    if(wins == 5){
      //best_Of_winner = true; 
      return true;
    }
  }
  else if(bestOf == 9){
    if(wins == 5){
      //best_Of_winner = true; 
      return true;
    }
  }
  else{
    return false;
  } 
  
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

export function computerPlay() {
  return (Math.floor(Math.random() * 3) + 1).toString();
}
