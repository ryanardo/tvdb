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
	public id: string="";
	public example;

	constructor(private router: Router, private tmdb_api: TMDB_API) { }

	ngOnInit() {
		this.href = this.router.url;
		//this.id = this.href.substr(4, 12);
		 this.tmdb_api.getTVById(this.href.substr(4, 12)).subscribe(response => {
			this.example = response.json();
			console.log(this.example)
			});
	}

	// getDetails(id: string) {
	// 	return this.tmdb_api.getTVById(id).subscribe(response => {
	// 		var result = response.json();
	// 		console.log(result);
	//
	// 	});
	// }
	// this.projectToDisplay = this.projectService.getProjectById(this.projectKey);
} //End
