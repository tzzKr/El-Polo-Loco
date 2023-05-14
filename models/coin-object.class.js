class CoinObject extends MovableObject {

    height = 100;
    width = 100;


    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ]
    offset = {
        x: 30, //left
        y: 30, //up
        width: 30, //right
        height: 30, //down
      }


    constructor(x, y) {
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.animateCoin()
    }


    animateCoin() {
        coinInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_COIN)
        }, 1000);
    }

    
}