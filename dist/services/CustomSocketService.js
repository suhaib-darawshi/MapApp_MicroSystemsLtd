"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSocketService = void 0;
const tslib_1 = require("tslib");
const di_1 = require("@tsed/di");
const socketio_1 = require("@tsed/socketio");
const SocketIO = tslib_1.__importStar(require("socket.io"));
const LocationsService_1 = require("./LocationsService");
let CustomSocketService = class CustomSocketService {
    io;
    locationService;
    nsp;
    clients = new Map();
    nspOther;
    constructor(io, locationService) {
        this.io = io;
        this.locationService = locationService;
    }
    setIo(io) {
        this.io = io;
    }
    $onNamespaceInit(nsp) { }
    $onConnection(socket, session) {
        console.log("user");
        socket.on("setId", (data) => {
            console.log(data);
            this.clients.set(data.id, socket);
        });
        socket.on("View Changed", async (data) => {
            const locations = await this.locationService.getLocations(data.northeast, data.southwest, data.category);
            if (locations.length != 0) {
                socket.emit("New Locations", locations);
            }
        });
    }
    $onDisconnect(socket) {
        this.clients.forEach((sockett, id) => {
            if (socket.id == sockett.id) {
                this.clients.delete(id);
                console.log(`${id} has disconnected`);
            }
        });
    }
};
exports.CustomSocketService = CustomSocketService;
tslib_1.__decorate([
    socketio_1.Nsp,
    tslib_1.__metadata("design:type", SocketIO.Namespace)
], CustomSocketService.prototype, "nsp", void 0);
tslib_1.__decorate([
    (0, socketio_1.Nsp)("/"),
    tslib_1.__metadata("design:type", SocketIO.Namespace)
], CustomSocketService.prototype, "nspOther", void 0);
tslib_1.__decorate([
    tslib_1.__param(0, socketio_1.Socket),
    tslib_1.__param(1, socketio_1.SocketSession),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SocketIO.Socket, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], CustomSocketService.prototype, "$onConnection", null);
tslib_1.__decorate([
    tslib_1.__param(0, socketio_1.Socket),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SocketIO.Socket]),
    tslib_1.__metadata("design:returntype", void 0)
], CustomSocketService.prototype, "$onDisconnect", null);
exports.CustomSocketService = CustomSocketService = tslib_1.__decorate([
    (0, socketio_1.SocketService)("socket"),
    tslib_1.__param(0, (0, socketio_1.IO)()),
    tslib_1.__param(1, (0, di_1.Inject)(LocationsService_1.LocationsService)),
    tslib_1.__metadata("design:paramtypes", [SocketIO.Server, LocationsService_1.LocationsService])
], CustomSocketService);
//# sourceMappingURL=CustomSocketService.js.map