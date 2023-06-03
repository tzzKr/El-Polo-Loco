class Character extends MovableObject {
  height = 200;
  width = 101;
  y = 220;
  // y = 170;
  speed = 5;

  offset = {
    x: 20, //left
    y: 70,  //up
    width: 10, //right
    height: 0, //down
  }

  IMAGES_WALKING = [
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-26.png',
  ]

  IMAGES_JUMPING = [
    'img/2_character_pepe/3_jump/J-31.png',
    'img/2_character_pepe/3_jump/J-32.png',
    'img/2_character_pepe/3_jump/J-32.png',
    'img/2_character_pepe/3_jump/J-33.png',
    'img/2_character_pepe/3_jump/J-33.png',
    'img/2_character_pepe/3_jump/J-34.png',
    'img/2_character_pepe/3_jump/J-34.png',
    'img/2_character_pepe/3_jump/J-35.png',
    'img/2_character_pepe/3_jump/J-35.png',
    'img/2_character_pepe/3_jump/J-36.png',
    'img/2_character_pepe/3_jump/J-36.png',
    'img/2_character_pepe/3_jump/J-37.png',
    'img/2_character_pepe/3_jump/J-37.png',
    'img/2_character_pepe/3_jump/J-38.png',
    'img/2_character_pepe/3_jump/J-38.png',
    'img/2_character_pepe/3_jump/J-39.png',
  ]

  IMAGES_IDLE = [
    'img/2_character_pepe/1_idle/idle/I-1.png',
    'img/2_character_pepe/1_idle/idle/I-2.png',
    'img/2_character_pepe/1_idle/idle/I-3.png',
    'img/2_character_pepe/1_idle/idle/I-4.png',
    'img/2_character_pepe/1_idle/idle/I-5.png',
    'img/2_character_pepe/1_idle/idle/I-6.png',
    'img/2_character_pepe/1_idle/idle/I-7.png',
    'img/2_character_pepe/1_idle/idle/I-8.png',
    'img/2_character_pepe/1_idle/idle/I-9.png',
    'img/2_character_pepe/1_idle/idle/I-10.png',
  ]

  IMAGES_SLEEP = [
    'img/2_character_pepe/1_idle/long_idle/I-11.png',
    'img/2_character_pepe/1_idle/long_idle/I-12.png',
    'img/2_character_pepe/1_idle/long_idle/I-13.png',
    'img/2_character_pepe/1_idle/long_idle/I-14.png',
    'img/2_character_pepe/1_idle/long_idle/I-15.png',
    'img/2_character_pepe/1_idle/long_idle/I-16.png',
    'img/2_character_pepe/1_idle/long_idle/I-17.png',
    'img/2_character_pepe/1_idle/long_idle/I-18.png',
    'img/2_character_pepe/1_idle/long_idle/I-19.png',
    'img/2_character_pepe/1_idle/long_idle/I-20.png',
  ]
  IMAGES_HURT = [
    'img/2_character_pepe/4_hurt/H-41.png',
    'img/2_character_pepe/4_hurt/H-42.png',
    'img/2_character_pepe/4_hurt/H-43.png',
  ]

  IMAGES_DEAD = [
    'img/2_character_pepe/5_dead/D-51.png',
    'img/2_character_pepe/5_dead/D-52.png',
    'img/2_character_pepe/5_dead/D-53.png',
    'img/2_character_pepe/5_dead/D-54.png',
    'img/2_character_pepe/5_dead/D-55.png',
    'img/2_character_pepe/5_dead/D-56.png',
    'img/2_character_pepe/5_dead/D-57.png',
  ]
  count = 0;
  world;

  characterHurt = false;
  characterDead = false;
  gameover = false;


  constructor() {
    super().loadImage('img/2_character_pepe/2_walk/W-21.png')
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SLEEP);
    this.applyGravity();
    this.animate();

  }

  checkMovement() {
    if (!this.characterHurt && !this.gameover) {
      if ((this.world.keyboard.MOBILERIGHT || this.world.keyboard.RIGHT) && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.playSound(walking_sound);
      }
      if ((this.world.keyboard.MOBILELEFT || this.world.keyboard.LEFT) && this.x > -600) {
        this.moveLeft();
        this.otherDirection = true;
        this.playSound(walking_sound);
      }
    }
  }
  
  checkInteractions() {
    if ((this.world.keyboard.MOBILEUP || this.world.keyboard.UP) && !this.isAboveGround() && !this.characterHurt && !this.gameover) {
      this.jump();
    }
    if (this.characterHurt && !this.gameover) {
      this.knockBack();
      this.handleHurt();
    }
  }
  
  handleHurt() {
    setTimeout(() => {
      this.characterHurt = false;
    }, 1000);
  }
  
  updateCamera() {
    this.world.camera_x = -this.x + 100;
  }
  
  playSound(sound) {
    sound.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  }
  
  animate() {
    characterIntervalMove = setInterval(() => {
      if (!pause) {
        if (!walking_sound.paused) {
          walking_sound.pause();
        }
  
        this.checkMovement();
        this.checkInteractions();
        this.updateCamera();
      }
    }, 1000 / 60);
  
    this.characterStatus()
  }

  characterStatus() {
    characterStatusInterval = setInterval(() => {
      if (!pause) {
        if (this.isDead()) {
          this.playAnimation(this.IMAGES_DEAD)
          this.characterDead = true;

        } else if (this.isHurt()) {
          this.playAnimation(this.IMAGES_HURT)
        } else if (this.isAboveGround()) {
          this.playAnimation(this.IMAGES_JUMPING);
        } else if ((this.world.keyboard.MOBILERIGHT || this.world.keyboard.RIGHT) || (this.world.keyboard.MOBILELEFT || this.world.keyboard.LEFT)) {

          this.playAnimation(this.IMAGES_WALKING);
        } else if (!(this.world.keyboard.UP || this.world.keyboard.MOBILEUP || this.world.keyboard.MOBILERIGHT || this.world.keyboard.MOBILELEFT || this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.isAboveGround())) {
          this.playAnimation(this.IMAGES_IDLE)
        }
      }
    }, 100);
  }

  jump() {
    jumping_sound.currentTime = 0;
    this.speedY = 15;
    jumping_sound.play();
  }

  knockBack() {
    if (!this.isAboveGround()) {
      this.speedY = 3;
    }
    this.x -= 5;
  }
}

