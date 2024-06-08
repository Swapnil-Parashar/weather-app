import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const WeatherCard = ({ title, value, unit }) => {
  return (
    <Card sx={{ backgroundColor: '#748cf1', padding: 2, borderRadius: "20px", color: "#fff" }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">
          {value} {unit}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
