class Level {

    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    level_end_x = 2200;
    powerUps;
    endboss;

    constructor(enemies, clouds, backgroundObjects, coins, bottles, powerUps, endboss){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
        this.powerUps = powerUps;
        this.endboss = endboss;
    }

}