"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MariadbDataSource = exports.MARIADB_DATA_SOURCE = void 0;
const di_1 = require("@tsed/di");
const typeorm_1 = require("typeorm");
const logger_1 = require("@tsed/logger");
const location_1 = require("../entities/location");
exports.MARIADB_DATA_SOURCE = Symbol.for("MariadbDataSource");
exports.MariadbDataSource = new typeorm_1.DataSource({
    type: "mariadb",
    entities: [location_1.MapLocation],
    host: process.env.DB_HOST ?? "localhost",
    port: parseInt(process.env.DB_PORT ?? "3306"),
    username: process.env.DB_USER ?? "map_user",
    password: process.env.DB_PASSWORD ?? "123",
    database: process.env.DP_DATABASE_NAME ?? "map_app",
    synchronize: true,
});
(0, di_1.registerProvider)({
    provide: exports.MARIADB_DATA_SOURCE,
    type: "typeorm:datasource",
    deps: [logger_1.Logger],
    async useAsyncFactory(logger) {
        await exports.MariadbDataSource.initialize();
        logger.info("Connected with typeorm to database: Mariadb");
        return exports.MariadbDataSource;
    },
    hooks: {
        $onDestroy(dataSource) {
            return dataSource.isInitialized && dataSource.close();
        }
    }
});
//# sourceMappingURL=MariadbDatasource.js.map