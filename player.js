class player{
  constructor(posX, posY, radius){
    this.posX = posX
    this.posY = posY

    this.velX = 0
    this.velY = 0

    this.radius = radius

    this.alive = true
  }

  movePlayer(){
    this.posY -= this.velY

    if(this.posY > 385){
      this.posY = 385
    }

    if(this.posY >= 385){
      this.velY = 0
    }
  }

  drawPlayer(){
    fill(255,255,0)
    ellipse(this.posX,this.posY,radius,radius)
  }
}
