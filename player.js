class player{
  constructor(posX, posY){
    this.posX = posX
    this.posY = posY

    this.velX = 0
    this.velY = 0

    this.alive = true
  }

  movePlayerY(){
    this.posY -= this.velY

    if(this.posY > 385){
      this.posY = 385
    }

    if(this.posY >= 385){
      this.velY = 0
    }
  }
}
