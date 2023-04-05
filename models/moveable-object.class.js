class MovableObject {
    x = 120;
    y = 220;
    img;
    height = 230;
    width = 100;
    imageCache = {}
    currentImage = 0;
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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawHitbox(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.x, this.y + this.offset.y,(this.x + this.width - this.offset.width) - (this.x + this.offset.x),(this.y + this.height - this.offset.height) - (this.y + this.offset.y));
            ctx.stroke();
        }
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image()
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
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
        }
    }

    isDead(){
        return this.energy == 0;
    }

}