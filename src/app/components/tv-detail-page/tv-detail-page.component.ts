import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TMDB_API } from './../../services/api/tmdb.service';

@Component({
	selector: 'app-tv-detail-page',
	templateUrl: './tv-detail-page.component.html',
	styleUrls: ['./tv-detail-page.component.css'],
	providers: [TMDB_API]
})

export class TvDetailPageComponent implements OnInit {

	public href: string = "";

	constructor(private router: Router, private tmdb_api: TMDB_API) { }

	ngOnInit() {
		this.href = this.router.url;
		var id = this.href.substr(7, 12);
	}

	getDetails(id: string) {
		this.tmdb_api.getMovieById(id).subscribe(response => {
			var details = response.json();
			console.log(details);
		});

	}
}
