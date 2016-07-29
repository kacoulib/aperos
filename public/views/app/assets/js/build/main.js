"use strict";
var http_1 = require('@angular/http');
var app_routes_1 = require('./app/app.routes');
var app_component_1 = require('./app/components/app.component');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, app_routes_1.appRouterProviders]);
//# sourceMappingURL=main.js.map