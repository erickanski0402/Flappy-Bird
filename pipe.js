class pipe{
  constructor(starting_x, reset_point, thickness){
    this.posX = starting_x
    this.reset_point = reset_point

    this.thickness = thickness

    this.safeZonePoint = this.randomizeSafeZone()
    this.safeZoneThickness = 100
  }

  movePipe(){
    this.posX -= 3

    if(this.posX <= 0 - this.thickness){
      this.posX = reset_point

      this.safeZonePoint = this.randomizeSafeZone()
    }
  }

  drawPipe(){
    fill(200,0,0)
    rect(this.posX, 0, this.thickness, 399)
    fill(0,150,200)
    rect(this.posX, this.safeZonePoint, this.thickness, this.safeZoneThickness)
  }

  checkForCollision(player){
    let playerXRightEdge = player.posX// + player.radius
    let playerXLeftEdge = player.posX// - player.radius
    let playerYTopEdge = player.posY// - player.radius
    let playerYBottomEdge = player.posY// + player.radius

    // console.log(playerXEdge + "   " + this.posX)
    if(playerXRightEdge >= this.posX && playerXRightEdge <= this.posX + this.thickness ||
      playerXLeftEdge >= this.posX && playerXLeftEdge <= this.posX + this.thickness){

      if(playerYTopEdge > this.safeZonePoint && playerYBottomEdge < this.safeZonePoint + this.safeZoneThickness){
          console.log('safe')
          return false
      }

      console.log("colliding")
      return true
    }

    return false
  }

  randomizeSafeZone(){
    let val = Math.floor(Math.random() * (290 - 10 + 1)) + 10;
    console.log(val)
    return val
  }
}
