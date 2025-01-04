import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        maxHeight: "3vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #0d1b2a, #1b263b, #415a77, #778da9)",
      }}
    >
      <Typography color="white" align="center" ml={2}>
        FLYTIME - FRONT
      </Typography>
      <Typography color="black" align="center" mr={2}>
        v 1.0 BETA
      </Typography>
    </Box>
  );
}

export default Footer;
