import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import LoadingSpinner from "./components/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import "./App.css";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const DEFAULT_LOCATION = "New Delhi";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const initialFetchRef = useRef(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const fetchWeather = async (location) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
        toast.success("Location found!");
      } else {
        toast.error("Location not found!");
      }
    } catch (error) {
      toast.error("Error fetching weather data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (initialFetchRef.current) {
      fetchWeather(DEFAULT_LOCATION);
      initialFetchRef.current = false;
    }
  }, []);

  return (
    <Box className={isDarkMode ? "app dark-mode" : "app light-mode"}>
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Container maxWidth="xxl" sx={{paddingTop: 2}}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <WeatherForm
                  fetchWeather={fetchWeather}
                  weatherData={weatherData}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <WeatherDisplay weatherData={weatherData} />
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default App;
