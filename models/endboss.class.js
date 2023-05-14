class Endboss extends MovableObject {

    height = 1217 / 5;
    width = 1045 / 5;
    y = 190;
    x = 2500;
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
    alertTriggered = false;
    maxHealth = 100;
    health = 100;
    hit = false;
    dead = false;
    bossArea = false;
    targetX;
    targetY;
    patternStyle = 'idle';
    bossAttack = false;
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
        bossPatternInterval = setInterval(() => {
            this.pattern();
            this.setPatternStyle();
        }, 100);
    }

    setPatternStyle() {
        if (this.health <= 0) {
            this.patternStyle = 'dead';
        } else if (this.hit) {
            this.patternStyle = 'hurt';
        } else if (this.alertTriggered) {
            this.patternStyle = 'triggered';
        } else if (this.bossAttack) {
            this.patternStyle = 'attack';
        };
    }

    idlePattern() {
        this.playAnimation(this.IMAGES_WALKING);
        this.move();
    }
    pattern() {
        switch (this.patternStyle) {
            case 'idle':
                this.idlePattern();

                break;
            case 'triggered':
                this.alertPattern();

                break;
            case 'hurt':
                this.hurtPattern();
                break;
            case 'attack':
                this.endbossAttackingPattern();
                break;
            case 'dead':
                this.deadPattern();
                break;

            case 'targetCharacter':
                this.targetCharacterPattern();
                break;
            default:
                break;
        }
    }

    deadPattern() {
        this.speed = 0;
        this.playAnimation(this.IMAGES_DEAD);
    }

    endbossAttackingPattern() {
        this.speed = 0;
        this.playAnimation(this.IMAGES_ATTCK);
        this.bossAttack = false;
        setTimeout(() => {
            this.patternStyle = 'targetCharacter';

        }, this.IMAGES_ATTCK.length * 200);
    }

    alertPattern() {
        this.speed = 0;
        this.playAnimation(this.IMAGES_ALERT);
        this.otherDirection = false;
        this.alertTriggered = false;
        setTimeout(() => {
            this.patternStyle = 'targetCharacter';

        }, this.IMAGES_ALERT.length * 150);


    }

    hurtPattern() {
        this.speed = 0;
        this.playAnimation(this.IMAGES_HURT);

        setTimeout(() => {
            this.patternStyle = 'targetCharacter';

        }, this.IMAGES_HURT.length * 200);
        this.hit = false;
    }

    targetCharacterPattern() {
        this.speed = 10; // Geschwindigkeit, mit der der Boss dem Charakter folgt
        this.x += this.speed * this.direction;

        if (this.x < this.targetX) {
            this.direction = 1;
            this.otherDirection = true;
        } else {
            this.direction = -1;
            this.otherDirection = false;
        }
        this.playAnimation(this.IMAGES_WALKING);

    }

    move() {
        this.x += this.speed * this.direction;
        if (this.direction === 1 && this.x >= this.initialX + this.moveDistance) {
            this.direction = -1;
            this.otherDirection = false;

        } else if (this.direction === -1 && this.x <= this.initialX - this.moveDistance) {
            this.direction = 1;

            this.otherDirection = true;

        }
    }


}