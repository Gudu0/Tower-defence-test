//Variables
const myCanvas = document.getElementById("canvasid");
const ctx = myCanvas.getContext("2d");
let rx = 0; //Rectangle X
let ry = 0; //Rectangle Y
let singleCheck = 0; //Going to use this for something I only want to run once.
const extra1 = document.getElementById("ex1");
const extra2 = document.getElementById("ex2");
const extra3 = document.getElementById("ex3");
let mx = 0;//Mouse X
let my = 0;//mouse Y
let tx = myCanvas.width / 2;
let ty = myCanvas.height / 2;
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
  mx = event.pageX;
  my = event.pageY;
  showCoords();
}

function textStuff(){
  extra1.innerHTML = " Width: " + myCanvas.width + ", Height " + myCanvas.height;
}

function tower(){
  ctx.fillStyle = "#f26516";
  ctx.beginPath();
  ctx.rect(tx, ty, 10, 10);
  ttma = atan2(my - ty, mx - tx);
  ctx.translate(tx, tx);
  ctx.rotate(ttma);
  ctx.fill();
}

function rectangle(){ //rectangle that moves across the screen
  ctx.beginPath();
  ctx.rect(rx,ry,50,50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  if(rx !== myCanvas.width){
    rx+=2;
  } else if(rx >= myCanvas.width){
    rx-= myCanvas.width;
    rx-=20;
  }
}

function showCoords() {
  let coor = "X coords: " + mx + ", Y coords: " + my;
  document.getElementById("posx").innerHTML = coor;
}

function clearCoor() {
  document.getElementById("posx").innerHTML = "";
}

function background(){ //Drawing the background.
  ctx.beginPath();
  ctx.rect(0,0, myCanvas.width, myCanvas.height);
  ctx.fillStyle = "#474747";
  ctx.fill();
}
