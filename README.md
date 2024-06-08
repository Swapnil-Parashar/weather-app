# Weather App

A React-based weather application that fetches and displays current weather data for a specified location. The application uses the OpenWeatherMap API to retrieve weather data and supports light and dark themes. The UI is built with Material-UI for responsive and aesthetic design.

## Features

- Search for weather data by location
- Display current temperature, weather conditions, wind speed, humidity, and more
- Light and dark mode toggle
- Responsive design using Material-UI
- Toast notifications for success and error messages

## Technologies Used

- React
- Material-UI
- OpenWeatherMap API
- React Toastify

## Prerequisites

- Node.js and npm installed
- An API key from OpenWeatherMap

## Getting Started

### Instructions on how to run the application locally

1. **Fork the repository to your github**

2. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

3. **Install dependencies**

   ```sh
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```sh
   REACT_APP_WEATHER_API_KEY=your_openweather_api_key
   ```

5. **Run the application**

   ```sh
   npm start
   ```

   The application will start on `http://localhost:3000`.

## Approach and Technologies Used

### Approach

- **React**: Utilized for building the user interface and managing component state.
- **Material-UI**: Chosen for its rich set of components and easy theming to create a responsive and attractive UI.
- **OpenWeatherMap API**: Used to fetch current weather data based on the user's input location.
- **React Toastify**: Implemented for displaying toast notifications for success and error messages.


## Known Issues or Limitations

- **API Rate Limiting**: The OpenWeatherMap API has rate limits, which might restrict the number of requests you can make within a certain timeframe.
- **Error Handling**: The application currently handles basic errors, but additional error handling might be necessary for a production environment.
- **Performance**: The initial loading time might be noticeable if the API request is slow. Implementing caching could improve this.

