import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MaterializeModule } from "angular2-materialize";

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TrendComponent } from './components/trend/trend.component';
import { MovieDetailComponent } from './components/movie-detail-page/movie-detail-page.component';
import { TvDetailPageComponent } from './components/tv-detail-page/tv-detail-page.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

export const firebaseConfig = {
	apiKey: masterFirebaseConfig.apiKey,
	authDomain: masterFirebaseConfig.authDomain,
	databaseURL: masterFirebaseConfig.databaseURL,
	storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		SearchComponent,
		UserFavoritesComponent,
		SearchFormComponent,
		SearchResultsComponent,
		TrendComponent,
		MovieDetailComponent,
		TvDetailPageComponent,
		HomeComponent,
		ShowDetailComponent,
		UserRegistrationComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		MaterializeModule
	],
	providers: [AuthService,AuthGuardService],
	bootstrap: [AppComponent]
})

export class AppModule { }
