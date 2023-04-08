class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];

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

    checkCollisions(){
        this.level.enemies.forEach((enemy) => {

            if (this.character.isColliding(enemy)) {
                this.character.hit();
                  this.statusBar.setPercentage(this.character.energy)
            }
        });
    };  

    checkThrowObjects() {
        
            if (this.keyboard.K) {
                let bottle = new ThrowableObject(this.character.x, this.character.y + 50)
                this.throwableObjects.push(bottle)
            }
        
        
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects)
        this.addObjectsToMap(this.level.enemies)
        this.addObjectsToMap(this.level.clouds)
        this.addObjectsToMap(this.throwableObjects)
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        //-------------Space for fixed Objects-----------------
        this.addToMap(this.statusBar);
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