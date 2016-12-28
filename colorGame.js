var colors = ["rgb(255, 0, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 255, 255)",
              "rgb(0, 0, 255)",
              "rgb(255, 0, 255)",
              ];
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to square
  squares[i].addEventListener("click", function(){
    //grab color of cliked square
    var clickedColor = this.style.background;
    //compare color to pciker
    if (clickedColor === pickedColor) {
      alert("correct");
    } else {
      this.style.background = "#232323";
    }

  });
}
