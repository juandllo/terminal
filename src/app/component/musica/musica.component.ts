import { Component, OnInit } from '@angular/core';
import { MusicaService } from './../../service/musica.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  public datos;

  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
    this.musicaService.getPlaylist().subscribe(
      data => {
        this.datos = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
