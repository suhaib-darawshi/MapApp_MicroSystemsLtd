import 'dart:developer';

import 'package:socket_io_client/socket_io_client.dart' as IO;

import '../constants.dart';

class SocketService{
  SocketService._();
  static final SocketService socketService = SocketService._();
  IO.Socket? _socket;
  late final Function onNewLocations;
  connectToServer(){
    _socket?.disconnect();
    _socket = IO.io("${server}/socket", <String, dynamic>{
      'transports': ['websocket'],
      'path': '/socket.io/socket',
    });
    _socket?.onConnect((_) {
      log("Connected to server");
    });
    _socket?.onDisconnect((_) {
      log("Disconnected from server");
    });
    _socket?.on('New Locations', (data) {
      onNewLocations(data);
    });
  }
  viewChanged(Map<String,dynamic>map){
    _socket?.emit('View Changed', map);
  }
  disconnect(){
    _socket?.disconnect();
  }
}