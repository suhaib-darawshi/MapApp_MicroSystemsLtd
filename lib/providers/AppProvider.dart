import 'dart:developer';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:map_app/API/SocketService.dart';

class AppProvider extends ChangeNotifier {
  late GoogleMapController mapController;
  LatLng initialPosition = const LatLng(32.2211, 35.2544);
  Set<Marker> markers = {};
  LatLngBounds? currentView;
  List<LatLngBounds> viewedBounds = [];
  bool loading = true;
  AppProvider() {
    SocketService.socketService.onNewLocations = (List data) {
      markers.addAll(data.map((e) => Marker(
          markerId: MarkerId(e['id'].toString()),
          position: LatLng(
            e['latitude'],
            e['longitude'],
          ),
          infoWindow: InfoWindow(title: e['name']))));
      // log(markers.length.toString());
      notifyListeners();
    };
    SocketService.socketService.connectToServer();
    getCurrentLocation();
    notifyListeners();
  }
  void onCameraIdle() async {
    final view = await mapController.getVisibleRegion();
    if (currentView != view) {
      currentView = view;
      for (int i = 0; i < viewedBounds.length; i++) {
        if (viewedBounds[i].southwest.latitude <= view.southwest.latitude &&
            viewedBounds[i].southwest.longitude <= view.southwest.longitude &&
            viewedBounds[i].northeast.latitude >= view.northeast.latitude &&
            viewedBounds[i].northeast.longitude >= view.northeast.longitude) {
          return;
        }
        if (viewedBounds[i].southwest.latitude == view.southwest.latitude &&
            viewedBounds[i].northeast.latitude == view.southwest.latitude &&
            view.southwest.longitude < viewedBounds[i].northeast.longitude &&
            view.northeast.longitude > viewedBounds[i].southwest.longitude) {
          viewedBounds[i] = LatLngBounds(
              southwest: LatLng(
                  min(viewedBounds[i].southwest.latitude,
                      view.southwest.latitude),
                  min(viewedBounds[i].southwest.longitude,
                      view.southwest.longitude)),
              northeast: LatLng(
                  max(viewedBounds[i].southwest.latitude,
                      view.southwest.latitude),
                  max(viewedBounds[i].southwest.longitude,
                      view.southwest.longitude)));
          getMarkers(view);
          return;
        } else if (viewedBounds[i].southwest.longitude ==
                view.southwest.longitude &&
            viewedBounds[i].northeast.longitude == view.southwest.longitude &&
            view.southwest.latitude < viewedBounds[i].northeast.latitude &&
            view.northeast.latitude > viewedBounds[i].southwest.latitude) {
          viewedBounds[i] = LatLngBounds(
              southwest: LatLng(
                  min(viewedBounds[i].southwest.latitude,
                      view.southwest.latitude),
                  min(viewedBounds[i].southwest.longitude,
                      view.southwest.longitude)),
              northeast: LatLng(
                  max(viewedBounds[i].southwest.latitude,
                      view.southwest.latitude),
                  max(viewedBounds[i].southwest.longitude,
                      view.southwest.longitude)));
          getMarkers(view);
          return;
        }
      }
      viewedBounds.add(view);
      getMarkers(view);
    }
  }

  getCurrentLocation() async {
    bool serviceEnabled;
    LocationPermission permission;
    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      loading = false;
      return Future.error('Location services are disabled.');
    }
    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        loading = false;
        return Future.error('Location permissions are denied');
      }
    }
    if (permission == LocationPermission.deniedForever) {
      loading = false;
      return Future.error(
          'Location permissions are permanently denied, we cannot request permissions.');
    }
    loading = false;
    var position = await Geolocator.getCurrentPosition();
    initialPosition = LatLng(position.latitude, position.longitude);
    // log(initialPosition.toString());
    notifyListeners();
  }

  getMarkers(LatLngBounds view) {
    SocketService.socketService.viewChanged(<String, dynamic>{
      "northeast": {
        "latitude": view.northeast.latitude,
        "longitude": view.northeast.longitude
      },
      "southwest": {
        "latitude": view.southwest.latitude,
        "longitude": view.southwest.longitude
      }
    });
  }
}
