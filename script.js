//Variables
const myCanvas = document.getElementById("canvasid");
const ctx = myCanvas.getContext("2d");
let rx = 0;
let ry = 0;
//Draw Loop
setInterval(draw, 20);

function draw(){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  rectangle()
}

//Other?

//Functions
function rectangle(){
  ctx.beginPath();
  ctx.rect(rx,ry,50,50);
  ctx.fill()
  rx+=2;
}
