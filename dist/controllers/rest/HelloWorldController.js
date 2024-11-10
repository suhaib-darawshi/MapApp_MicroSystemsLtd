"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldController = void 0;
const tslib_1 = require("tslib");
const di_1 = require("@tsed/di");
const schema_1 = require("@tsed/schema");
const LocationsService_1 = require("../../services/LocationsService");
let HelloWorldController = class HelloWorldController {
    locationService;
    constructor(locationService) {
        this.locationService = locationService;
    }
    get() {
        // const locations = [
        //   {  name: 'Ramallah', latitude: 31.9038, longitude: 35.2034 ,category:"Electronics"},
        //   { name: 'Bethlehem', latitude: 31.7054, longitude: 35.2024 ,category:"Electronics"},
        //   {  name: 'Hebron', latitude: 31.5326, longitude: 35.0998 ,category:"Electronics"},
        //   {  name: 'Gaza City', latitude: 31.5013, longitude: 34.4660 ,category:"Electronics"},
        //   {  name: 'Ramallah', latitude: 31.8038, longitude: 35.3034 ,category:"Clothes"},
        //   { name: 'Bethlehem', latitude: 31.6054, longitude: 35.3024 ,category:"Clothes"},
        //   {  name: 'Hebron', latitude: 31.4326, longitude: 35.1998 ,category:"Clothes"},
        //   {  name: 'Gaza City', latitude: 31.6013, longitude: 34.5660 ,category:"Clothes"},
        // ];
        // for(let i of locations){
        //   this.locationService.createLocation(i);
        // }
        // return this.locationService.getLocations();
    }
};
exports.HelloWorldController = HelloWorldController;
tslib_1.__decorate([
    (0, schema_1.Get)("/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], HelloWorldController.prototype, "get", null);
exports.HelloWorldController = HelloWorldController = tslib_1.__decorate([
    (0, di_1.Controller)("/hello-world"),
    tslib_1.__param(0, (0, di_1.Inject)(LocationsService_1.LocationsService)),
    tslib_1.__metadata("design:paramtypes", [LocationsService_1.LocationsService])
], HelloWorldController);
//# sourceMappingURL=HelloWorldController.js.map