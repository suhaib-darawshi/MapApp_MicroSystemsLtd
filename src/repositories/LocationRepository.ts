import {Injectable, registerProvider} from "@tsed/di";
import { MariadbDataSource } from "../datasources/MariadbDatasource";
import { MapLocation } from "../entities/location";
import {DataSource} from "typeorm";

export const LocationRepository = MariadbDataSource.getRepository(MapLocation);
export const LOCATION_REPOSITORY = Symbol.for("LocationRepository");
export type LOCATION_REPOSITORY = typeof LocationRepository;

registerProvider({
  provide: LOCATION_REPOSITORY,
  useValue: LocationRepository
});
