import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function LowerPart({ data }) {
  useEffect(() => {
    // Initialize the map with default or actual location
    var map = L.map('mapPart').setView([
      (data.location && data.location.lat) || 51.505,
      (data.location && data.location.lng) || -0.09
    ], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a circle marker at the location
    var circle = L.circle([
      (data.location && data.location.lat) || 51.505,
      (data.location && data.location.lng) || -0.09
    ], {
      color: 'black',
      fillColor: 'white',
      fillOpacity: 0.5,
      radius: 200
    }).addTo(map);

    // Clean-up function
    return () => {
      // When the component is unmounted, remove the map
      map.remove();
    };
  }, [data.location]); // Update the dependency array to just data.location

  return <div id="mapPart" ></div>; // Ensure you set a height for the map container
}

export default LowerPart;
