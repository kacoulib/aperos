import { provideRouter, RouterConfig }  from '@angular/router';
import { FrontComponent } from './components/front/front.component';


const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '/',
        component: FrontComponent
    },
    {
        path: '/apero/search',
        component: FrontComponent
    }
];

// while be include in bootstrap function localised in main.ts
// if this's done, all path defined in the routes will be available
// in our site
export const appRouterProviders = [
    provideRouter(routes)
];
