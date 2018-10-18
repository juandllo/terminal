import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './../../service/weather.service';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  weatherIcon = environment.WEATHER_ICON;
  result;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  public getWeather () {
    this._weatherService.getWeather().subscribe(
      data => {
        this.result = data;
        this.weatherIcon += this.result.weather[0].icon + '.png';
        console.log(this.result);
      },
      error => {
        console.log(error);
      }
    );
  }
}


