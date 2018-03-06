import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { SearchFormComponent } from './components/search-form/search-form.component';

const appRoutes: Routes = [
	{
		path: '',
		component: SearchFormComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
