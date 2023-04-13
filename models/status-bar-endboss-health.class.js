class StatusBarEndbossHealth extends StatusBar {

    IMAGES = [
        'img/7_statusbars/2_statusbar_endboss/0.png',
        'img/7_statusbars/2_statusbar_endboss/20.png',
        'img/7_statusbars/2_statusbar_endboss/40.png',
        'img/7_statusbars/2_statusbar_endboss/60.png',
        'img/7_statusbars/2_statusbar_endboss/80.png',
        'img/7_statusbars/2_statusbar_endboss/100.png',
    ]
    health = 100;

    constructor() {
        super().loadImage(this.IMAGES[5]);
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = -1;
        
    }
}