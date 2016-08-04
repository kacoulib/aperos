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
// import { Http, Response } from '@angular/http';
var apero_service_1 = require('../../services/front/apero.service');
var CreateComponent = (function () {
    function CreateComponent(aperoService) {
        this.aperoService = aperoService;
        this.active = true;
        this.submitted = false;
        this.categories = this.aperoService.getCategories();
        this.aperos = this.aperoService.getAperos();
        console.log(this.categories);
        // this.aperos = this.aperoService.getAperos();
    }
    CreateComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    CreateComponent.prototype.createApero = function (param) {
        console.log(param);
        return param;
        // this.aperoService.create(param);
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'my-create',
            templateUrl: 'app/components/front/create.component.html',
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [apero_service_1.AperoService])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map