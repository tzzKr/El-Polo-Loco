class CoinObject extends MovableObject {

    height = 100;
    width = 100;


    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ]


    constructor(x, y) {
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = y;
        this.animateCoin()
    }


    animateCoin() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN)
        }, 1000);
    }
}