import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'leaflet';

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

    // 创建一个自定义图标
    const CustomMarkerIcon = L.divIcon({
        className: "custom-marker-icon", // 自定义类，便于CSS样式化
        html: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 56" width="46" height="56">
            <path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/>
          </svg>`, // SVG 图标
        iconSize: [46, 56], // 图标大小
        iconAnchor: [23, 56], // 图标的锚点，以图标底部居中对齐
        popupAnchor: [0, -56] // 弹出窗口的锚点位置
      });

      // 使用自定义图标创建一个标记
    var marker = L.marker([(data.location && data.location.lat) || 51.5, 
            (data.location && data.location.lng) || -0.09], {icon: CustomMarkerIcon}).addTo(map);

    // Clean-up function
    return () => {
      // When the component is unmounted, remove the map
      map.remove();
    };
  }, [data.location]); // Update the dependency array to just data.location

  return <div className='lowerPart'>
          <div id="mapPart">
          </div>
        </div>; // Ensure you set a height for the map container
}

export default LowerPart;
