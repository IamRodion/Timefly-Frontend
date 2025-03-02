import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "../styles/FrontFly.css";

const Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Box>
      <Typography variant="h3">{formatTime(time)}</Typography>
    </Box>
  );
};

export default Watch;
