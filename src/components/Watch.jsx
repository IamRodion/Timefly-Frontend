import React, { useState, useEffect } from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import "../styles/FrontFly.css";

const Watch = ({ onFormattedTimeChange }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);
      const formattedTime = formatTime(newTime);

      if (onFormattedTimeChange) {
        onFormattedTimeChange(formattedTime);
      }
    }, 1000);
    return () => clearInterval(timerID);
  }, [onFormattedTimeChange]);

  const formatTime = (date) => {
    const utcHours = date.getUTCHours();
    /*  const bogotaHours = (utcHours - 5 + 24) % 24; // Ajuste para UTC-5 */
    const hours = String(utcHours).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Grid2
      sx={{
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#6A4C93",
          fontFamily: "Roboto Mono, sans-serif",
          fontSize: "7vw", // Ajusta el tamaño de la fuente proporcionalmente al ancho de la ventana
        }}
      >
        {formatTime(time)}
      </Typography>
    </Grid2>
  );
};

export default Watch;
