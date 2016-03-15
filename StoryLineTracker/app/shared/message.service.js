var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Rx_1 = require('rxjs/Rx');
var config_1 = require('./config');
var MessageService = (function () {
    function MessageService(_http, _toastService) {
        this._http = _http;
        this._toastService = _toastService;
        this._subject = new Rx_1.Subject();
        this.state = this._subject;
    }
    MessageService.prototype.resetDb = function () {
        var _this = this;
        var msg = 'Reset the Data Successfully';
        this._http.post(config_1.CONFIG.baseUrls.resetDb, null)
            .subscribe(function () {
            _this._subject.next({ message: msg });
            _this._toastService.activate(msg);
        });
    };
    MessageService = __decorate([
        core_1.Injectable()
    ], MessageService);
    return MessageService;
})();
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map