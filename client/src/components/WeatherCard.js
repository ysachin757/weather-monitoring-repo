import React from 'react';

const WeatherCard = ({ city, main, temp, feels_like, dt }) => {
    const date = new Date(dt * 1000);
    const formattedDate = `${date.toDateString()} ${date.toLocaleTimeString()}`;

    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <p><strong>Condition:</strong> {main}</p>
            <p><strong>Temperature:</strong> {temp.toFixed(2)} °C</p>
            <p><strong>Feels Like:</strong> {feels_like.toFixed(2)} °C</p>
            <p><strong>Last Updated:</strong> {formattedDate}</p>
        </div>
    );
};

export default WeatherCard;