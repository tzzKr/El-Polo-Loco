class PowerUpObject extends MovableObject{

    height = 100/1.5;
    width = 100/1.5;
    y = 330;

    offset = {
        x: 0, //left
        y: 0, //up
        width: 0, //right
        height: 0, //down
      }

      constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
      }
}