import { MapLocation } from "../entities/location";
export declare const LocationRepository: import("typeorm").Repository<MapLocation>;
export declare const LOCATION_REPOSITORY: unique symbol;
export type LOCATION_REPOSITORY = typeof LocationRepository;
