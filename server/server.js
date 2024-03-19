require('dotenv').config();

const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors({
    origin: 'https://ip-address-tracker-master-main.vercel.app' // 只允许 localhost:3000 来的跨域请求
  }));

  app.get('/get-ip-info', async (req, res) => {
    const ip = req.query.ip;
    console.log(`Fetching info for IP: ${ip}`); // 記錄 IP 信息
    try {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${YOUR_API_KEY}&ipAddress=${encodeURIComponent(ip)}`);
        console.log('Data received:', response.data); // 記錄收到的數據
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: error.message });
    }
  });



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
