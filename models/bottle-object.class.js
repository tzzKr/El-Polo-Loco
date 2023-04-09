class BottleObject extends MovableObject {

    height = 100;
    width = 100;
    y = 330;

    offset = {
        x: 37, //left
        y: 10, //up
        width: 14, //right
        height: 0, //down
      }


    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }
}