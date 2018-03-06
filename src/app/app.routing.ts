import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SearchFormComponent } from './components/search-form/search-form.component';
import { LoginComponent } from './components/login/login.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'search',
		component: SearchFormComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'favorites',
		component: UserFavoritesComponent
	},
	{
		path: 'browse',
		component: ShowDetailComponent
	}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
