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
        
    };  

    detectBottleHit() {
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (this.bottle.isColliding(enemy)) {
                    this.deleteAfterColelcted(this.throwableObjects, bottle);
                    this.deleteAfterColelcted(this.level.enemies, enemy);
                }
            });
        });
    };
        

    detectEnemyCollision() {
        this.level.enemies.forEach((enemy) => {

            if (this.character.isCollidingTop(enemy)) {
                this.character.jump();
                this.character.chickenDead();
                this.deleteAfterColelcted(this.level.enemies, enemy)
                
            }else if (this.character.isColliding(enemy)) {
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
                this.deleteAfterColelcted(this.level.coins, coin);
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
                this.deleteAfterColelcted(this.level.bottles, bottles)

                this.statusBarBottle.setPercentage(this.character.bottles, this.character.maxBottles)
                this.collectingBottle.play();
            }
        });
    };

    detectPowerUpCollision() {
        this.level.powerUps.forEach((powerUp) => {

            if (this.character.isColliding(powerUp)) {
                this.collectingBottle.currentTime = 0;
                this.character.collectBottle();
                this.deleteAfterColelcted(this.level.powerUps, powerUp)

                this.statusBarBottle.setPercentage(this.character.powerUps, this.character.maxPowerUps)
                // this.collectingBottle.play();
            }
        });
    };

    deleteAfterColelcted(object, object2) {
        object.splice(object.indexOf(object2), 1);
    }

    checkThrowObjects() {

        if (this.keyboard.K && this.character.bottles > 0) {

            let bottle = new ThrowableObject(this.character.x, this.character.y + 50);
            this.throwableObjects.push(bottle);
            this.character.bottles--;
            this.statusBarBottle.setPercentage(this.character.bottles, this.character.maxBottles);
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

}