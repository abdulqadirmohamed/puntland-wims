"use client"
import React, { useEffect } from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

// Fix for default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
const polyline = [
    [8.26792, 46.86915],
    [8.04382, 47.982903],
    [7.748198, 47.85507],
]

const TestMap = () => {
    const limeOptions = { color: 'lime' }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            require('leaflet');
        }
    }, []);
    const markers = [
        { position: [9.562389, 45.533250], popup: 'Garowe' },
        { position: [8.416667, 48.483333], popup: 'Galkayo' },
        { position: [9.683333, 47.966667], popup: 'Qardho' },
        // Add more markers as needed
    ];

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
                    <Marker position={[8.404560, 48.486000]}>
                        <Popup>
                            Somalia
                        </Popup>
                    </Marker>
                    <Marker position={[8.132024, 47.921896]}>
                        <Popup>
                            Galkacyo
                        </Popup>
                    </Marker>
                    <Polyline pathOptions={limeOptions} positions={polyline} />
                </MapContainer>
            </div>
        </div>
    )
}

export default TestMap