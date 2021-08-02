export class Recipe {
    public name: string;
    public describtion: string;
    public imagePath: string;

    constructor (name: string, desc: string, imgPath: string) {
        this.name = name;
        this.describtion = desc;
        this.imagePath = imgPath;
    }
}