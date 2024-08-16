const express = require('express');
const cors = require('cors'); // Import cors
const weatherService = require('./weatherService');
const summaryService = require('./summaryService');
const alertService = require('./alertService');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

let latestWeatherData = [];


setInterval(async () => {
    const weatherData = await weatherService.fetchWeatherData();
    summaryService.processWeatherData(weatherData);
    alertService.checkAlerts(weatherData);
    latestWeatherData = weatherData;
}, 300000);

app.get('/api/weather', (req, res) => {
    res.json(latestWeatherData);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
