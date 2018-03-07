import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { API_KEY } from './../../api-keys';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class TMDB_API {

	constructor(private http: Http) {}

	getMultiSearch(query: string, include_adult: string) {
		return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=${include_adult}`);
	}

	getMovieById(id: string) {
		return this.http.get(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US`);
	}
	getTVById(id: string) {
		return this.http.get(`https://api.themoviedb.org/3/tv/{movie_id}?api_key=${API_KEY}&language=en-US`);
	}

	getMovieNowPlaying() {
		return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
	}


} //End of the 'TMDB' Constructor.
