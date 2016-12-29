var colors = generateRandomColors (6);



var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
  var square = squares[i];
  //add initial colors to squares
  square.style.background = colors[i];

  //add click listeners to square
  square.addEventListener("click", function(){
    //grab color of cliked square
    var clickedColor = this.style.background;
    console.log(clickedColor, pickedColor);
    //compare color to pciker
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      // messageDisplay.style.color = "green";
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "TRY AGAIN!";
    }

  });
}

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
