import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { TrendComponent } from './components/trend/trend.component';

const appRoutes: Routes = [
	{
		path: '',
		component: SearchFormComponent
	},
	{
		path: 'trend',
		component: TrendComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
