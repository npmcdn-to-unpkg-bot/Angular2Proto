var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var character_component_1 = require('./character.component');
var character_list_component_1 = require('./character-list.component');
var CharactersComponent = (function () {
    function CharactersComponent() {
    }
    CharactersComponent = __decorate([
        core_1.Component({
            selector: 'story-characters-root',
            template: "\n    <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Characters', component: character_list_component_1.CharacterListComponent, useAsDefault: true },
            { path: '/list/:id', name: 'Characters', component: character_list_component_1.CharacterListComponent },
            { path: '/:id', name: 'Character', component: character_component_1.CharacterComponent }
        ])
    ], CharactersComponent);
    return CharactersComponent;
})();
exports.CharactersComponent = CharactersComponent;
//# sourceMappingURL=characters.component.js.map