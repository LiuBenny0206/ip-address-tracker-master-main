require('dotenv').config();

const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

const YOUR_API_KEY = process.env.API_KEY;

 app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

  app.get('/get-ip-info', async (req, res) => {
    const ip = req.query.ip;
    console.log(`Fetching info for IP: ${ip}`); // 記錄 IP 信息
    try {
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Z4jCuBFSlAmVcjb8PGoi2xRO04wrf&ipAddress=${encodeURIComponent(ip)}`);
        console.log(`Your API key is: ${YOUR_API_KEY}`);
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
