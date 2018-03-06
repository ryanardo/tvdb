import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { SearchComponent } from './components/search/search.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		ShowDetailComponent,
		SearchComponent,
		UserFavoritesComponent,
		SearchFormComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		NgbCarouselModule.forRoot(),
		NgbAlertModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
