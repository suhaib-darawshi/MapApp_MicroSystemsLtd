import {registerProvider} from "@tsed/di";
import {DataSource} from "typeorm";
import {Logger} from "@tsed/logger";
import { MapLocation } from "../entities/location";

export const MARIADB_DATA_SOURCE = Symbol.for("MariadbDataSource");
export const MariadbDataSource = new DataSource({
  type: "mariadb",
  entities: [MapLocation],
  host:process.env.DB_HOST?? "localhost",
  port:parseInt(process.env.DB_PORT??"3306"),
  username:process.env.DB_USER?? "map_user",
  password:process.env.DB_PASSWORD?? "123",
  database:process.env.DP_DATABASE_NAME?? "map_app",
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
