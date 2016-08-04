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
var apero_service_1 = require('../services/front/apero.service');
// import { HTTP_PROVIDERS } from '@angular/http';
require('rxjs/add/operator/map');
var router_1 = require('@angular/router');
var search_component_1 = require("./front/search.component");
var sidebar_component_1 = require("./front/sidebar.component");
var home_component_1 = require("./front/home.component");
var AppComponent = (function () {
    function AppComponent(aperoService) {
        this.aperoService = aperoService;
        this.aperos = aperoService.getAperos();
        // console.log(this.aperoService.getAperos().aperos)
        // this.aperos = this.aperoService.getAperos().aperos;
        // this.aperoService.getAperos()
        //     .then(
        //         data=>this.datas = JSON.stringify(data),
        //         error => this.errors = error
        //     );
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/components/app.component.html',
            styleUrls: ['app/components/front/app.component.css'],
            providers: [apero_service_1.AperoService],
            directives: [router_1.ROUTER_DIRECTIVES, search_component_1.SearchComponent, sidebar_component_1.SidebarComponent, home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [apero_service_1.AperoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map