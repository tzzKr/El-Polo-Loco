class Chicken extends MovableObject {

  height = 70;
  width = 70
  y = 350
  IMAGES_WALKING = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
  ];

  constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
    this.x = 500 + Math.random() * 1000;
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
    this.speed = 0.15 + Math.random() + 0.15;
  }


  animate() {

    setInterval(() => {
      this.moveLeft();
    }, 1000/60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);

    }, 200);


  }

}