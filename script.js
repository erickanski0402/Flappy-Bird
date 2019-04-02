var keyState = {};
window.addEventListener('keydown', function(e){
  keyState[e.keyCode || e.which] = true;
}, true);
window.addEventListener('keyup', function(e){
  keyState[e.keyCode || e.which] = false;
}, true);

var px = 200
var py = 390
var vx = 0
var vy = 0
// var ax = 0
// var ay = 0

let radius = 20

function setup(){
  createCanvas(400,400)
}

function draw(){
  if(keyState[38] && py >= 390){
    console.log("up")
    //up arrow
    vy += 10
  }else{
    vy -= 1
  }

  px += vx
  py -= vy

  if(py > 391){
    py = 390
  }

  if(py >= 390){
    vy = 0
  }

  console.log("X Velocity: " + vx + "   Y Velocity: " + vy)
  background(200)
  ellipse(px,py,radius,radius)
}
