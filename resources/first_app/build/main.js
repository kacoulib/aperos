"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/front/app.component');
var app_routes_1 = require('./app.routes');
// http
var http_1 = require('@angular/http');
// determinate which component should be use in the site initialisation
// and inject the appRouterProviers into all the site
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders, http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map