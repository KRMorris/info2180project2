var emptyX = 300;
var emptyY = 300;
var puzzlepieces = [];
var counter =0; // initializing counte

window.onload = function() {
  createPuzzle();
  $("shufflebutton").observe("click", shuffle);
  
  //adding counter to the html page by using innerHTML
    var cr = document.createElement('div');
    cr.id = 'gCounter';
    $('overall').appendChild(cr);
    $('gCounter').style.height = "20px";
    $('gCounter').style.background = "rgba(176,196,222,0.6)";
    $('gCounter').style.marginTop = "10px";
    $('gCounter').style.padding = "5px";
    $('gCounter').style.border = "double black";
    $('gCounter').innerHTML= "Counter: ";
    $('gCounter').innerHTML= "Counter: " + counter.toString();
    
    //adding timer to the html page by suing innerHTML
    var ti = document.createElement('div');
    ti.id = 'gTimer';
    $('overall').appendChild(ti);
    $('gTimer').style.height = "20px";
    $('gTimer').style.background = "rgba(176,196,222,0.6)";
    $('gTimer').style.marginTop = "5px";
    $('gTimer').style.padding = "5px";
    $('gTimer').style.border = "double black";
    $('gTimer').innerHTML= "Counter: ";
    $('gTimer').innerHTML= " Timer:  <span id='seconds'>00</span>";
    
  
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
}; 


var hover = function(event) {
  if (isNextToBlank(this.style.left, this.style.top)) {
    this.addClassName("movablepiece");
  } else if (this.hasClassName("movablepiece")) {
    this.removeClassName("movablepiece");
  }
};


 var move = function(tile) {
  if (isNextToBlank(tile.style.left, tile.style.top)) {
    var tempX = tile.style.left;
    var tempY = tile.style.top;
    tile.style.left = emptyX + "px";
    tile.style.top = emptyY + "px";
    emptyX = parseInt(tempX);
    emptyY = parseInt(tempY);
    counter++;
    //window.alert("left: "+this.style.left+", top: "+this.style.top+"");
    $('gCounter').innerHTML= "Counter: " + counter.toString(); 
  }
};


var movePuzzlePiece = function(event) {
  move(this);
};


function shuffle() {
  stopTimer();
    
   
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
  
 counter =0;  //reset
    $('gCounter').innerHTML= "Counter: " + counter.toString(); 

}


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
};


    //Timer
    var sec = 0,
      timeoutHandler;

    function pad(val) {
    return val > 9 ? val : "0" + val;
    }

    function pausePad() {
    clearTimeout( timeoutHandler );
    }

    function resumePad() {
    pausePad();
    runPad();
    }

    function resetPad() {
    sec = 0;
    resumePad();
    }

    function runPad() {
    timeoutHandler = setInterval(function() {
        document.getElementById("seconds").innerHTML = pad(++sec);
        document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    },1000);
    
    }
    runPad();
        
    function stopTimer () {
        
         $('gTimer').innerHTML= "  Timer:  <span id='seconds'>00</span>";
         resetPad();
    
        }
    
