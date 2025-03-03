import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import Watch from "../components/Watch";
import TypeAndNumberId from "../components/TypeAndNumberId";
import "../styles/FrontFly.css";

function FrontFly() {
  return (
    <Grid2 className="FrontFly">
      <Box>
        <Typography variant="h2">Bienvenido a TimeFly</Typography>
      </Box>
      <Box>
        <Watch />
      </Box>
      <Box>
        <TypeAndNumberId/>
      </Box>
      
    </Grid2>
  );
}

export default FrontFly;
