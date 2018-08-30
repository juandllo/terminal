import { AlertsService } from 'angular-alert-module';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Servicio } from '../../model/servicio.model';
import { Respuesta } from '../../model/respuesta.model';
import { ServicioService } from '../../service/servicio.service';

import * as ace from 'brace';
import 'brace/mode/json';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  servicio: Servicio = new Servicio;
  allServicios: Servicio[] = new Array();
  respuesta: Respuesta = new Respuesta;
  formulario: FormGroup;
  body: string;

  public editor;

  public editorOptions: any = {
      showPrintMargin: true,
      showInvisibles: true,
      highlightGutterLine: true,
      highlightActiveLine: true,
      fadeFoldWidgets: true,
      showLineNumbers: true,
      fontSize: 16,
      mode: 'ace/mode/json'
  };

  constructor(private _servicioService: ServicioService, private alerts: AlertsService) { }

  ngOnInit() {
    this.inicializarFormulario();
  }

  private inicializarFormulario () {
    this.servicio = new Servicio;
    this.allServicios = new Array();
    this.formulario = new FormGroup ({
      codigo: new FormControl,
      nombre: new FormControl,
      ruta: new FormControl,
      metodo: new FormControl
    });

    this.formulario.setValue({
      codigo: 0,
      nombre: '',
      ruta: '',
      metodo: 0
    });

    this.body = '';
    this.editor = ace.edit('editor');

    this.getServicio();
  }

  public getServicio () {
    this._servicioService.getAllServicios().subscribe((data: Servicio[]) => {
      this.allServicios = data;
    },
    error => {
      console.log(error);
    });
  }

  public crearServicio () {
    this.servicio = this.formulario.value;
    this.servicio.body = this.body;
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

  public selectService(serviceSelected: Servicio) {
    this.formulario.setValue({
      codigo: serviceSelected.codigo,
      nombre: serviceSelected.nombre,
      ruta: serviceSelected.ruta,
      metodo: serviceSelected.metodo
    });
    this.body = serviceSelected.body;
  }
}
