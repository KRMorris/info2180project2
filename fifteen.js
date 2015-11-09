var puzzle = [];
window.onload = function(){
    createPuzzle();
    document.getElementById("shufflebutton").onclick = shuffle;
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


 function giveCoordinates(array){
    //This is how I make a random number 1 ~ 15
    
    var arr = []
      while(arr.length < 15){
      var randomnumber=Math.ceil(Math.random()*15)
      var found=false;
      for(var i=0;i<arr.length;i++){
    if(arr[i]==randomnumber){found=true;break}
      }
      if(!found)arr[arr.length]=randomnumber;
    }

    array[arr[14]-1].style.left= '0px';
    array[arr[14]-1].style.top='0px';    
    array[arr[13]-1].style.left= '100px';
    array[arr[13]-1].style.top='0px';
    array[arr[12]-1].style.left= '200px';
    array[arr[12]-1].style.top='0px';
    array[arr[11]-1].style.left= '300px';
    array[arr[11]-1].style.top='0px';
    array[arr[10]-1].style.left= '0px';
    array[arr[10]-1].style.top='100px';
    array[arr[9]-1].style.left= '100px';
    array[arr[9]-1].style.top='100px';
    array[arr[8]-1].style.left= '200px';
    array[arr[8]-1].style.top='100px';
    array[arr[7]-1].style.left= '300px';
    array[arr[7]-1].style.top='100px';
    array[arr[6]-1].style.left= '0px';
    array[arr[6]-1].style.top='200px';
    array[arr[5]-1].style.left= '100px';
    array[arr[5]-1].style.top='200px';
    array[arr[4]-1].style.left= '200px';
    array[arr[4]-1].style.top='200px';
    array[arr[3]-1].style.left= '300px';
    array[arr[3]-1].style.top='200px';
    array[arr[2]-1].style.left= '0px';
    array[arr[2]-1].style.top='300px';
    array[arr[1]-1].style.left= '100px';
    array[arr[1]-1].style.top='300px';
    array[arr[0]-1].style.left= '200px';
    array[arr[0]-1].style.top='300px';
    
    }
