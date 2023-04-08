class StatusBar extends DrawableObject {


    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ]

    IMAGES_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ]

    percentage = 100;
    bottles = 5;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 20;
        this.y = 0;
        this.width = 595/2.5;
        this.height = 158/2.5;
        this.setPercentage(100);
        this.setBottles(5);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndexHealth()];
        this.img = this.imageCache[path];
    }

    setBottles(bottles) {
        this.bottles = bottles;
        let path = this.IMAGES_BOTTLE[this.resolveImageIndexBottles()];
        this.img = this.imageCache[path];
        

    }

    resolveImageIndexHealth(){
        if (this.percentage == 100) {
            return 5;
        }else if (this.percentage > 80) {
            return 4;
        }else if (this.percentage > 60) {
            return 3;
        }else if (this.percentage > 40) {
            return 2;
        }else if (this.percentage > 20) {
            return 1;
        }else {
            return 0;
        }
    }

    resolveImageIndexBottles(){
        if (this.bottles == 5) {
            return 5;
        }else if (this.bottles == 4) {
            return 4;
        }else if (this.bottles == 3) {
            return 3;
        }else if (this.bottles == 2) {
            return 2;
        }else if (this.bottles == 1) {
            return 1;
        }else {
            return 0;
        }
    }
}

