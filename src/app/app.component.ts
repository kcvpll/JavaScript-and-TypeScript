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
