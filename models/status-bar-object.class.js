class StatusBar extends DrawableObject {


    y = 0;
    x = 20;
    width = 595/3;
    height = 158/3;
    
    percentage = 100;
    bottles = 5;




    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex(percentage)];
        this.img = this.imageCache[path];
    }


    resolveImageIndex(percentage){
        if (percentage == 100) {
            return 5;
        }else if (percentage > 80) {
            return 4;
        }else if (percentage > 60) {
            return 3;
        }else if (percentage > 40) {
            return 2;
        }else if (percentage > 20) {
            return 1;
        }else {
            return 0;
        }
    }


}

