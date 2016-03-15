var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Rx_1 = require('rxjs/Rx');
var ExceptionService = (function () {
    function ExceptionService(_toastService) {
        var _this = this;
        this._toastService = _toastService;
        this.catchBadResponse = function (errorResponse) {
            var res = errorResponse;
            var err = res.json();
            var emsg = err ?
                (err.error ? err.error : JSON.stringify(err)) :
                (res.statusText || 'unknown error');
            _this._toastService.activate("Error - Bad Response - " + emsg);
            //return Observable.throw(emsg); // TODO: We should NOT swallow error here.
            return Rx_1.Observable.of();
        };
    }
    ExceptionService = __decorate([
        core_1.Injectable()
    ], ExceptionService);
    return ExceptionService;
})();
exports.ExceptionService = ExceptionService;
//# sourceMappingURL=exception.service.js.map