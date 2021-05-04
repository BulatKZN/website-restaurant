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

    html () {
        const el = document.createElement('div');
        el.classList.add('food-slider-item')
    
    
    const content = `
        <div class="image">
            <img src="${this.image}" alt="" class="menu-img">
        </div>
        <div class="food-slider-content">
            <div class="food-slider-title">${this.name}</div>
            <div class="food-slider-parametrs">
                <div class="food-slider-parameters-item">
                    <div class="food-slider-energy-name">Полезность:</div>
                    <div class="food-slider-energ-value">&nbsp ${this.healthy} кал</div>
                </div>
                <div class="food-slider-parameters-item">
                    <div class="food-slider-time">Время готовки:</div>
                    <div class="food-slider-time-number">&nbsp ${this.duration} мин</div>
                </div>
            </div>
        </div>
        `;
    el.innerHTML = content;
    return el;
    }
}

