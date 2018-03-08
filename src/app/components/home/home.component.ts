import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { TMDB_API } from './../../services/api/tmdb.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [TMDB_API]
})
export class HomeComponent implements OnInit {

	movies: any[] = null;

	constructor(private tmdb_api: TMDB_API) { }

	getSearchResults(query: string, adultContent: string) {
		this.tmdb_api.getMultiSearch(query, adultContent).subscribe(response => {
			this.movies = response.json();
		});

	}

	ngOnInit() {
	}

}
