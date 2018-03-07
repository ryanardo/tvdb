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
  results: any[] = null;

  constructor(private tmdb_api: TMDB_API) { }

  ngOnInit() {
    this.tmbd_api.getMovieNowPlaying()
      .then((response) => {
          this.results = response.json();
      })
      .catch((error) => console.log(error));

  }

}
