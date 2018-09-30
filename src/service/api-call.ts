import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http } from "@angular/http";

@Injectable()
export class ApiCall {
    constructor(private httpClient: HttpClient, private http: Http) {

    }

    getSongList() {
        let url = "https://itunes.apple.com/in/rss/topalbums/limit=100/json"
        return this.httpClient.get(url);
    }


    getPlayedSongList(url) {
        let header = new HttpHeaders()
        header.set('Content-Type', 'text/html')
        return this.http.get(url);
    }

}