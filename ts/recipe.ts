export class Recipe {
    name: string;
    healthy: number;
    duration: number;
    image: string;


    constructor(name:string, healthy: number, duration: number, image: string) {
        this.name = name;
        this.healthy = healthy;
        this.duration = duration;
        this.image = image;
    }
}