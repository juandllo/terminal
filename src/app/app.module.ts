import { ServicioService } from './service/servicio.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServicioComponent } from './component/servicio/servicio.component';
import { LoginComponent } from './component/login/login.component';
import { AlertsModule } from 'angular-alert-module';
import { AceEditorModule } from 'ng2-ace-editor';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: '', redirectTo: '/servicio', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ServicioComponent,
    LoginComponent
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
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
