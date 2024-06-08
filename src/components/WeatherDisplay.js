import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WeatherCard from "./WeatherCard";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { main, weather, wind, visibility } = weatherData;

  const weatherInfo = [
    { title: "Wind", value: wind.speed, unit: "km/h" },
    { title: "Humidity", value: main.humidity, unit: "%" },
    { title: "Real Feel", value: main.feels_like, unit: "°C" },
    { title: "Pressure", value: main.pressure, unit: "hPa" },
    { title: "Temp Min", value: Math.round(main.temp_min), unit: "°C" },
    { title: "Temp Max", value: Math.round(main.temp_max), unit: "°C" },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={4}>
        {weatherInfo.map((info, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            <WeatherCard title={info.title} value={info.value} unit={info.unit} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeatherDisplay;
