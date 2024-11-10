import { LocationsService } from "../../services/LocationsService";
export declare class HelloWorldController {
    private locationService;
    constructor(locationService: LocationsService);
    get(): void;
}
