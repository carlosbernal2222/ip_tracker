import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapView({ data }) {
    const mapRef = useRef(null); // Reference to store the map instance
    const markerRef = useRef(null); // Reference to store the marker instance

    useEffect(() => {
        if (!mapRef.current) {
            // Initialize the map only if it doesn't already exist
            mapRef.current = L.map('mapid').setView([data.lat, data.lng], 13);

            // Add OpenStreetMap tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors'
            }).addTo(mapRef.current);
        } else {
            // Update the map's center if the coordinates change
            mapRef.current.setView([data.lat, data.lng], 13);
        }

        // Add/update a marker on the map
        if (markerRef.current) {
            // Update the marker's position
            markerRef.current.setLatLng([data.lat, data.lng]);
        } else {
            // Add a new marker to the map
            markerRef.current = L.marker([data.lat, data.lng]).addTo(mapRef.current);
        }

        // Cleanup function to remove the map and marker
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [data.lat, data.lng]); // Dependency array

    return (
        <section className="map--container">
            <div id="mapid" style={{ width: '600px', height: '400px' }}></div>
        </section>
    );
}
