import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { TrendComponent } from './components/trend/trend.component';
import { MovieDetailComponent } from './components/movie-detail-page/movie-detail-page.component';
import { TvDetailPageComponent } from './components/tv-detail-page/tv-detail-page.component';

const appRoutes: Routes = [
	{
		path: '',
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
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
