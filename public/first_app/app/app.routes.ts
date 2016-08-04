import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './components/front/heroes.component';
import { HeroDetailComponent } from './components/front/hero-detail.component';
import { DashboardComponent } from './components/back/dashboard.component';

const routes: RouterConfig = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'heroes',
		component: HeroesComponent
	},
	{
		path: 'detail/:id',
		component: HeroDetailComponent
	},
	{
		path: 'dashboard', 
		component: DashboardComponent
	}
];

// while be include in bootstrap function localised in main.ts
// if this's done, all path defined in the routes will be available
// in our site
export const appRouterProviders = [
  provideRouter(routes)
];
