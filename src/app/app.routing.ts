import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailComponent } from './components/movie-detail-page/movie-detail-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { TrendComponent } from './components/trend/trend.component';
import { TvDetailPageComponent } from './components/tv-detail-page/tv-detail-page.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
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
		component: UserFavoritesComponent,
		canActivate: [AuthGuardService]
	},
	{
		path: 'user-registration',
		component: UserRegistrationComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
