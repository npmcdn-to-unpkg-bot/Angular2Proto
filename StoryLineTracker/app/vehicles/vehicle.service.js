var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var shared_1 = require('../shared/shared');
var vehiclesUrl = shared_1.CONFIG.baseUrls.vehicles;
var VehicleService = (function () {
    function VehicleService(_http, _exceptionService, _messageService, _spinnerService) {
        var _this = this;
        this._http = _http;
        this._exceptionService = _exceptionService;
        this._messageService = _messageService;
        this._spinnerService = _spinnerService;
        this.onDbReset = this._messageService.state;
        this._messageService.state.subscribe(function (state) { return _this.getVehicles(); });
    }
    VehicleService.prototype.addVehicle = function (vehicle) {
        var _this = this;
        var body = JSON.stringify(vehicle);
        this._spinnerService.show();
        return this._http
            .post("" + vehiclesUrl, body)
            .map(function (res) { return res.json().data; })
            .catch(this._exceptionService.catchBadResponse)
            .finally(function () { return _this._spinnerService.hide(); });
    };
    VehicleService.prototype.deleteVehicle = function (vehicle) {
        var _this = this;
        this._spinnerService.show();
        return this._http
            .delete(vehiclesUrl + "/" + vehicle.id)
            .catch(this._exceptionService.catchBadResponse)
            .finally(function () { return _this._spinnerService.hide(); });
    };
    VehicleService.prototype.getVehicles = function () {
        var _this = this;
        this._spinnerService.show();
        return this._http.get(vehiclesUrl)
            .map(function (response) { return response.json().data; })
            .catch(this._exceptionService.catchBadResponse)
            .finally(function () { return _this._spinnerService.hide(); });
    };
    VehicleService.prototype.getVehicle = function (id) {
        var _this = this;
        this._spinnerService.show();
        return this._http.get(vehiclesUrl + "/" + id)
            .map(function (response) { return response.json().data; })
            .catch(this._exceptionService.catchBadResponse)
            .finally(function () { return _this._spinnerService.hide(); });
    };
    VehicleService.prototype.updateVehicle = function (vehicle) {
        var _this = this;
        var body = JSON.stringify(vehicle);
        this._spinnerService.show();
        return this._http
            .put(vehiclesUrl + "/" + vehicle.id, body)
            .catch(this._exceptionService.catchBadResponse)
            .finally(function () { return _this._spinnerService.hide(); });
    };
    VehicleService = __decorate([
        core_1.Injectable()
    ], VehicleService);
    return VehicleService;
})();
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle.service.js.map