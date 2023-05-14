class DrawableObject {
    img;
    imageCache = {}
    currentImage = 0;
    x = 120;
    y = 220;
    height = 230;
    width = 100;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image()
            img.src = path;
            this.imageCache[path] = img;
        });

    }

    drawHitbox(ctx) {
        

        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof BottleObject || this instanceof CoinObject || this instanceof PowerUpObject || this instanceof ThrowableObject) {
            // ctx.beginPath();
            // ctx.lineWidth = '0';
            // ctx.strokeStyle = '';
            // ctx.rect(this.x + this.offset.x, this.y + this.offset.y,(this.x + this.width - this.offset.width) - (this.x + this.offset.x),(this.y + this.height - this.offset.height) - (this.y + this.offset.y));
            ctx.stroke();
        }
    }

}