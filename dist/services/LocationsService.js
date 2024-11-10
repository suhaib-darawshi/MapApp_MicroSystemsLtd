"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsService = void 0;
const tslib_1 = require("tslib");
const di_1 = require("@tsed/di");
const LocationRepository_1 = require("../repositories/LocationRepository");
const typeorm_1 = require("typeorm");
let LocationsService = class LocationsService {
    locationRepo;
    async createLocation(data) {
        return await this.locationRepo.save(data);
    }
    async getLocations(northeast, southwest) {
        return await this.locationRepo.find({
            where: {
                latitude: (0, typeorm_1.Between)(southwest.latitude, northeast.latitude),
                longitude: (0, typeorm_1.Between)(southwest.longitude, northeast.longitude),
            },
        });
    }
};
exports.LocationsService = LocationsService;
tslib_1.__decorate([
    (0, di_1.Inject)(LocationRepository_1.LOCATION_REPOSITORY),
    tslib_1.__metadata("design:type", Object)
], LocationsService.prototype, "locationRepo", void 0);
exports.LocationsService = LocationsService = tslib_1.__decorate([
    (0, di_1.Injectable)()
], LocationsService);
//# sourceMappingURL=LocationsService.js.map