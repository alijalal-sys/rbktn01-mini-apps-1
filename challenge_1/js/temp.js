var switchPlayer = function (player) {
  if (player === 'X') {
    XPlayer = false;
    OPlayer = true;
    counter++;
    XDiv.style.fontSize = '24pt'
    ODiv.style.fontSize = '30pt'
  } else {
    OPlayer = false;
    XPlayer = true;
    counter++;
    ODiv.style.fontSize = '24pt'
    XDiv.style.fontSize = '30pt'
  }
}

if (hasRowOrColConflict('O')) {
  console.log('O WON!')
  return;
}
if (hasMajorOrMinorConflict('O')) {
  console.log('O WON')
  return;
}

var playGame = function (player) {
  switchPlayer(player);
  
  if (hasRowOrColConflict(player) || hasMajorOrMinorConflict(player)) {
    return heWon(player)
  }

  isTie()
}