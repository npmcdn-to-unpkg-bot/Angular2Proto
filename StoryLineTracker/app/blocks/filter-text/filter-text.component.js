var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var FilterTextComponent = (function () {
    function FilterTextComponent() {
        this.changed = new core_1.EventEmitter();
        componentHandler.upgradeDom();
    }
    FilterTextComponent.prototype.clear = function () {
        this.filter = '';
    };
    FilterTextComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        console.log("Filter Changed: " + this.filter);
        this.changed.emit(this.filter);
    };
    __decorate([
        core_1.Output()
    ], FilterTextComponent.prototype, "changed", void 0);
    FilterTextComponent = __decorate([
        core_1.Component({
            selector: 'filter-text',
            templateUrl: 'app/blocks/filter-text/filter-text.component.html'
        })
    ], FilterTextComponent);
    return FilterTextComponent;
})();
exports.FilterTextComponent = FilterTextComponent;
//# sourceMappingURL=filter-text.component.js.map