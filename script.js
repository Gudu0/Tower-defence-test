//Variables
const myCanvas = document.getElementById("canvasid");
const ctx = myCanvas.getContext("2d");

//Draw Loop
//myCanvas.onload = setInterval(draw, 20);

function draw(){

}

//Other?

//Functions
function showCoords(event) {
  var x = event.pageX;
  var y = event.pageY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("posx").innerHTML = coor;
}

function clearCoor() {
  document.getElementById("posx").innerHTML = "";
}
