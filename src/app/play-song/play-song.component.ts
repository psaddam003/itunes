import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ApiCall } from '../../service/api-call';

@Component({
  selector: 'app-play-song',
  templateUrl: './play-song.component.html',
  styleUrls: ['./play-song.component.css']
})
export class PlaySongComponent implements OnInit {

  constructor(private apiService: ApiCall, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      let href = params['data'];
      this.apiService.getPlayedSongList(href).subscribe((html: any) => {
        let element = document.getElementById('currentSong');
        element.innerHTML = html.text()
      }, err => {
        console.log(err)
      });
    });
  }

}
