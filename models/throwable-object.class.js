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
    throwBottle = new Audio('audio/Throw.mp3');
    speedX = 10;
    bottleDestroyed = false;
    destroyedImagesCount = this.IMAGES_DESTROYED.length;
    destroyedImagesPlayed = 0;

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
        this.throwBottle.playbackRate = 1.5;
        this.throwBottle.play();
        this.animate();
    }

    animate() {
        this.playAnimation(this.IMAGES);
        this.x += this.speedX;
        if (this.bottleDestroyed) {
            this.animateSplash();
        } else {
            requestAnimationFrame(() => this.animate());
        }
    }

    animateSplash() {
        if (this.destroyedImagesPlayed >= this.destroyedImagesCount) {
        } else {
            this.playAnimation(this.IMAGES_DESTROYED);
            setTimeout(() => {
                this.animateSplash();
            }, 500/5);
        }
    }


    bottleHit() {
        if (this.bottleDestroyed) {
            this.playAnimation(this.IMAGES_DESTROYED);
        }
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

