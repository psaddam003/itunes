import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiCall } from '../service/api-call';
import { PlaySongComponent } from './play-song/play-song.component';
import { SongListComponent } from './song-list/song-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaySongComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SongListComponent
      },
      {
        path: 'play-song',
        component: PlaySongComponent
      }
    ])
  ],
  providers: [ApiCall],
  bootstrap: [AppComponent]
})
export class AppModule { }
