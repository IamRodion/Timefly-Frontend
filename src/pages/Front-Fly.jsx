import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid2,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Watch from "../components/Watch";
import TypeAndNumberId from "../components/TypeAndNumberId";
import { handleTimeEntry } from "../routes/iamrodionAPI";
import "../styles/FrontFly.css";
import "../styles/boton-neon-master/boton-neon-master/estilos.css";

function FrontFly() {
  const [formattedTime, setFormattedTime] = useState("");
  const [documento, setDocumento] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormattedTimeChange = (newFormattedTime) => {
    setFormattedTime(newFormattedTime);
  };

  const handleDocumentoChange = (newDocumento) => {
    setDocumento(newDocumento);
  };

  const handleButtonClick = async () => {
    if (documento) {
      setIsLoading(true);
      try {
        await handleTimeEntry(documento);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Grid2 container className="FrontFly" spacing={2}>
      <Grid2 item xs={12} className="FrontFly-Logo">
        <CardMedia
          component="img"
          alt="green iguana"
          image="/images/TimeFly_Logo_1.png"
          sx={{ borderRadius: "5%" }}
        />
      </Grid2>
      <Grid2 item xs={12}>
        <Typography variant="h3" sx={{ fontFamily: "Roboto Mono, sans-serif", fontSize: "3.5vw" }}>
          Bienvenido a TimeFly
        </Typography>
      </Grid2>
      <Grid2 item xs={12}>
        <Watch onFormattedTimeChange={handleFormattedTimeChange} />
      </Grid2>
      <Grid2 item xs={12}>
        <TypeAndNumberId onDocumentoChange={handleDocumentoChange} isLoading={isLoading} onButtonClick={handleButtonClick} />
      </Grid2>
    </Grid2>
  );
}

export default FrontFly;
