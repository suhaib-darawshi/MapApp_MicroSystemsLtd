import { MapLocation } from "../entities/location";
import { LOCATION_REPOSITORY } from "../repositories/LocationRepository";
export declare class LocationsService {
    protected locationRepo: LOCATION_REPOSITORY;
    createLocation(data: any): Promise<any>;
    getLocations(northeast: any, southwest: any, category: string): Promise<MapLocation[]>;
}
