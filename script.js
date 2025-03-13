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
let towerSize = 20; //tower size
let ttma; //tower to mouse angle.
  
//Draw Loop
setInterval(draw, 20); //Starting the draw loop.

function draw(){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //Clearing the canvas
  background();
  rectangle();
  wtf();
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
//from chatgpt
function tower() {
    ctx.fillStyle = "#f26516";
    ctx.save();

    // Find angle from tower to mouse
    ttma = Math.atan2(mouseY - towerY, mouseX - towerX);

    // Move to tower position and rotate
    ctx.translate(towerX, towerY);
    ctx.rotate(ttma + Math.PI / 2); // Adjust so one specific side faces the cursor

    // Draw the rectangle **centered on the tower**
    ctx.beginPath();
    ctx.fillRect(-towerSize / 2, -towerSize / 2, towerSize, towerSize);

    // Draw the **front-facing** stroke
    ctx.beginPath();
    ctx.moveTo(-towerSize / 2, -towerSize / 2); // Top-left corner
    ctx.lineTo(towerSize / 2, -towerSize / 2);  // Top-right corner
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black"; 
    ctx.stroke();

    ctx.restore();
}

function wtf(){ //made to figure out wtf is going on with the rotation of the tower.
  ctx.save();
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = "3";
  ctx.moveTo(towerX, towerY);
  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();
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
