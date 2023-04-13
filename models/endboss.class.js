class Endboss extends MovableObject {

    height = 1217 / 5;
    width = 1045 / 5;
    y = 190;
    x = 200;
    speed = 10;

    offset = {
        x: 20,
        y: 40,
        width: 10,
        height: 10,
    }
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',

    ];

    IMAGES_ATTCK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];
    maxHealth = 100;
    health = 100;
    hit = false;
    dead = false;
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTCK);
        this.loadImages(this.IMAGES_ALERT);
        this.animate()
        this.initialX = this.x; // Speichert die anfängliche X-Position des Bosses
        this.moveDistance = 50; // Die maximale Distanz, die der Boss in jede Richtung von der Startposition aus laufen soll
        this.direction = 1; // 1 bedeutet nach rechts, -1 bedeutet nach links
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);

            if (this.hit) {
                setTimeout(() => {
                    this.playAnimation(this.IMAGES_HURT);

                }, 200);
            }

            this.move();
            
        }, 200);
    }

    idlePattern() {
        this.playAnimation(this.IMAGES_WALKING);
        this.move();
    }



    move() {
        this.x += this.speed * this.direction;
        if (this.direction === 1 && this.x >= this.initialX + this.moveDistance) {
            this.direction = -1;
        } else if (this.direction === -1 && this.x <= this.initialX - this.moveDistance) {
            this.direction = 1;
        }
    }

    
}