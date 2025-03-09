//Variables
const myCanvas = document.getElementById("canvasid");
const ctx = myCanvas.getContext("2d");
document.addEventListener("mousemove", getmospos, false);
const pageX = document.getElementById("posx");
const pageY = document.getElementById("posy");
//Draw Loop
setInterval(draw, 20);

function draw(){
  getmospos();
}
//Other?

//Functions
function getmospos(){
  pageX.innerText = "X: "+event.pageX;
  pageY.innerText = "Y: "+event.pageY;
}
