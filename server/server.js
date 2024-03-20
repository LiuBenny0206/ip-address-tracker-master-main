require('dotenv').config();

const axios = require('axios');

const YOUR_API_KEY = process.env.API_KEY;

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

// 實際的路由處理器
const handler = async (req, res) => {
  const ip = req.query.ip;
  console.log(`Fetching info for IP: ${ip}`);
  try {
      // 確保你有一個有效的 API 密鑰，並且正確地存儲和引用它
        const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Z4jCuBFSlAmVcjb8PGoi2xRO04wrf&ipAddress=${encodeURIComponent(ip)}`);
      res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = allowCors(handler);
