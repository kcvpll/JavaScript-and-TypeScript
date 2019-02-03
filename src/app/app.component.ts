import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Js';
}

let products = [
  {name: "Apple", price: "102", stock: "10"},
  {name: "Pineapple", price: "25", stock: "25"},
  {name: "Cherry", price: "10", stock: "15"},
  {name: "Banana", price: "33", stock: "0"}
]; 
let totalValue = products
.filter(item => item.stock)
.reduce((prev, item) => prev + (item.price * item.stock), 0);
console.log("Total value: " + totalValue.toFixed(2));


let myData = {
  name: "Pavel",
  weather: "sunny",
  printMessages: function (){
    console.log("Hello " + this.name );
    console.log ("The weather is " + this.weather);
  }
};
myData.printMessages();

class myClass {
  constructor(name, weather){
    this.name = name;
    this._weather = weather;
  }
  set weather(value){
    this._weather = value;
  }
  get weather (){
    return `Today is ${this._weather}`;
  }

  printMessages(){  
    console.log("Hello " + this.name );
    console.log (this.weather);
  }
}
let myData = new myClass ("Pavel", "cold"); 
myData.printMessages();

class MySubClass extends myClass {
  constructor(name, weather, city){
    super(name, weather);
    this.city = city;
  }
  printMessages(){
    super.printMessages();
    console.log(`You are in ${this.city}`);
  }
}
let myData = new MySubClass("Pavel", "sunny", "Karshi");
myData.printMessages();