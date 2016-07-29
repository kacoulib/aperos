"use strict";
var router_1 = require('@angular/router');
var front_component_1 = require('./components/front/front.component');
var routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '/',
        component: front_component_1.FrontComponent
    },
    {
        path: '/apero/search',
        component: front_component_1.FrontComponent
    }
];
// while be include in bootstrap function localised in main.ts
// if this's done, all path defined in the routes will be available
// in our site
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map