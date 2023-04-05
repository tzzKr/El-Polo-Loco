class MovableObject extends DrawableObject {
   
    
    speed = 0.25;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }
    energy = 100;
    lasthit= 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 220;
    }
    
    

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 15;
    }

    isColliding(mo) {
        return this.x + this.width - this.offset.x > mo.x + mo.offset.x &&    //   right > left =>   Collision in front
        this.y + this.height - this.offset.y > mo.y + mo.offset.y &&     //    top > bottom =>   Collision bottom
        this.x + this.offset.x < mo.x + mo.width - mo.offset.x &&       //     left > right =>   Collision behind
        this.y + this.offset.y < mo.y + mo.height - mo.offset.y;
    }

    hit(){
        this.energy -= 2;
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lasthit = new Date().getTime();
        }
    }
    

    isDead(){
        return this.energy == 0;
    }

    isHurt() {
      let timepassed = new Date().getTime() - this.lasthit;
      timepassed = timepassed / 1000; 
      return timepassed < 1;
    }
}