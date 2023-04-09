class ThrowableObject extends MovableObject {

    IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]
    IMAGES_DESTROYED = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',

    ]

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png')
        this.loadImages(this.IMAGES);
        this.loadImages(this.IMAGES_DESTROYED);

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
            this.hitGround()

        }, 1000 / 25);
    }

    hitGround() {
        console.log('this.y :>> ', this.y);
        if (this.y == 300) {
            this.speedY = 0;
            this.playAnimation(this.IMAGES_DESTROYED);
            this.y = 300;

        }
    }


}

