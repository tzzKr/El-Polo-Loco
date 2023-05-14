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
    maxEnergy = 100;
    coins = 0;
    maxCoins = 11;
    bottles = 0;
    maxBottles = 5;
    lasthit = 0;
    hurt_sound = new Audio('audio/hurt.mp3');
    damage = 2;
    

    applyGravity() {
        gravityInterval = setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 220;

        }
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
        return this.x + this.width - this.offset.width > mo.x + mo.offset.x &&
            this.y + this.height - this.offset.height > mo.y + mo.offset.y &&
            this.x + this.offset.x < mo.x + mo.width - mo.offset.x &&
            this.y + this.offset.y < mo.y + mo.height - mo.offset.y;
    }

    isCollidingTop(mo) {
        if (this.isColliding(mo) && this.isAboveGround()) {
            return true;
        }
    }





    hit() {
        this.hurt_sound.currentTime = 0.35;
        this.energy -= this.damage;
        if (this.energy < 0) {
            this.energy = 0
        } else {
            this.lasthit = new Date().getTime();
        }
        this.hurt_sound.play();
    }


    isDead() {
        if (this.energy == 0) {
            return true;
        } else {
            return false;
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lasthit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    collectCoin() {
        this.coins++;

    };

    collectBottle() {
        this.bottles++;

    };
}