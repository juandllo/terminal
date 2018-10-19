import { Component, OnInit } from '@angular/core';
import { MusicaService } from './../../service/musica.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  public playList;
  public datos;
  public isViewPlayList: boolean;
  public trackList;

  constructor(private musicaService: MusicaService) { }

  ngOnInit() {
    this.datos = '';
    this.trackList = '';
    this.playList = '';
    this.isViewPlayList = false;
    this.musicaService.getPlaylist().subscribe(
      data => {
        this.datos = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  public viewPlayList(item) {
    this.musicaService.getPlayListSummary(item.href).subscribe(
      data => {
        this.playList = data;
        this.trackList = this.playList.tracks;
        this.isViewPlayList = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  public volver() {
    this.isViewPlayList = false;
  }

  public millisToMinutesAndSeconds(millis) {
    const time = new Date(millis);
    return time.getUTCMinutes() + ':' + (time.getUTCSeconds() < 10 ? '0' : '') + time.getUTCSeconds();
  }

}
