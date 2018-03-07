import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MovieDetailComponent } from './components/movie-detail-page/movie-detail-page.component';
import { TvDetailPageComponent } from './components/tv-detail-page/tv-detail-page.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		SearchComponent,
		UserFavoritesComponent,
		SearchFormComponent,
		SearchResultsComponent,
		MovieDetailComponent,
		TvDetailPageComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
