import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Servicio } from '../model/servicio.model';
import { Respuesta } from '../model/respuesta.model';
import { Observable } from '../../../node_modules/rxjs';

const headers = new HttpHeaders();
headers.append('Access-Control-Allow-Credentials', 'false');
headers.append('Access-Control-Allow-Headers', 'Content-Type, if-none-match');
headers.append('Content-Type', 'application/x-www-form-urlencoded;');
headers.append('Access-Control-Allow-Origin', '*');

@Injectable()
export class ServicioService {
    API_URL = 'http://localhost:8080/v1';
    url = '';
    json = '';
    params = '';
    options = {
        headers: headers
    };

    constructor(private httpClient: HttpClient) { }

    getServicio(cod: string) {
        cod = '1';
        this.url = this.API_URL + '/servicio/' + cod;
        return this.httpClient.get(this.url, {headers: headers});
    }

    crearServicio(servicio: Servicio): Observable<any> {
        this.url = this.API_URL + '/crearServicio/';
        servicio.codigo = 0;
        return this.httpClient.post(this.url, servicio, this.options);
    }
}
