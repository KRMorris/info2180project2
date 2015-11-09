var emptyX = 300;
var emptyY = 300;
var puzzlepieces = [];


window.onload = function() {
  createPuzzle();
  $("shufflebutton").observe("click", shuffle);
};


var createPuzzle = function() {
  puzzlepieces = $$('#puzzlearea div');
  var  l = 0;
  var t = 3;
  for (var n = 0; n < puzzlepieces.length; n++) {
    for (var i = 0; i <= t; i++) {
      puzzlepieces[n].addClassName("puzzlepiece");
      puzzlepieces[n].style.top = 100 * l + "px";
      puzzlepieces[n].style.left = 100 * i  + "px";
      puzzlepieces[n].style.backgroundPosition = -i * 100 + "px " + l * -100 + "px";
      puzzlepieces[n].observe("click", movePuzzlePiece);
      puzzlepieces[n].observe("mouseover", hover);
      n++;
    }
    l++;
    if (l > 2) {
      t = 2;
    }
    n--;
  }
} 

//hover over tile if its next to empty tile 
//highlight red
//underline green
var hover = function(event) {
  if (isNextToBlank(this.style.left, this.style.top)) {
    this.addClassName("movablepiece");
  } else if (this.hasClassName("movablepiece")) {
    this.removeClassName("movablepiece");
  }
}


 var move = function(tile) {
  if (isNextToBlank(tile.style.left, tile.style.top)) {
    var tempX = tile.style.left;
    var tempY = tile.style.top;
    tile.style.left = emptyX + "px";
    tile.style.top = emptyY + "px";
    emptyX = parseInt(tempX);
    emptyY = parseInt(tempY);
  }
}


var movePuzzlePiece = function(event) {
  move(this);
}


function shuffle() {
  var temp = [];
  for (var n = 0; n < 200; n++) {
    for (var l = 0; l < puzzlepieces.length; l++) {
      if (isNextToBlank(puzzlepieces[l].style.left, puzzlepieces[l].style.top)) {
        temp.push(puzzlepieces[l]);
      }
    }
    move(temp[Math.floor(Math.random() * temp.length)]);
    temp = [];
  }
}

//check if puzzle piece is next to empty tile
var isNextToBlank = function(x, y) {
  if (Math.abs(emptyY - parseInt(y)) == 100) {
    if (Math.abs(emptyX - parseInt(x)) == 0) {
      return true;
    }
  } else if (Math.abs(emptyX - parseInt(x)) == 100) {
    if (Math.abs(emptyY - parseInt(y)) == 0) {
      return true;
    }
  }
  return false;
}
