import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './components/front/home.component';
import { SearchComponent } from './components/front/search.component';
import {CreateComponent} from "./components/front/create.component";


const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'search/:id',
        component: SearchComponent
    },
    {
        path: 'create',
        component: CreateComponent
    }
];

// while be include in bootstrap function localised in main.ts
// if this's done, all path defined in the routes will be available
// in our site
export const appRouterProviders = [
    provideRouter(routes)
];
