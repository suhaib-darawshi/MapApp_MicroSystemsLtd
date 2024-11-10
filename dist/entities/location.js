"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapLocation = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let MapLocation = class MapLocation {
    id;
    name;
    latitude;
    longitude;
    createdAt;
    updatedAt;
};
exports.MapLocation = MapLocation;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], MapLocation.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], MapLocation.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)("double"),
    tslib_1.__metadata("design:type", Number)
], MapLocation.prototype, "latitude", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)("double"),
    tslib_1.__metadata("design:type", Number)
], MapLocation.prototype, "longitude", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], MapLocation.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", Date)
], MapLocation.prototype, "updatedAt", void 0);
exports.MapLocation = MapLocation = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], MapLocation);
//# sourceMappingURL=location.js.map