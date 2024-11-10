import {Inject, Injectable} from "@tsed/di";
import { MARIADB_DATA_SOURCE } from "../datasources/MariadbDatasource";
import { MapLocation } from "../entities/location";
import { LOCATION_REPOSITORY } from "../repositories/LocationRepository";
import { Between, DataSource, Repository } from "typeorm";
@Injectable()
export class LocationsService {
    @Inject(LOCATION_REPOSITORY)
    protected  locationRepo: LOCATION_REPOSITORY;
    
    async createLocation(data:any){
        return await this.locationRepo.save(data); 
    }
    async getLocations(northeast:any,southwest:any){
        return await this.locationRepo.find({
            where: {
              latitude: Between(southwest.latitude, northeast.latitude),
              longitude: Between(southwest.longitude, northeast.longitude),
            },
          });
    }
}
