class StatusBarHealth extends StatusBar {




IMAGES = [
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
]


constructor() {
    super().loadImage(this.IMAGES[6]);
    this.loadImages(this.IMAGES);
    this.x = 20;
    this.y = 0;
    this.setPercentage(100, 100)
}



}