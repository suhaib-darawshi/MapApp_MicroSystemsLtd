import {registerProvider} from "@tsed/di";
import {DataSource} from "typeorm";
import {Logger} from "@tsed/logger";
import { MapLocation } from "../entities/location";

export const MARIADB_DATA_SOURCE = Symbol.for("MariadbDataSource");
export const MariadbDataSource = new DataSource({
  type: "mariadb",
  entities: [MapLocation],
  host: "localhost",
  port: 3306,
  username: "map_user",
  password: "123",
  database: "map_app",
  synchronize: true,
});

registerProvider<DataSource>({
  provide: MARIADB_DATA_SOURCE,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await MariadbDataSource.initialize();

    logger.info("Connected with typeorm to database: Mariadb");
    return MariadbDataSource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.close();
    }
  }
});
