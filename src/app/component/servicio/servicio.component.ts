import { AlertsService } from 'angular-alert-module';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Servicio } from '../../model/servicio.model';
import { Respuesta } from '../../model/respuesta.model';
import { ServicioService } from '../../service/servicio.service';

import 'ace-builds/src-min-noconflict/ace.js';
import 'brace/mode/json';
import 'ace-builds/src-min-noconflict/snippets/json';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  servicio: Servicio = new Servicio;
  respuesta: Respuesta = new Respuesta;
  formulario: FormGroup;
  text = '//Ingrese los datos del body en formato json';
  options: any = {maxLines: 1000, printMargin: false, showGutter: true};

  constructor(private _servicioService: ServicioService, private alerts: AlertsService) { }

  ngOnInit() {
    this.inicializarFormulario();
  }

  private inicializarFormulario () {
    this.servicio = new Servicio;
    this.formulario = new FormGroup ({
      codigo: new FormControl,
      nombre: new FormControl,
      ruta: new FormControl,
      metodo: new FormControl
    });
  }

  public getServicio () {
    this._servicioService.getServicio(this.formulario.value.codigo).subscribe((data: Servicio) => {
      this.servicio = data;
      console.log(JSON.stringify(this.servicio));
    });
  }

  public crearServicio () {
    this.servicio = this.formulario.value;
    this._servicioService.crearServicio(this.servicio).subscribe(
      data => {
        this.inicializarFormulario();
        this.alerts.setMessage(data.requestMessage, 'success');
      },
      error => {
        if (error.status !== 400) {
          this.alerts.setMessage(error.error.error, 'error');
        } else {
          this.alerts.setMessage(error.error.requestMessage, 'error');
        }
      }
    );
  }

  public onChange(code) {
    console.log('new code', code);
  }
}
