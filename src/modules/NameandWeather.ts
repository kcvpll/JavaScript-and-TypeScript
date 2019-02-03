export class Name {
    constructor(first, second){
        this.first = first;
        this.second = second;
    }
    get nameMessage(){
        return `Hello ${this.first} ${this.second}`
    }    
}

export class WeatherLocation {
    constructor(city, weather){
        this.city = city; 
        this.weather = weather;
    }
    get weatherMessage(){
        return `The weather is ${this.weather} in ${this.city}`
    }
}

