"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCATION_REPOSITORY = exports.LocationRepository = void 0;
const di_1 = require("@tsed/di");
const MariadbDatasource_1 = require("../datasources/MariadbDatasource");
const location_1 = require("../entities/location");
exports.LocationRepository = MariadbDatasource_1.MariadbDataSource.getRepository(location_1.MapLocation);
exports.LOCATION_REPOSITORY = Symbol.for("LocationRepository");
(0, di_1.registerProvider)({
    provide: exports.LOCATION_REPOSITORY,
    useValue: exports.LocationRepository
});
//# sourceMappingURL=LocationRepository.js.map