class pipe{
  constructor(starting_x, reset_point, thickness){
    this.posX = starting_x
    this.reset_point = reset_point

    this.thickness = thickness

    this.safeZonePoint = 200//this.randomizeSafeZone()
    this.safeZoneThickness = 75
  }

  movePipe(){
    this.posX -= 1

    if(this.posX <= 0 - this.thickness){
      this.posX = reset_point

      // this.safeZonePoint = this.randomizeSafeZone()
    }
  }

  checkForCollision(playerX, playerY){

  }

  randomizeSafeZone(){
    return Math.floor(Math.random() * (10 - 340 + 1)) + 100;
  }
}
