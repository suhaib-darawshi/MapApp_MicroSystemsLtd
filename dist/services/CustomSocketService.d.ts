import { SocketSession } from "@tsed/socketio";
import * as SocketIO from "socket.io";
import { LocationsService } from "./LocationsService";
export declare class CustomSocketService {
    private io;
    private locationService;
    nsp: SocketIO.Namespace;
    private clients;
    nspOther: SocketIO.Namespace;
    constructor(io: SocketIO.Server, locationService: LocationsService);
    setIo(io: SocketIO.Server): void;
    $onNamespaceInit(nsp: SocketIO.Namespace): void;
    $onConnection(socket: SocketIO.Socket, session: SocketSession): void;
    $onDisconnect(socket: SocketIO.Socket): void;
}
