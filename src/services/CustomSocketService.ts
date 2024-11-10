import { Inject } from "@tsed/di";
import {IO, Nsp, Socket, SocketService, SocketSession} from "@tsed/socketio";
import * as SocketIO from "socket.io";
import { LocationsService } from "./LocationsService";
interface Client {
    sensors:string[]
    id: string;
  }
  
@SocketService("socket")
export class CustomSocketService {
    @Nsp nsp: SocketIO.Namespace;
    private clients: Map<string, SocketIO.Socket> = new Map();
  @Nsp("/")
  nspOther: SocketIO.Namespace; 

  constructor(@IO() private io: SocketIO.Server,@Inject(LocationsService)private locationService:LocationsService) {}
  setIo(io:SocketIO.Server){
    this.io=io;
  }
  $onNamespaceInit(nsp: SocketIO.Namespace) {}
  $onConnection(@Socket socket: SocketIO.Socket, @SocketSession session: SocketSession) {
    console.log("user");
    socket.on("setId", (data: Client) => {
      console.log(data)
        this.clients.set(data.id, socket);
    });
    socket.on("View Changed",async(data:any)=>{
      const locations=await this.locationService.getLocations(data.northeast,data.southwest);
      if(locations.length!=0){
        socket.emit("New Locations",locations);
      }
    });
  }
  $onDisconnect(@Socket socket: SocketIO.Socket) {
    this.clients.forEach((sockett, id) =>{
        if(socket.id==sockett.id){
            this.clients.delete(id);
            console.log(`${id} has disconnected`);
        }
    });
  }
  
}
