"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// must be import if we want to use the routers directives
// like : [routerLink], <router-outlet>
var router_1 = require('@angular/router');
var hero_service_1 = require('../../services/hero.service');
// http
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.title = 'Tour of Heroes';
        var headers = new http_1.Headers({ 'Content-Type': 'Content-Type' });
        var options = new http_1.RequestOptions({ headers: headers });
        // return console.log(http)
        http.get('http://localhost/laravel/aperos/public/')
            .map(function (res) {
            res.json();
            console.log(res);
        })
            .subscribe(function (date) { return _this.dates = date; });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<nav>\n\t\t\t<a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Dashboard</a>\n\t\t\t<a [routerLink]=\"['/heroes']\" routerLinkActive=\"active\">Heroes</a>\n\t\t</nav>\n\t\t<router-outlet></router-outlet>\n\t\t<ul>\n\t\t\t<li >{{date}}</li>\n\t\t</ul>\n\t",
            directives: [router_1.ROUTER_DIRECTIVES],
            // tels angular to create an new instance of the below service
            // when he create new AppComponent
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map