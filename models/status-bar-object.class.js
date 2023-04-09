class StatusBar extends DrawableObject {


    y = 0;
    x = 20;
    width = 595/3;
    height = 158/3;
    




    setPercentage(percentage, object) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex(percentage, object)];
        this.img = this.imageCache[path];
    }


    resolveImageIndex(percentage, object){
        if (percentage == object) {
            return 5;
        }else if (percentage > object/5*4) {
            return 4;
        }else if (percentage > object/5*3) {
            return 3;
        }else if (percentage > object/5*2) {
            return 2;
        }else if (percentage > object/5) {
            return 1;
        }else {
            return 0;
        }
    }


}

