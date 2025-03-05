import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
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
  }, [ onFormattedTimeChange]);

  const formatTime = (date) => {
    const utcHours = date.getUTCHours();
   /*  const bogotaHours = (utcHours - 5 + 24) % 24; // Ajuste para UTC-5 */
    const hours = String(utcHours).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Box>
      <Typography variant="h1" sx={{color:"#333A40", fontFamily: 'Roboto Mono, sans-serif' }}>{formatTime(time)}</Typography>
    </Box>
  );
};

export default Watch;
