import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { TrendComponent } from './components/trend/trend.component';
import { MovieDetailComponent } from './components/movie-detail-page/movie-detail-page.component';
import { TvDetailPageComponent } from './components/tv-detail-page/tv-detail-page.component';
import { LoginComponent } from './components/login/login.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
	{
		path: '',
		component: SearchFormComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'search',
		component: SearchFormComponent
	},
	{
		path: 'trend',
		component: TrendComponent
	},
	{
		path: 'movie/:id',
		component: MovieDetailComponent
	},
	{
		path: 'tv/:id',
		component: TvDetailPageComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'favorites',
		component: UserFavoritesComponent
	},
	// {
	// 	path: 'browse',
	// 	component: ShowDetailComponent
	// }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
