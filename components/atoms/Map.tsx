import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import 'leaflet/dist/leaflet.css';





export default function LeafLetChart() {
    // Default coordinates set to Oslo central station
    let position: LatLngExpression = [59.91174337077401, 10.750425582038146];
    let zoom: number = 15;
    
  
    return (
      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          // Placeholder, we'll put our markers here
        }
      </MapContainer>
    );
  }