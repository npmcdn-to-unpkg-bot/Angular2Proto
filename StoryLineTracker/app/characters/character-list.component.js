var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var sort_characters_pipe_1 = require('./sort-characters.pipe');
var blocks_1 = require('../blocks/blocks');
var CharacterListComponent = (function () {
    function CharacterListComponent(_characterService, _filterService) {
        this._characterService = _characterService;
        this._filterService = _filterService;
        this.filteredCharacters = this.characters;
    }
    CharacterListComponent.prototype.filterChanged = function (searchText) {
        this.filteredCharacters = this._filterService.filter(searchText, ['id', 'name', 'side'], this.characters);
    };
    CharacterListComponent.prototype.getCharacters = function () {
        var _this = this;
        this.characters = [];
        this._characterService.getCharacters()
            .subscribe(function (characters) {
            _this.characters = _this.filteredCharacters = characters;
            _this.filterComponent.clear();
        });
    };
    CharacterListComponent.prototype.ngOnDestroy = function () {
        this._dbResetSubscription.unsubscribe();
    };
    CharacterListComponent.prototype.ngOnInit = function () {
        var _this = this;
        componentHandler.upgradeDom();
        this.getCharacters();
        this._dbResetSubscription = this._characterService.onDbReset
            .subscribe(function () { return _this.getCharacters(); });
    };
    __decorate([
        core_1.ViewChild(blocks_1.FilterTextComponent)
    ], CharacterListComponent.prototype, "filterComponent", void 0);
    CharacterListComponent = __decorate([
        core_1.Component({
            selector: 'story-characters',
            templateUrl: './app/characters/character-list.component.html',
            directives: [blocks_1.FilterTextComponent, router_1.ROUTER_DIRECTIVES],
            styleUrls: ['./app/characters/character-list.component.css'],
            pipes: [sort_characters_pipe_1.SortCharactersPipe],
            providers: [blocks_1.FilterService]
        })
    ], CharacterListComponent);
    return CharacterListComponent;
})();
exports.CharacterListComponent = CharacterListComponent;
//# sourceMappingURL=character-list.component.js.map