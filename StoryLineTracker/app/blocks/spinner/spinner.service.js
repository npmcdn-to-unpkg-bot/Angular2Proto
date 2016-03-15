var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Rx_1 = require('rxjs/Rx');
var SpinnerService = (function () {
    function SpinnerService() {
        this._spinnerSubject = new Rx_1.Subject();
        this.spinnerState = this._spinnerSubject;
    }
    SpinnerService.prototype.show = function () {
        this._spinnerSubject.next({ show: true });
    };
    SpinnerService.prototype.hide = function () {
        this._spinnerSubject.next({ show: false });
    };
    SpinnerService = __decorate([
        core_1.Injectable()
    ], SpinnerService);
    return SpinnerService;
})();
exports.SpinnerService = SpinnerService;
//# sourceMappingURL=spinner.service.js.map