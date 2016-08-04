"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./components/front/heroes.component');
var hero_detail_component_1 = require('./components/front/hero-detail.component');
var dashboard_component_1 = require('./components/back/dashboard.component');
var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }
];
// while be include in bootstrap function localised in main.ts
// if this's done, all path defined in the routes will be available
// in our site
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map