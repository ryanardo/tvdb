import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { MovieDetailComponent } from './components/movie-detail-page/movie-detail-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { TvDetailPageComponent } from './components/tv-detail-page/tv-detail-page.component';

const appRoutes: Routes = [
	{
		path: '',
		component: SearchFormComponent
	},
	{
		path: 'movie/:id',
		component: MovieDetailComponent
	},
	{
		path: 'tv/:id',
		component: TvDetailPageComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
