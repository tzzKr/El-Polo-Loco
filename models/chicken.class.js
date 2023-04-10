class Chicken extends MovableObject {

  height = 70;
  width = 70
  y = 350
  IMAGES_WALKING = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
  ];
  IMAGES_DEAD = 'img/3_enemies_chicken/chicken_normal/2_dead/dead.png';
  
  offset = {
    x: 0, //left
    y: 0,  //up
    width: 0, //right
    height: 0, //down
  }

  constructor() {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
    this.x = 500 + Math.random() * 1000;
    this.loadImages(this.IMAGES_WALKING);
    this.loadImage(this.IMAGES_DEAD);
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

  chickenDead(){
    setTimeout(() => {
    this.playAnimation(this.IMAGES_DEAD);
      
    }, 500);
  }
}