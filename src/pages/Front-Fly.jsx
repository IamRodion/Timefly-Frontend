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
        "Documento":documento,
        "HoraRegistro": formattedTime,
      };
      console.log(JSON.stringify(data));
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documento]);

  return (
    <Grid2 className="FrontFly">
      <Box  className="FrontFly-Logo" >
        <CardMedia
          component="img"
          alt="green iguana"
          /* height="150vh" */
          image="/images/TimeFly_Logo_1.png"
          sx={{ borderRadius: "5%" }}
        />
      </Box>
      <Box >
        <Typography variant="h3" sx={{ fontFamily: 'Roboto Mono, sans-serif' }}>Bienvenido a TimeFly</Typography>
      </Box>
     
        <Watch onFormattedTimeChange={handleFormattedTimeChange} />
        {/* <p>Current Time in Bogotá: {formattedTime}</p> */}
      
      
        <TypeAndNumberId onDocumentoChange={handleDocumentoChange} />
     
    </Grid2>
  );
}

export default FrontFly;
