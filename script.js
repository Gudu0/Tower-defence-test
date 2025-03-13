//Variables
window.addEventListener("resize", resizeCanvas);
const myCanvas = document.getElementById("canvasid");
const ctx = myCanvas.getContext("2d");
let rectangleX = 0; //Rectangle X
let rectangleY = 0; //Rectangle Y
const extra1 = document.getElementById("ex1");//extra p elements.
const extra2 = document.getElementById("ex2");
const extra3 = document.getElementById("ex3");
let mouseX; //Mouse X
let mouseY; //mouse Y
let towerX; //should be 500
let towerY; //should be 250
let towerSize = 20; //tower size
let ttma; //tower to mouse angle.

//Draw Loop
function draw(){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //Clearing the canvas
  background();
  rectangle();
  wtf();
  tower();
  textStuff();
  shop();
}

//Other?
resizeCanvas();// making the canvas be the right size.
setInterval(draw, 20); //Starting the draw loop.

//Functions
//from chatgpt
function mouseCords(event) {
    const rect = myCanvas.getBoundingClientRect(); // Get canvas position
    const scaleX = myCanvas.width / rect.width;   // Scale factor for width
    const scaleY = myCanvas.height / rect.height; // Scale factor for height

    mouseX = (event.clientX - rect.left) * scaleX; // Adjust for canvas scaling
    mouseY = (event.clientY - rect.top) * scaleY;
    showCoords();
}
//partly from chatgpt
function resizeCanvas() {
    const headerHeight = document.querySelector("header").offsetHeight;
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight - headerHeight;
    towerX = myCanvas.width / 2;
    towerY = myCanvas.height / 2;
}

function textStuff(){
  extra1.innerHTML = " Width: " + myCanvas.width + ", Height " + myCanvas.height;
}

//from chatgpt
function tower() {
    ctx.fillStyle = "#f26516";
    ctx.save();

    // Get the correct angle, adjusting for correct facing
    ttma = Math.atan2(mouseY - towerY, mouseX - towerX) + Math.PI / 2;

    // Move and rotate the canvas
    ctx.translate(towerX, towerY);
    ctx.rotate(ttma);

    // Draw the rectangle centered at (0,0)
    ctx.fillRect(-towerSize / 2, -towerSize / 2, towerSize, towerSize);

    // Stroke the **front-facing** edge
    ctx.beginPath();
    ctx.moveTo(-towerSize / 2, -towerSize / 2); // Top-left corner
    ctx.lineTo(towerSize / 2, -towerSize / 2);  // Top-right corner
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black"; 
    ctx.stroke();

    ctx.restore();
}

function wtf(){ //made to figure out wtf is going on with the rotation of the tower. //later gudu, its fixed.
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

function shop(){
  ctx.save();
  ctx.beginPath();
  ctx.rect(0,0, myCanvas.width / 5 + 20, myCanvas.height)
  ctx.fillStyle = "#ABB3B3";
  ctx.fill();
  ctx.restore();
}
