import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from './../../environments/environment.prod';

const headers = new HttpHeaders();
headers.append('Access-Control-Allow-Credentials', 'false');
headers.append('Access-Control-Allow-Headers', 'Content-Type, if-none-match');
headers.append('Content-Type', 'application/x-www-form-urlencoded;');
headers.append('Access-Control-Allow-Origin', '*');

@Injectable()
export class WeatherService {
    API_URL = environment.WEATHER_API_URL;
    WEATHER_API_KEY = environment.WEATHER_API_KEY;
    url = '';
    json = '';
    params = '';
    options = {
        headers: headers
    };

    constructor(private httpClient: HttpClient) { }

    getWeather(): Observable<any> {
        this.url = this.API_URL + this.WEATHER_API_KEY;
        return this.httpClient.get(this.url, {headers: headers});
    }
}
