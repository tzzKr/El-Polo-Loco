class Cloud extends MovableObject {
    height = 300;
    width = 500;

    constructor(imagePath){
        super().loadImage(imagePath)

        this.x = 0 + Math.random() * 500;
        this.y = 10
        this.animate()
    }
    

    animate() {
        this.moveLeft();
    }

    
}