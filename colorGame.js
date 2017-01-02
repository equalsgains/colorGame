var numOfSquares = 6;
var colors = generateRandomColors (numOfSquares);



var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeneners
 for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if (this.textContent === "Easy"){
            numOfSquares = 3;
        } else {
            numOfSquares = 6;
        }
        reset();
    });
}
    
    for (var i = 0; i < squares.length; i++){
  var square = squares[i];
  
 

  //add click listeners to square
  square.addEventListener("click", function(){
    //grab color of cliked square
    var clickedColor = this.style.background;
    //compare color to pciker
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      // messageDisplay.style.color = "green";
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "TRY AGAIN!";
    }

  });
}
}



function reset(){
    //need to generate all new colors
  colors = generateRandomColors(numOfSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  //change colors of the squares in the page
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  //change colorDisplay to match pcked color
  for(var i = 0; i < squares.length; i++) {
      if (colors[i]){
        squares[i].style.display = "block";  
        squares[i].style.background = colors[i];

      } else {
          squares[i].style.display = "none";
      }
  }
  h1.style.background = "steelblue";
}

//easyBTN.addEventListener("click", function(){
//  hardBTN.classList.remove("selected");
//  easyBTN.classList.add("selected");
//  numOfSquares = 3;
//  colors = generateRandomColors(numOfSquares);
//  pickedColor = pickColor();
//  colorDisplay.textContent = pickedColor;
//  for (var i = 0; i < squares.length; i++) {
//    if(colors[i]){
//      squares[i].style.background = colors[i];
//    } else {
//      squares[i].style.display = "none";
//    }
//  }
//});
//
//hardBTN.addEventListener("click", function(){
//  easyBTN.classList.remove("selected");
//  hardBTN.classList.add("selected");
//  numOfSquares = 6;
//  colors = generateRandomColors(numOfSquares);
//  pickedColor = pickColor();
//  colorDisplay.textContent = pickedColor;
//  for (var i = 0; i < squares.length; i++) {
//
//      squares[i].style.background = colors[i];
//
//      squares[i].style.display = "block";
//    }
//
//});


resetButton.addEventListener("click", function(){
    reset();
});
colorDisplay.textContent = pickedColor;



function changeColors(color){
  //loop through all squares
  for(var i = 0; i < colors.length; i++){
    squares[i].style.background = color;
  }
  //change each color to match given color
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++){
    arr.push(randomColor())
    //get random color and push to array

  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256)
  //pick a "gree" from 0-255
  var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256)
  "rgb(r, g, b)"
  return "rgb(" + r + ", " + g + ", " + b + ")";

}
