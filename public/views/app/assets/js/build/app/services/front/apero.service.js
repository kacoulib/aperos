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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/operator');
var index_1 = require('../../mocks/index');
var AperoService = (function () {
    function AperoService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost/laravel/aperos/public/'; // URL to web API
        this.http.get(this.heroesUrl).subscribe(function (data) { return console.log(data); });
    }
    AperoService.prototype.getAperos = function () {
        this.aperos = index_1.APEROS;
        return this.aperos;
    };
    AperoService.prototype.getCategories = function () {
        this.categories = index_1.CATEGORIES;
        return this.categories;
    };
    AperoService.prototype.create = function (param) {
        return console.log(param);
        // this.aperos.push(pra);
    };
    AperoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AperoService);
    return AperoService;
}());
exports.AperoService = AperoService;
//# sourceMappingURL=apero.service.js.map