
let level1;

function initLevel() {
level1 = new Level(
    [
        new Chicken(700),
        new Chicken(500),
        new Chicken(1000),
        new Chicken(1300),
        new Chicken(1700),
        new Chicken(2000),
    ],
    [
        new Cloud('img/5_background/layers/4_clouds/1.png'),
        new Cloud('img/5_background/layers/4_clouds/1.png'),
        new Cloud('img/5_background/layers/4_clouds/1.png'),
        new Cloud('img/5_background/layers/4_clouds/1.png'),
        new Cloud('img/5_background/layers/4_clouds/1.png'),
        new Cloud('img/5_background/layers/4_clouds/1.png'),
        new Cloud('img/5_background/layers/4_clouds/1.png'),
        new Cloud('img/5_background/layers/4_clouds/2.png'),
        new Cloud('img/5_background/layers/4_clouds/2.png'),
        new Cloud('img/5_background/layers/4_clouds/2.png'),
        new Cloud('img/5_background/layers/4_clouds/2.png'),
        new Cloud('img/5_background/layers/4_clouds/2.png'),
        new Cloud('img/5_background/layers/4_clouds/2.png'),
        new Cloud('img/5_background/layers/4_clouds/2.png'),


    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -719, 0), //Himmel
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719, 0), //3. layer
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719, 0), //2. layer
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719, 0), //1. layer

        new BackgroundObject('img/5_background/layers/air.png', 0, 0), //Himmel
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0, 0), //3. layer
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0, 0), //2. layer
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0, 0), //1. layer

        new BackgroundObject('img/5_background/layers/air.png', 719, 0), //Himmel
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719, 0), //3. layer
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719, 0), //2. layer
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719, 0), //1. layer

        new BackgroundObject('img/5_background/layers/air.png', 719 * 2, 0), //Himmel
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2, 0), //3. layer
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2, 0), //2. layer
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2, 0), //1. layer

        new BackgroundObject('img/5_background/layers/air.png', 719 * 3, 0), //Himmel
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3, 0), //3. layer
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3, 0), //2. layer
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3, 0), //1. layer

    ],
    [
        new CoinObject(300, 200),
        new CoinObject(400, 200),
        new CoinObject(700, 300),
        new CoinObject(1500, 100),
        new CoinObject(2000, 200),
    ],
    [
        new BottleObject('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 200),
        new BottleObject('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 400),
        new BottleObject('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 700),
        new BottleObject('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 1500),
        new BottleObject('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 2000),
    ],
    [
        new PowerUpObject('img/8_coin/BorritoPowerUP.png', 200, 200),
    ],
    [
        new Endboss(),

    ],

);

}