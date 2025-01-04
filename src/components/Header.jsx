import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const headerStyles = {
    background: "linear-gradient(135deg, #778da9, #415a77, #1b263b, #0d1b2a)",
    backgroundBlendMode: "multiply",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    height: "6vh", // Altura fija para el Header
  };

  return (
    <AppBar position="relative" sx={{ ...headerStyles }}>
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
          <Typography variant="h6" noWrap>
            TimeFly
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
