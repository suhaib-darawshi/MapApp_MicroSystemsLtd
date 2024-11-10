import {Controller, Inject} from "@tsed/di";
import {Get} from "@tsed/schema";
import { LocationsService } from "../../services/LocationsService";

@Controller("/hello-world")
export class HelloWorldController {
  constructor(@Inject(LocationsService)private locationService:LocationsService){}
  @Get("/")
  get() {
    // const locations = [
    //   {  name: 'Ramallah', latitude: 31.9038, longitude: 35.2034 },
    //   { name: 'Bethlehem', latitude: 31.7054, longitude: 35.2024 },
    //   {  name: 'Hebron', latitude: 31.5326, longitude: 35.0998 },
    //   {  name: 'Gaza City', latitude: 31.5013, longitude: 34.4660 },
    // ];
    // for(let i of locations){
    //   this.locationService.createLocation(i);
    // }
    // return this.locationService.getLocations();
  }
}
