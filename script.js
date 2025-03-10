//Variables
const myCanvas = document.getElementById("canvasid");
const ctx = myCanvas.getContext("2d");
let rx = 0;
let ry = 0;

//Draw Loop
setInterval(draw, 20);

function draw(){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
 //background();
  rectangle();
}

//Other?

//Functions
function rectangle(){
  ctx.beginPath();
  ctx.rect(rx,ry,25,25);
  ctx.fill();
  rx+=2;
  ry+=2;
}

function showCoords(event) {
  var x = event.pageX;
  var y = event.pageY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("posx").innerHTML = coor;
}

function clearCoor() {
  document.getElementById("posx").innerHTML = "X";
}

function background(){
  ctx.beginPath();
  ctx.rect(0,0, myCanvas.width, myCanvas.height);
  ctx.fillStyle = "#474747";
  ctx.fill();
}
