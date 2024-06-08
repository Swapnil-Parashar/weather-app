import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const WeatherForm = ({ fetchWeather, weatherData }) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(location);
  };

  if (!weatherData) return null;

  const { main, weather, wind, sys } = weatherData;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        height: "80vh",
        width: "100%",
        padding: 2,
        marginTop: 2,
      }}
    >
      <TextField
        variant="outlined"
        label="Enter the location"
        placeholder="New Delhi"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
        gutterBottom
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "20px",
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#748cf1",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#748cf1",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#748cf1",
            },
          },
        }}
      />
      {weatherData && (
        <>
          <Box
            component="img"
            sx={{
              width: 120,
              height: 120,
              backgroundColor: "#748cf1",
              borderRadius: "20px",
              padding: 1,
              marginTop: 2,
            }}
            src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt={weatherData.description}
          />
          <Typography variant="h2" component="div" gutterBottom>
            {Math.round(main.temp)}°C
          </Typography>
          <Typography variant="h4" component="div" gutterBottom>
            {weather[0].main}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {weatherData.name}, {sys.country}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default WeatherForm;
