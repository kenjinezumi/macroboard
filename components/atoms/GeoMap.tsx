import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    ResponsiveContainer
  } from "recharts";




  export default function geoMap() {
    // Default coordinates set to Oslo central station
    let position: LatLngExpression = [59.91174337077401, 10.750425582038146];
    let zoom: number = 15;
    
  
    return (


        <div className="container-fluid d-flex flex-column h-100">
        <div className="text-center h-100">
          <div className="card h-75">
            <div className="card-body h-100">
              <h5 className="card-title"></h5>
              <MapContainer id="geomap" center={position} zoom={zoom} scrollWheelZoom={false}>
                    <TileLayer attribution="&copy; 
 							<a href='http://osm.org/copyright'>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> 
                          { 
                         }           </MapContainer>
            </div>
          </div>
        </div>
      </div>





     
    );
  }
