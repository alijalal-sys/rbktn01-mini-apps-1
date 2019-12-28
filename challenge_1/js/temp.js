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



for (var i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener("click", function () {
    if (blocks[i].textContent === '') {
      if (XPlayer) {
        blocks[i].innerText = 'X';
        playGame('X')
      } else {
        blocks[i].innerText = 'O';
        playGame('O')
      }
    }
  });
}
































