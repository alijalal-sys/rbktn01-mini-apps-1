var XPlayer = true; 
var OPlayer = false;
var counter = 0;
var XDiv = document.getElementById('X');
var ODiv = document.getElementById('O');
var blocks = document.getElementsByClassName('blocks');
var reset = document.getElementById('reset-btn');

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

reset.addEventListener('click', () => {
  XPlayer = true;
  OPlayer = false;
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].textContent = '';
    counter = 0;
  }
})

// Helper Functions

var hasRowOrColConflict = function (play) {
  // Row Conflict
  if (blocks[0].textContent === play && blocks[1].textContent === play && blocks[2].textContent === play) {
    return true;
  }
  if (blocks[3].textContent === play && blocks[4].textContent === play && blocks[5].textContent === play) {
    return true;
  }
  if (blocks[6].textContent === play && blocks[7].textContent === play && blocks[8].textContent === play) {
    return true;
  }
  // Row Conflict

  // Col Conflict 
  if (blocks[0].textContent === play && blocks[3].textContent === play && blocks[6].textContent === play) {
    return true;
  }
  if (blocks[1].textContent === play && blocks[4].textContent === play && blocks[7].textContent === play) {
    return true;
  }
  if (blocks[2].textContent === play && blocks[5].textContent === play && blocks[8].textContent === play) {
    return true;
  }
  // Col Conflict 

}

var hasMajorOrMinorConflict = function (play) {
  if (blocks[0].textContent === play && blocks[4].textContent === play && blocks[8].textContent === play) {
    return true;
  }
  if (blocks[2].textContent === play && blocks[4].textContent === play && blocks[6].textContent === play) {
    return true;
  }
}

// Check if it's Tie
var isTie = function () {
  if (counter === 9) {
    document.getElementById('main').style.opacity = 0.2;
    document.getElementById('tie').style.visibility = 'visible';
  }
}

// Someon Won
var heWon = function (player) {
  document.getElementById('main').style.opacity = 0.2;
  document.getElementById('won').style.visibility = 'visible';
  document.getElementById('play').style.visibility = 'visible';
  document.getElementById('won').innerHTML = `<p>${player} Won!</p>`
}

document.getElementById('play-again').addEventListener('click', () => {
  alert('no');
})

// Switch players
var switchPlayer = function (player) {
  if (player === 'X') {
    XPlayer = false;
    OPlayer = true;
    counter++;
    XDiv.style.fontSize = '24pt';
    ODiv.style.fontSize = '36pt';
  } else {
    OPlayer = false;
    XPlayer = true;
    counter++;
    ODiv.style.fontSize = '24pt';
    XDiv.style.fontSize = '36pt';
  }
}

// Play Game 
var playGame = function (player) {
  switchPlayer(player);
  
  if (hasRowOrColConflict(player) || hasMajorOrMinorConflict(player)) {
    return heWon(player)
  }

  isTie()
}