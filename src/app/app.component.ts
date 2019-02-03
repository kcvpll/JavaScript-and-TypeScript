import { Component } from '@angular/core';
import {Name, WeatherLocation} from "../modules/NameandWeather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Js';
}

let name = new Name ("Adam", "Freeman");
let loc = new WeatherLocation ("Karshi", "raining");
console.log(name.nameMessage);
console.log(loc.weatherMessage);