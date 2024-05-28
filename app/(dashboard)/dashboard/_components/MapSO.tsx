// components/Map.tsx
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapSO = () => {
  // Define the bounding box coordinates for Germany
  const bounds: [[number, number],[number, number]] = [
    [5.00423286178228, 46.75988173734297],
    [-0.7022655800258433, 41.39855374483383],
  ];

  return (
    <MapContainer bounds={bounds} style={{ height: '50vh', width: '100%' }} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapSO;
