import { ServicioService } from './service/servicio.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServicioComponent } from './component/servicio/servicio.component';
import { WeatherService } from './service/weather.service';
import { LoginComponent } from './component/login/login.component';
import { AlertsModule } from 'angular-alert-module';
import { AceEditorModule } from 'ng2-ace-editor';
import { ConsolaComponent } from './component/consola/consola.component';
import { CookiesComponent } from './component/cookies/cookies.component';
import { CookieService } from 'ngx-cookie-service';
import { MusicaComponent } from './component/musica/musica.component';
import { MusicaService } from './service/musica.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'consola', component: ConsolaComponent},
  {path: 'cookies', component: CookiesComponent},
  {path: 'musica', component: MusicaComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ServicioComponent,
    LoginComponent,
    ConsolaComponent,
    CookiesComponent,
    MusicaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlertsModule.forRoot(),
    AceEditorModule
  ],
  providers: [ServicioService, WeatherService, CookieService, MusicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
