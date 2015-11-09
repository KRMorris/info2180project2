var puzzle = [];
window.onload = function(){
    createPuzzle();
    $("shufflebutton").observe("click", shuffle);
};
var createPuzzle = function(){
  var puzzle = $$('#puzzlearea div');
  var l = 3;
  var n = 0;
  
  for (var i = 0; i < puzzle.length; i++) {
    for (var x = 0; x <= l; x++) {
      puzzle[i].addClassName("puzzlepiece");
      puzzle[i].style.top = 100 * n + "px";
      puzzle[i].style.left = 100 * x  + "px";
      puzzle[i].style.backgroundPosition = -x * 100 + "px " + n * -100 + "px";
      puzzle[i].observe("click", movePuzzlePiece);
      puzzle[i].observe("mouseover", hover);
      i++;
    }
    n++;
    if (n > 2) {
      l = 2;
    }
    i--;
  }
} 
var emptyY = 300;
var emptyX = 300;


var isNextToBlank = function(x,y){
     if(Math.abs(emptyY - parseInt(y))== 100){
        if (Math.abs(emptyX - parseInt(x)) == 0){
            return true;
        }
    }
    else if (Math.abs(emptyX - parseInt(x)) == 100) {
        if(Math.abs(emptyY - parseInt(y)) == 0){
            return true;
        }
    } 
    //else{
        return false;
   // }
} 
//hover over tile if its next to empty tile 
var hover = function(h){
    if(isNextToBlank(this.style.left, this.style.top)){
        this.addClassName("movablepiece");
    }
    else if(this.hasClassName("movablepiece")){
        this.removeClassName("movablepiece");
    }
} 

//m rep puzzle piece
var move = function(m){
    if(isNextToBlank(m.style.left, m.style.top)){
        var x = m.style.left;
        var y = m.style.top;
        
        m.style.left = emptyX + "px";
        m.style.top = emptyY + "px";
        emptyX = parseInt(x);
        emptyY = parseInt(y);
    }
}
var movePuzzlePiece = function(h){
    move(this);
}


function shuffle() {
  var temp = [];
  for (var i = 0; i < 200; i++) {
    for (var n = 0; n < puzzle.length; n++) {
      if (isNextToBlank(puzzle[n].style.left, puzzle[n].style.top)) {
        temp.push(puzzle[n]);
      }
    }
    move(temp[Math.floor(Math.random() * temp.length)]);
    temp = [];
  }
}