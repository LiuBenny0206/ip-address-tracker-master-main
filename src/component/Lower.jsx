import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function LowerPart() {
  useEffect(() => {
    // 创建地图实例
    const map = L.map('mapPart').setView([51.505, -0.09], 13);

    // 添加瓦片层
    const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 清理函数
    return () => {
      // 当组件卸载时移除地图
      map.remove();
    };
  }, []);

  return <div id="mapPart"></div>;
}

export default LowerPart;
