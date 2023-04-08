class ThrowableObject extends MovableObject {

    IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png')
        this.loadImages(this.IMAGES);

        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.throw()
    }

    throw() {

        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.playAnimation(this.IMAGES)
            this.x += 20;
        }, 1000 / 25);
   }

     
}

