import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:map_app/providers/AppProvider.dart';
import 'package:provider/provider.dart';

class MapScreen extends StatelessWidget {
  const MapScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Consumer<AppProvider>(builder: (context, provider, x) {
      return Scaffold(
        appBar: AppBar(
            title: Row(
              children: [
                Expanded(
                  child: TextField(
                    onChanged: (value) => provider.searchMarkers(value),
                    decoration: InputDecoration(
                      hintText: "What are you looking for?",
                      prefixIcon: const Icon(Icons.search),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(8.0),
                      ),
                      filled: true,
                      fillColor: Colors.white,
                    ),
                  ),
                ),
                
              ],
            ),
            backgroundColor: Colors.transparent,
            elevation: 0,
          ),
        extendBodyBehindAppBar: true,
        body: provider.loading
            ? const Center(
                child: CircularProgressIndicator(),
              )
            : GoogleMap(
                onMapCreated: (c) {
                  provider.mapController = c;
                },
                initialCameraPosition:
                    CameraPosition(target: provider.initialPosition, zoom: 15),
                markers: provider.markers,
                onCameraIdle: provider.onCameraIdle,
              ),
      );
    });
  }
}
