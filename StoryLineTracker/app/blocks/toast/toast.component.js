var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var ToastComponent = (function () {
    function ToastComponent(toastService) {
        this._defaults = {
            title: '',
            message: 'May the Force be with You'
        };
        toastService.activate = this.activate.bind(this);
    }
    ToastComponent.prototype.activate = function (message, title) {
        if (message === void 0) { message = this._defaults.message; }
        if (title === void 0) { title = this._defaults.title; }
        this.title = title;
        this.message = message;
        this._show();
    };
    ToastComponent.prototype.ngOnInit = function () {
        this._toastElement = document.getElementById('toast');
    };
    ToastComponent.prototype._show = function () {
        var _this = this;
        console.log(this.message);
        this._toastElement.style.opacity = 1;
        this._toastElement.style.zIndex = 9999;
        window.setTimeout(function () { return _this._hide(); }, 2500);
    };
    ToastComponent.prototype._hide = function () {
        var _this = this;
        this._toastElement.style.opacity = 0;
        window.setTimeout(function () { return _this._toastElement.style.zIndex = 0; }, 400);
    };
    ToastComponent = __decorate([
        core_1.Component({
            selector: 'toast',
            templateUrl: 'app/blocks/toast/toast.component.html',
            styleUrls: ['app/blocks/toast/toast.component.css']
        })
    ], ToastComponent);
    return ToastComponent;
})();
exports.ToastComponent = ToastComponent;
//# sourceMappingURL=toast.component.js.map