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
  player = new player(100, 200, radius)

  pipes = []
  for(let i = 0; i < 3; i++){
    pipes[i] = new pipe(reset_point + (i * 200), reset_point, thickness)
  }
}

function draw(){
  background(0,150,200)
  noStroke()

  if(keyState[32] && player.velY <= 1){
    player.velY = 5
  }else{
    player.velY -= 0.25
  }

  for(let i = 0; i < 3; i++){
    pipes[i].movePipe()
    pipes[i].drawPipe()

    if(pipes[i].checkForCollision(player)){
      player.posY = 200
    }
  }

  player.movePlayer()
  player.drawPlayer()
}
