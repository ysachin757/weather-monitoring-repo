# Real-Time Weather Monitoring System

## Overview

This project is a Real-Time Weather Monitoring System that fetches weather data from the OpenWeatherMap API and displays it on a web application. The backend, built with Node.js and Express, periodically fetches weather data for major Indian cities and provides it through an API. The frontend, built with React, displays the weather data in real-time.

## Features

- Real-time weather data for Mumbai, Chennai, Bangalore, Kolkata, and Hyderabad
- Data visualization with weather cards
- Error handling and loading states

## Technologies Used

- **Backend**: Node.js, Express, Axios
- **Frontend**: React, Axios
- **API**: OpenWeatherMap API

## Setup and Installation

### Prerequisites

- Node.js
- npm or yarn

### Backend Setup

1. Navigate to the `server` directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory and add your OpenWeatherMap API key:

    ```plaintext
    API_KEY=your_openweathermap_api_key
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `client` directory:

    ```bash
    cd ../client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend application:

    ```bash
    npm start
    ```

## Running the Application

1. Ensure the backend server is running at `http://localhost:3001`.
2. Ensure the frontend application is running at `http://localhost:3000`.

Open your browser and navigate to `http://localhost:3000` to view the weather monitoring system.

## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
