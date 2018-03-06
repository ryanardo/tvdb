import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { SearchComponent } from './components/search/search.component';
import { UserFavoritesComponent } from './components/user-favorites/user-favorites.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
	{
		path: '',
		component: DashboardComponent
	},
	{
		path: '/user',
		component: SearchComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
