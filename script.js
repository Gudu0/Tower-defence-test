//Variables
const myCanvas = document.getElementById("canvasid");
const ctx = myCanvas.getContext("2d");
let rectangleX = 0; //Rectangle X
let rectangleY = 0; //Rectangle Y
const extra1 = document.getElementById("ex1");//extra p elements.
const extra2 = document.getElementById("ex2");
const extra3 = document.getElementById("ex3");
let mouseX = 0; //Mouse X
let mouseY = 0; //mouse Y
let towerX = myCanvas.width / 2; //should be 500
let towerY = myCanvas.height / 2; //should be 250
let towerSize = 10; //tower size
let ttma; //tower to mouse angle.
  
//Draw Loop
setInterval(draw, 20); //Starting the draw loop.

function draw(){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //Clearing the canvas
  background();
  rectangle();
  tower();
  textStuff();
}

//Other?

//Functions
function mouseCords(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
  showCoords();
}

function textStuff(){
  extra1.innerHTML = " Width: " + myCanvas.width + ", Height " + myCanvas.height;
}

function tower(){
  ctx.fillStyle = "#f26516";
  ctx.beginPath();
  ctx.save();
  //ttma = Math.atan2(my - ty, mx - tx);
  ttma = Math.atan2(mouseY - towerY, mouseX - towerX); //finding the angle from tower to mouse //maybe work? its from google ai overview.
  ctx.translate(towerX, towerY); 
  ctx.rotate(ttma);
  //rect(-rectSize / 2, -rectSize / 2, rectSize, rectSize);
  ctx.rect(-towerSize / 2, -towerSize / 2, towerSize, towerSize);
  ctx.fill();
  ctx.restore();
}

function rectangle(){ //rectangle that moves across the screen
  ctx.beginPath();
  ctx.rect(rectangleX, rectangleY, 50, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  if(rectangleX !== myCanvas.width){
    rectangleX += 2;
  } else if(rectangleX >= myCanvas.width){
    rectangleX -= myCanvas.width;
    rectangleX -= 20;
  }
}

function showCoords() {
  document.getElementById("posx").innerHTML = " X coords: " + mouseX + ", Y coords: " + mouseY;
}

function background(){ //Drawing the background.
  ctx.beginPath();
  ctx.rect(0,0, myCanvas.width, myCanvas.height);
  ctx.fillStyle = "#474747";
  ctx.fill();
}
