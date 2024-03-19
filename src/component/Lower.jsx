import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function LowerPart({data}) {
  useEffect(() => {
    // Only initialize the map if data.location contains valid coordinates
    if (data.location.lat && data.location.lng) {
      var map = L.map('mapPart').setView([data.location.lat, data.location.lng], 13);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(map);

      var circle = L.circle([data.location.lat, data.location.lng], {
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
    }
  }, [data.location.lat, data.location.lng]); // Add lat and lng as dependencies
  

  return <div id="mapPart"></div>;
}

export default LowerPart;
