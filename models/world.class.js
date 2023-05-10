class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarHealth = new StatusBarHealth();
    statusBarBottle = new StatusBarBottle();
    statusBarCoins = new StatusBarCoins();
    EndbossStatus = new StatusBarEndbossHealth();
    throwableObjects = [];
    collectingCoin = new Audio('audio/Coin.mp3');
    collectingBottle = new Audio('audio/CollectBottle.mp3');
    collectingPowerUp = new Audio('audio/Coin.mp3');
    oldValue;
    newValue;
    bottleThrew = false;
    hitEndboss = false;
    endbossDead = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }
    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();

        }, 100);
    }

    checkCollisions() {

        this.detectEnemyCollision();
        this.detectCoinCollision();
        this.detectBottleCollision();
        this.detectPowerUpCollision();
        this.detectBottleHit();
        this.detectEndGame();
        this.gameOverScreen();
        this.characterHitEndboss();
        this.characterNearEndboss();
    };
    detectBottleHit() {
        this.throwableObjects.forEach((bottle) => {

            this.bottleHitEnemy(bottle);
            this.bottleHitEndboss(bottle);

        });

    };

    bottleHitEndboss(bottle) {
        this.level.endboss.forEach((endboss) => {

            if (bottle.isColliding(endboss) && !this.hitEndboss) {
                this.hitEndboss = true;
                bottle.bottleDestroyed = true;
                bottle.speedY = 0;
                bottle.speedX = 0;
                endboss.hit = true;

                setTimeout(() => {
                    this.deleteAfterCollected(this.throwableObjects, bottle);
                    this.endbossHit(endboss);
                }, 200);

            }

        });
    }

    endbossHit(endboss) {
        if (!endboss.dead) {
            endboss.health -= 20;
            if (endboss.health <= 0) {
                endboss.dead = true;
                this.endbossDead = true;
                setTimeout(() => {
                this.deleteAfterCollected(this.level.endboss, endboss);
                    
                }, 5000);
            }
            this.EndbossStatus.setPercentage(endboss.health, endboss.maxHealth);
        }
        setTimeout(() => {
            endboss.hit = false;

        }, 200);

    }



    characterNearEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.x > (endboss.x - 500) && !(endboss.bossArea)) {
                endboss.alertTriggered = true;
                endboss.bossArea = true;
            }
            endboss.targetX = this.character.x;
            endboss.targetY = this.character.y;
        });
         
    }
    characterHitEndboss() {
        this.character.damage = 20;
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss) && !endboss.hit && !endboss.dead) {
                this.character.hit();
                endboss.bossAttack = true;
                this.character.characterHurt = true;
                this.statusBarHealth.setPercentage(this.character.energy, this.character.maxEnergy)
            }
        });
        this.character.damage = 2;

    }

    bottleHitEnemy(bottle) {
        this.level.enemies.forEach((enemy) => {
            if (bottle.isColliding(enemy) && !enemy.hit) {
                enemy.hit = true;
                enemy.dead = true;
                bottle.bottleDestroyed = true;
                bottle.speedY = 0;
                bottle.speedX = 0;
                setTimeout(() => {
                    this.deleteAfterCollected(this.throwableObjects, bottle);
                    this.deleteAfterCollected(this.level.enemies, enemy);
                }, 500);
            }
        });
    };

    detectEnemyCollision() {
        this.setValueFalling();
        this.level.enemies.forEach((enemy) => {
            if (this.character.isCollidingTop(enemy) && this.isValueDecreasing(this.oldValue, this.newValue)) {
                this.character.jump();
                enemy.dead = true;
                enemy.chicken_dead_sound.play();
                setTimeout(() => {
                    this.deleteAfterCollected(this.level.enemies, enemy)
                }, 500);
            } else if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarHealth.setPercentage(this.character.energy, this.character.maxEnergy)
            }
        });
    };

    detectCoinCollision() {
        this.level.coins.forEach((coin) => {

            if (this.character.isColliding(coin)) {
                this.collectingCoin.currentTime = 0;
                this.character.collectCoin();
                this.deleteAfterCollected(this.level.coins, coin);
                this.statusBarCoins.setPercentage(this.character.coins, this.character.maxCoins);
                this.collectingCoin.play();
            }
        });
    };

    detectBottleCollision() {
        this.level.bottles.forEach((bottles) => {

            if (this.character.isColliding(bottles)) {
                this.collectingBottle.currentTime = 0;
                this.character.collectBottle();
                this.deleteAfterCollected(this.level.bottles, bottles)

                this.statusBarBottle.setPercentage(this.character.bottles, this.character.maxBottles)
                this.collectingBottle.play();
            }
        });
    };

    detectPowerUpCollision() {
        this.level.powerUps.forEach((powerUp) => {

            if (this.character.isColliding(powerUp)) {
                this.collectingBottle.currentTime = 0;
                this.deleteAfterCollected(this.level.powerUps, powerUp)
                this.character.energy += 20;
                this.statusBarHealth.setPercentage(this.character.energy, 100)
                this.collectingBottle.play();
            }
        });
    };

    deleteAfterCollected(object, item) {
        object.splice(object.indexOf(item), 1);
    }

    detectEndGame() {
        if (this.character.characterDead || this.endbossDead) {
            this.gameOver = true;
        }
            
    }

    gameOverScreen() {
        if (!this.gameOver) {
            return
        }
        if (this.character.characterDead) {
            console.log('character dead :>> ', this.character.characterDead);
        }
        if (this.endbossDead) {
            console.log('endbossDead :>> ', this.endbossDead);
        }
    }

    checkThrowObjects() {
        if (this.keyboard.K && this.character.bottles > 0 && !this.bottleThrew) {
            this.bottleThrew = true;

            this.hitEndboss = false;
            
            let bottle = new ThrowableObject(this.character.x, this.character.y + 50);
            this.throwableObjects.push(bottle);
            this.character.bottles--;
            this.statusBarBottle.setPercentage(this.character.bottles, this.character.maxBottles);
            setTimeout(() => {
                this.bottleThrew = false;
            }, 500);
        };
    };

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.powerUps);
        this.addObjectsToMap(this.level.endboss);

        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        //-------------Space for fixed Objects-----------------

        this.addToMap(this.EndbossStatus);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoins);
        //--------------End for fixes Objects--------------
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        //draw wird wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawHitbox(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1)
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;

        this.ctx.restore();
    }

    isValueDecreasing(oldValue, newValue) {
        return oldValue < newValue;
    }

    setValueFalling() {
        this.newValue = this.character.y;
        setTimeout(() => {
            this.oldValue = this.character.y;
        }, 500);
    }
}