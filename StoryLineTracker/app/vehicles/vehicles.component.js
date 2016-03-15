var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var vehicle_list_component_1 = require('./vehicle-list.component');
var vehicle_component_1 = require('./vehicle.component');
var vehicle_service_1 = require('./vehicle.service');
var VehiclesComponent = (function () {
    function VehiclesComponent() {
    }
    VehiclesComponent = __decorate([
        core_1.Component({
            selector: 'story-vehicles-root',
            template: "\n    <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [vehicle_service_1.VehicleService]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Vehicles', component: vehicle_list_component_1.VehicleListComponent, useAsDefault: true },
            { path: '/list/:id', name: 'Vehicles', component: vehicle_list_component_1.VehicleListComponent },
            { path: '/:id', name: 'Vehicle', component: vehicle_component_1.VehicleComponent }
        ])
    ], VehiclesComponent);
    return VehiclesComponent;
})();
exports.VehiclesComponent = VehiclesComponent;
//# sourceMappingURL=vehicles.component.js.map