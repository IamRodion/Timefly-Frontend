import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const headerStyles = {
    background: "linear-gradient(135deg, #0d1b2a, #1b263b, #415a77, #778da9)",
    backgroundBlendMode: "multiply",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    height: "56px", // Altura fija en píxeles para el Header
    width: "100%", // Ocupa todo el ancho de la pantalla
  };

  return (
    <AppBar position="fixed" sx={{ ...headerStyles, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="/src/assets/images/TimeFly-2.png"
            alt="TimeFly Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <Typography variant="h5" noWrap>
            TimeFly
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
