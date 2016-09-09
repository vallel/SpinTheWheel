"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var wheel_component_1 = require("./wheel.component");
var option_service_1 = require("./option.service");
var options_table_component_1 = require("./options-table.component");
var AppComponent = (function () {
    /**
     * @param {OptionService} optionService
     */
    function AppComponent(optionService) {
        this.optionService = optionService;
        this.showConfig = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.options = this.getOptions();
    };
    /**
     * @returns {Option[]}
     */
    AppComponent.prototype.getOptions = function () {
        return this.optionService.getOptions();
    };
    AppComponent.prototype.toggleConfigPanel = function () {
        this.showConfig = !this.showConfig;
    };
    __decorate([
        core_1.ViewChild(wheel_component_1.WheelComponent), 
        __metadata('design:type', wheel_component_1.WheelComponent)
    ], AppComponent.prototype, "wheel", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/app.html',
            directives: [options_table_component_1.OptionsTableComponent, wheel_component_1.WheelComponent],
            providers: [option_service_1.OptionService]
        }), 
        __metadata('design:paramtypes', [option_service_1.OptionService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map