import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TMDB_API } from './../../services/api/tmdb.service';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css'],
  providers: [TMDB_API]
})

export class TrendComponent implements OnInit {
  public nowPlayingResults

  constructor(private tmdb_api: TMDB_API) {
   }

  ngOnInit() {
    this.tmdb_api.getMovieNowPlaying().subscribe(response => {
      this.nowPlayingResults = response.json();
      console.log(this.nowPlayingResults)
    });
  }

}
