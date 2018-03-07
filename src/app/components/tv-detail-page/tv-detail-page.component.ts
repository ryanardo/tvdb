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

	result: any[] = null;
	public href: string = "";

	constructor(private router: Router, private tmdb_api: TMDB_API) { }

	ngOnInit() {
		this.href = this.router.url;
		var id = this.href.substr(7, 12);
	}

	getDetails(id: string) {
		this.tmdb_api.getMovieById(id).subscribe(response => {
			this.result = response.json();
			console.log(this.result);
		});
	}
	// this.projectToDisplay = this.projectService.getProjectById(this.projectKey);
} //End
