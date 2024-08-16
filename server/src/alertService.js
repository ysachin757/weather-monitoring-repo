const checkAlerts = (weatherData) => {
    weatherData.forEach(data => {
        if (data.temp > 35) {
            console.log(`Alert! High temperature in ${data.city}: ${data.temp}°C`);
        }
    });
};

module.exports = {
    checkAlerts
};
