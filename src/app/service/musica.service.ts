import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { environment } from './../../environments/environment.prod';

const API_KEY = environment.SPOTIFY_API_KEY;

const headerSettings: {[name: string]: string | string[]; } = {};
headerSettings['Authorization'] = 'Bearer ' + API_KEY;

const headers = new HttpHeaders(headerSettings);

@Injectable()
export class MusicaService {
    API_URL = environment.SPOTIFY_API_URL;
    url = '';
    json = '';
    params = '';
    options = {
        headers: headers
    };

    constructor(private httpClient: HttpClient) { }

    getPlaylist(): Observable<any> {
        return this.httpClient.get(this.API_URL, this.options);
    }

    getPlayListSummary(playListUrl: string): Observable<any> {
        return this.httpClient.get(playListUrl, this.options);
    }
}
