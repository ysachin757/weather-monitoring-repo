import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import './App.css';

const App = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/weather');
                setWeatherData(response.data);
            } catch (error) {
                console.error("Error fetching weather data", error);
            }
        };

        fetchWeatherData();
    }, []);
    
    return (
        <div className="app">
            <h1>Real-Time Weather Monitoring</h1>
            <div className="weather-container">
                {weatherData.length > 0 ? (
                    weatherData.map((data, index) => (
                        <WeatherCard key={index} {...data} />
                    ))
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        </div>
    );
};

export default App;