var keyState = {};
window.addEventListener('keydown', function(e){
  keyState[e.keyCode || e.which] = true;
}, true);
window.addEventListener('keyup', function(e){
  keyState[e.keyCode || e.which] = false;
}, true);

let radius = 20
let thickness = 50
let reset_point = 600 - thickness

function setup(){
  createCanvas(400,400)
  player = new player(100, 390)

  pipe_1 = new pipe(reset_point, reset_point, thickness)
  pipe_2 = new pipe(reset_point + 200, reset_point, thickness)
  pipe_3 = new pipe(reset_point + 400, reset_point, thickness)
}

function draw(){
  if(keyState[32] && player.velY <= 1){
    player.velY = 5
  }else{
    player.velY -= 0.25
  }

  player.movePlayerY()
  pipe_1.movePipe()
  pipe_2.movePipe()
  pipe_3.movePipe()

  background(0,150,200)
  noStroke()

  fill(200,0,0)
  rect(pipe_1.posX, 0, pipe_1.thickness, 399)
  fill(0,150,200)
  rect(pipe_1.posX, pipe_1.safeZonePoint, pipe_1.thickness, pipe_1.safeZoneThickness)

  fill(200,0,0)
  rect(pipe_2.posX, 0, pipe_2.thickness, 399)
  fill(0,150,200)
  rect(pipe_2.posX, pipe_2.safeZonePoint, pipe_2.thickness, pipe_2.safeZoneThickness)

  fill(200,0,0)
  rect(pipe_3.posX, 0, pipe_3.thickness, 399)
  fill(0,150,200)
  rect(pipe_3.posX, pipe_3.safeZonePoint, pipe_3.thickness, pipe_3.safeZoneThickness)

  fill(255,255,0)
  ellipse(player.posX,player.posY,radius,radius)
}
