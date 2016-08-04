"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/front/home.component');
var search_component_1 = require('./components/front/search.component');
var create_component_1 = require("./components/front/create.component");
var routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
    {
        path: 'search/:id',
        component: search_component_1.SearchComponent
    },
    {
        path: 'create',
        component: create_component_1.CreateComponent
    }
];
// while be include in bootstrap function localised in main.ts
// if this's done, all path defined in the routes will be available
// in our site
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map