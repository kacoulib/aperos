var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Log = function () {
    return function (target, name, descriptor) {
        console.log("call to " + name);
        return descriptor;
    };
};
var RaceService = (function () {
    function RaceService() {
    }
    RaceService.prototype.getRaces = function () {
        // call API
    };
    RaceService.prototype.getRace = function (raceId) {
        // call API
    };
    __decorate([
        Log(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], RaceService.prototype, "getRaces", null);
    __decorate([
        Log(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], RaceService.prototype, "getRace", null);
    return RaceService;
}());
var r = new RaceService;
// logs: call to getRaces
r.getRaces();
r.getRace(1);
// logs: call to getRace
console.log(r);
//# sourceMappingURL=test.js.map