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
var apero_service_1 = require('../../services/front/apero.service');
var FrontComponent = (function () {
    function FrontComponent(http) {
        this.http = http;
    }
    FrontComponent.prototype.list = function () {
        return this.http.get('/').map(function (res) { return res.json(); });
    };
    FrontComponent = __decorate([
        core_1.Component({
            selector: 'my-wiki',
            template: "\n    <h1>Wikipedia Demo</h1>\n    <p><i>Fetches after each keystroke</i></p>\n    <input #term (keyup)=\"search(term.value)\"/>\n    <ul>\n      <li *ngFor=\"let item of items | async\">{{item}}</li>\n    </ul>\n  ",
            providers: [apero_service_1.AperoService]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FrontComponent);
    return FrontComponent;
}());
exports.FrontComponent = FrontComponent;
//# sourceMappingURL=front.component.js.map