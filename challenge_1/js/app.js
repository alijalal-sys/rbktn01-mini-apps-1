// Alternate between 'X' 'O'
// var boolean for X and O
var XPlayer = true; // because he starts first
var OPlayer = false;
var counter = 0;
var XDiv = document.getElementById('X');
var ODiv = document.getElementById('O');
var blocks = document.getElementsByClassName('blocks');
var reset = document.getElementById('reset-btn');

XDiv.style.fontSize = '30pt'


// Something got clicked !
// put X and set it to false so the next time he won't play again !
// It's O turn

// first 'X' play
// we need to target the id's for divs
// onClick => put 'X' inside the div that he click on
// invoke these methods ==> hasRowOrColConflict && hasMajorOrMinorConflict
// if return true => Do something He Won! Woohoo
// otherwise pass the turn to 'O' player

var square1 = document.getElementById('1');
square1.addEventListener("click", function () {
  if (square1.textContent === '') {
    if (XPlayer) {
      square1.innerText = 'X';

      switchPlayer('X');

      if (hasRowOrColConflict('X') || hasMajorOrMinorConflict('X')) {
        return heWon('X')
      }

      isTie()
    } else {
      square1.innerText = 'O';

      switchPlayer('O');
      
      if (hasRowOrColConflict('O') || hasMajorOrMinorConflict('O')) {
        return heWon('O')
      }

      isTie()
    }
  } else {
    console.log('Noo')
  }
});

var square2 = document.getElementById('2');
square2.addEventListener("click", function () {
  if (square2.textContent === '') {
    if (XPlayer) {
      square2.innerText = 'X';

      switchPlayer('X');
      if (hasRowOrColConflict('X') || hasMajorOrMinorConflict('X')) {
        return heWon('X')
      }

      isTie()
    } else {
      square2.innerText = 'O';

      switchPlayer('O');
      if (hasRowOrColConflict('O') || hasMajorOrMinorConflict('O')) {
        return heWon('O')
      }
      isTie()
    }
  } else {
    console.log('Noo')
  }});

var square3 = document.getElementById('3');
square3.addEventListener("click", function () {
  if (square3.textContent === '') {
    if (XPlayer) {
      square3.innerText = 'X';
      
      switchPlayer('X');
      if (hasRowOrColConflict('X') || hasMajorOrMinorConflict('X')) {
        return heWon('X')
      }
      
      isTie()
    } else {
      square3.innerText = 'O';

      switchPlayer('O');
      if (hasRowOrColConflict('O') || hasMajorOrMinorConflict('O')) {
        return heWon('O')
      }
      isTie()
    }
  } else {
    console.log('Noo')
  }
});

var square4 = document.getElementById('4');
square4.addEventListener("click", function () {
  if (square4.textContent === '') {
    if (XPlayer) {
      square4.innerText = 'X';

      
      switchPlayer('X');
      if (hasRowOrColConflict('X') || hasMajorOrMinorConflict('X')) {
        return heWon('X')
      }
      isTie()
    } else {
      square4.innerText = 'O';

      
      switchPlayer('O');
      if (hasRowOrColConflict('O') || hasMajorOrMinorConflict('O')) {
        return heWon('O')
      }
      isTie()
    }
  } else {
    console.log('Noo')
  }
});

var square5 = document.getElementById('5');
square5.addEventListener("click", function () {
  if (square5.textContent === '') {
    if (XPlayer) {
      square5.innerText = 'X';
      
      switchPlayer('X');
      if (hasRowOrColConflict('X') || hasMajorOrMinorConflict('X')) {
        return heWon('X')
      }
      isTie()
    } else {
      square5.innerText = 'O';
      
      switchPlayer('O');
      if (hasRowOrColConflict('O') || hasMajorOrMinorConflict('O')) {
        return heWon('O')
      }
      isTie()
    }
  } else {
    console.log('Noo')
  }
});

var square6 = document.getElementById('6');
square6.addEventListener("click", function () {
  if (square6.textContent === '') {
    if (XPlayer) {
      square6.innerText = 'X';
      
      switchPlayer('X');
      if (hasRowOrColConflict('X') || hasMajorOrMinorConflict('X')) {
        return heWon('X')
      }
      isTie()
    } else {
      square6.innerText = 'O';
      
      switchPlayer('O');
      if (hasRowOrColConflict('O') || hasMajorOrMinorConflict('O')) {
        return heWon('O')
      }
      isTie()
    }
  } else {
    console.log('Noo')
  }});

var square7 = document.getElementById('7');
square7.addEventListener("click", function () {
  if (square7.textContent === '') {
    if (XPlayer) {
      square7.innerText = 'X';
      
      switchPlayer('X');
      if (hasRowOrColConflict('X') || hasMajorOrMinorConflict('X')) {
        return heWon('X')
      }
      isTie()
    } else {
      square7.innerText = 'O';
      
      switchPlayer('O');
      if (hasRowOrColConflict('O') || hasMajorOrMinorConflict('O')) {
        return heWon('O')
      }
      isTie()
    }
  } else {
    console.log('Noo')
  }
});

var square8 = document.getElementById('8');
square8.addEventListener("click", function () {
  if (square8.textContent === '') {
    if (XPlayer) {
      square8.innerText = 'X';
      
      switchPlayer('X');
      if (hasRowOrColConflict('X') || hasMajorOrMinorConflict('X')) {
        return heWon('X')
      }
      isTie()
    } else {
      square8.innerText = 'O';
      
      switchPlayer('O');
      if (hasRowOrColConflict('O') || hasMajorOrMinorConflict('O')) {
        return heWon('O')
      }
      isTie()
    }
  } else {
    console.log('Noo')
  }
});

var square9 = document.getElementById('9');
square9.addEventListener("click", function () {
  if (square9.textContent === '') {
    if (XPlayer) {
      square9.innerText = 'X';

      switchPlayer('X');
      if (hasRowOrColConflict('X') || hasMajorOrMinorConflict('X')) {
        return heWon('X')
      }
      isTie()
    } else {
      square9.innerText = 'O';

      switchPlayer('X');
      if (hasRowOrColConflict('O') || hasMajorOrMinorConflict('O')) {
        return heWon('O')
      }
      isTie()
    }
  } else {
    console.log('Noo')
  }
});

reset.addEventListener('click', () => {
  XPlayer = true;
  OPlayer = false;
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].textContent = '';
    counter = 0;
  }
})


// function will be invoked after 'X' play or 'O'
// check if it has row || col conflict 
// return boolean

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
  document.getElementById('won').innerHTML = `<p>${player} Won!</p>`
}

// Switch players
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