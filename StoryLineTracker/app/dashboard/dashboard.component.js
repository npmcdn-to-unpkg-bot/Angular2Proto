var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Rx_1 = require('rxjs/Rx');
var DashboardComponent = (function () {
    function DashboardComponent(_characterService, _router, _toastService) {
        this._characterService = _characterService;
        this._router = _router;
        this._toastService = _toastService;
    }
    DashboardComponent.prototype.getCharacters = function () {
        var _this = this;
        // this._spinnerService.show();
        this.characters = this._characterService.getCharacters()
            .catch(function (e) {
            _this._toastService.activate("" + e);
            return Rx_1.Observable.of();
        });
        // .finally(() => { this._spinnerService.hide(); })
    };
    DashboardComponent.prototype.gotoDetail = function (character) {
        var link = ['Characters', 'Character', { id: character.id }];
        this._router.navigate(link);
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this._dbResetSubscription.unsubscribe();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCharacters();
        this._dbResetSubscription = this._characterService.onDbReset
            .subscribe(function () { return _this.getCharacters(); });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['app/dashboard/dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
})();
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map