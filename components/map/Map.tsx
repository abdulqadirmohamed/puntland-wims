"use client"
import React, { useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";

// Fix for default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const markers = [
    {
        geocode: [8.8278, 48.8853],
        popUp: "Cuun"
        
    },
    {
        geocode: [9.7826, 49.7291],
        popUp: "RakoRaaxo"
    },
    {
        geocode: [9.7480, 48.8251],
        popUp: "Boodacad"
    },
    {
        geocode: [9.4871, 49.0677],
        popUp: "Village: Aada"
    },
    {
        geocode: [8.518086704762542, 47.39797973706723],
        popUp: "Goojacade"
    },
    {
        geocode: [9.149055648420772, 48.41994529947418],
        popUp: "Taleex"
    },
];

const TestMap = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            require('leaflet');
        }
    }, []);

    return (
        <div>
            <div className='flex'>
                <h5>Map</h5>
                <span>30</span>
            </div>
            <div className='my-5'>
                <MapContainer
                    center={[8.3676771, 49.083416]}
                    scrollWheelZoom={true}

                    zoom={6}
                    style={{ height: '70vh', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MarkerClusterGroup>
                        {markers.map((marker) => (
                            <Marker position={marker.geocode}>
                                <Popup>
                                    {marker.popUp}
                                </Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
        </div>
    )
}

export default TestMap