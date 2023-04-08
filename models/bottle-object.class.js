class BottleObject extends MovableObject {

    height = 100;
    width = 100;
    y = 330;


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}