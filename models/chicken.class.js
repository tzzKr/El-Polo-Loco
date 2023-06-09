class Chicken extends MovableObject {

  height = 70;
  width = 70
  y = 350
  IMAGES_WALKING = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
  ];
  IMAGES_DEAD = [
    'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',

  ]

  hit = false;

  offset = {
    x: 0, //left
    y: 0,  //up
    width: 0, //right
    height: 0, //down
  }
  dead = false;

  constructor(x) {
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
    this.x = x;
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    this.speed = 1;
  }


  animate() {

    chickenWalkInterval = setInterval(() => {
      if (!pause) {
        this.moveLeft();
      }
    }, 1000 / 60);

    chickenStatusInterval = setInterval(() => {
      if (!pause) {
        if (!this.dead) {
          this.chickenWalk();
        } else {
          this.chickenDead();
        }
      }
    }, 200);


  }

  chickenDead() {
    this.playAnimation(this.IMAGES_DEAD);
    this.speed = 0;
  }

  chickenWalk() {
    this.playAnimation(this.IMAGES_WALKING);
  }

}