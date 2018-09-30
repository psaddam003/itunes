import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCall } from '../../service/api-call';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  public songList = [];
  public songListOld = [];

  constructor(private apiService: ApiCall, private router: Router) { }

  ngOnInit() {
    this.apiService.getSongList().subscribe(list => {
      this.songList = list['feed']['entry'];
      this.songListOld = this.songList.slice();
    })
  }

  playSong(song) {
    this.router.navigate(["play-song", { data: song.link.attributes.href }])
  }

  searchList(value) {
    if (value) {
      if (this.songListOld) {
        this.songList = [];
        this.songListOld.forEach(element => {
          if (element['title']['label'].toLowerCase().search(value.toLowerCase()) > -1) {
            this.songList.push(element);
          }
        })
      }
    } else {
      this.songList = this.songListOld.slice();
    }
  }

}
