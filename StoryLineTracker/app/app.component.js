var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
require('rxjs/Rx'); // load the full rxjs
var core_2 = require('a2-in-memory-web-api/core');
var in_memory_story_service_1 = require('../api/in-memory-story.service');
var characters_1 = require('./characters/characters');
var dashboard_1 = require('./dashboard/dashboard');
var vehicles_1 = require('./vehicles/vehicles');
var shared_1 = require('./shared/shared');
var blocks_1 = require('./blocks/blocks');
var AppComponent = (function () {
    function AppComponent(_messageService, _modalService) {
        this._messageService = _messageService;
        this._modalService = _modalService;
        this.menuItems = [
            { caption: 'Dashboard', link: ['Dashboard'] },
            { caption: 'Characters', link: ['Characters'] },
            { caption: 'Vehicles', link: ['Vehicles'] }
        ];
    }
    AppComponent.prototype.resetDb = function () {
        var _this = this;
        var msg = 'Are you sure you want to reset the database?';
        this._modalService.activate(msg).then(function (responseOK) {
            if (responseOK) {
                _this._messageService.resetDb();
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'story-app-power',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, blocks_1.ModalComponent, blocks_1.SpinnerComponent, blocks_1.ToastComponent],
            providers: [
                http_1.HTTP_PROVIDERS,
                core_1.provide(http_1.XHRBackend, { useClass: core_2.InMemoryBackendService }),
                core_1.provide(core_2.SEED_DATA, { useClass: in_memory_story_service_1.InMemoryStoryService }),
                core_1.provide(core_2.InMemoryBackendConfig, { useValue: { delay: 600 } }),
                router_1.ROUTER_PROVIDERS,
                characters_1.CharacterService,
                blocks_1.EntityService,
                blocks_1.ExceptionService,
                shared_1.MessageService,
                blocks_1.ModalService,
                blocks_1.SpinnerService,
                blocks_1.ToastService
            ]
        }),
        router_1.RouteConfig([
            { path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent, useAsDefault: true },
            { path: '/vehicles/...', name: 'Vehicles', component: vehicles_1.VehiclesComponent },
            { path: '/characters/...', name: 'Characters', component: characters_1.CharactersComponent },
        ])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map