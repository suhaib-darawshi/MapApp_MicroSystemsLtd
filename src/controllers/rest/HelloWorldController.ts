import {Controller, Inject} from "@tsed/di";
import {Get} from "@tsed/schema";
import { LocationsService } from "../../services/LocationsService";

@Controller("/hello-world")
export class HelloWorldController {
  constructor(@Inject(LocationsService)private locationService:LocationsService){}
  @Get("/")
  get() {
    // const locations = [
    //   {  name: 'Ramallah', latitude: 31.9038, longitude: 35.2034 ,category:"Electronics"},
    //   { name: 'Bethlehem', latitude: 31.7054, longitude: 35.2024 ,category:"Electronics"},
    //   {  name: 'Hebron', latitude: 31.5326, longitude: 35.0998 ,category:"Electronics"},
    //   {  name: 'Gaza City', latitude: 31.5013, longitude: 34.4660 ,category:"Electronics"},
    //   {  name: 'Ramallah', latitude: 31.8038, longitude: 35.3034 ,category:"Clothes"},
    //   { name: 'Bethlehem', latitude: 31.6054, longitude: 35.3024 ,category:"Clothes"},
    //   {  name: 'Hebron', latitude: 31.4326, longitude: 35.1998 ,category:"Clothes"},
    //   {  name: 'Gaza City', latitude: 31.6013, longitude: 34.5660 ,category:"Clothes"},
    // ];
    // for(let i of locations){
    //   this.locationService.createLocation(i);
    // }
    // return this.locationService.getLocations();
  }
}
