//Variables
const myCanvas = document.getElementById("canvasid");
const ctx = myCanvas.getContext("2d");
let rx = 0;
let ry = 0;
//Draw Loop
myCanvas.onload = setInterval(draw, 20);

function draw(){
  ctx.beginPath();
  ctx.clearRect(0, 0, ctx.width, ctx.height);
  rectangle()
}

//Other?

//Functions
function rectangle(){
  rect(rx,ry,50,50);
  rx+=50;
}
