const axios = require('axios');
const config = require('./config');

const fetchWeatherData = async () => {
    const cities = ['Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
    const apiKey = config.apiKey;
    const weatherData = [];

    for (const city of cities) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: city,
                    appid: apiKey,
                    units: 'metric' // Fetch data in Celsius
                }
            });
            weatherData.push({
                city,
                main: response.data.weather[0].main,
                temp: response.data.main.temp,
                feels_like: response.data.main.feels_like,
                dt: response.data.dt
            });
        } catch (error) {
            console.error(`Error fetching weather data for ${city}:`, error);
        }
    }

    return weatherData;
};

module.exports = {
    fetchWeatherData
};
