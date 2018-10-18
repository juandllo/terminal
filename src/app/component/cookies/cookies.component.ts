import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookieModel } from './../../model/cookie.model';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  public cookieList;
  public dirty: boolean;
  public cookieModel: CookieModel = new CookieModel();

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.getAllCookies();
  }

  private getAllCookies() {
    const obj = this.cookieService.getAll();
    this.cookieList = Object.keys(obj).map( key => ({type: key, value: obj[key]}));
  }

  public deleteCookie(cookie) {
    this.cookieService.delete(cookie.type);
    this.getAllCookies();
  }

  public addCookie() {
    this.cookieService.set(this.cookieModel.clave, this.cookieModel.valor);
    this.getAllCookies();
    this.clearForm();
  }

  public editCookie(cookie) {
    this.cookieModel.clave = cookie.type;
    this.cookieModel.valor = cookie.value;
  }

  private clearForm() {
    this.cookieModel = new CookieModel();
  }

}
