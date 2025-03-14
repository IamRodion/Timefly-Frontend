import React from "react";
import { useState, useEffect } from "react";
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
import "../styles/FrontFly.css";
import { handleTimeEntry } from "../routes/iamrodionAPI";

function FrontFly() {
  const [formattedTime, setFormattedTime] = useState("");
  const [documento, setDocumento] = useState("");

  const handleFormattedTimeChange = (newFormattedTime) => {
    setFormattedTime(newFormattedTime);
  };

  const handleDocumentoChange = (newDocumento) => {
    setDocumento(newDocumento);
  };

  useEffect(() => {
    if (documento) {
      const data = {
        Documento: documento,
        HoraRegistro: formattedTime,
      };
      console.log(JSON.stringify(data));
      handleTimeEntry(documento);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documento]);

  return (
    <Grid2 container className="FrontFly" spacing={2}>
      <Grid2 item  className="FrontFly-Logo">
        <CardMedia
          component="img"
          alt="green iguana"
          image="/images/TimeFly_Logo_1.png"
          sx={{ borderRadius: "5%" }}
        />
      </Grid2>
      <Grid2 item size={{ xs: 12 }}>
        <Typography variant="h3" sx={{ fontFamily: "Roboto Mono, sans-serif",fontSize: "3.5vw", }}>
          Bienvenido a TimeFly
        </Typography>
      </Grid2>
      <Grid2 item size={{ xs: 12 }} >
        <Watch onFormattedTimeChange={handleFormattedTimeChange} />
      </Grid2>
      <Grid2 item size={{ xs: 12 }}>
        <TypeAndNumberId onDocumentoChange={handleDocumentoChange} />
      </Grid2>
    </Grid2>
  );
}

export default FrontFly;
