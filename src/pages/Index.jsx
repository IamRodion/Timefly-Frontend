import React from "react";
import { Box, Grid2, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          //mt: "6vh", // Espacio para el Header
          mb: "3vh", // Espacio para el Footer
        }}
      >
        <Grid2 container spacing={2}>
          <Grid2 item xs={3}>
            <Box
              component="nav"
              sx={{
                
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                bgcolor: "#f5f5f5",
                borderRight: "1px solid #e0e0e0",
              }}
            >
              {" "}
              <List>
                {" "}
                <ListItem button component={Link} to="/">
                  {" "}
                  <ListItemText primary="Home" />{" "}
                </ListItem>{" "}
                <ListItem button component={Link} to="/about">
                  {" "}
                  <ListItemText primary="About" />{" "}
                </ListItem>{" "}
                <ListItem button component={Link} to="/dashboard/overview">
                  {" "}
                  <ListItemText primary="Overview" />{" "}
                </ListItem>{" "}
                <ListItem button component={Link} to="/dashboard/settings">
                  {" "}
                  <ListItemText primary="Settings" />{" "}
                </ListItem>{" "}
                <ListItem button component={Link} to="/dashboard/profile">
                  {" "}
                  <ListItemText primary="Profile" />{" "}
                </ListItem>{" "}
              </List>{" "}
            </Box>
          </Grid2>

          <Grid2 item xs={9}>
            <Box
              sx={{
                bgcolor: "#ffffff",
                p: 2,
                height: "100%",
              }}
            >
              {/* Aquí va el contenido principal */}
            </Box>
          </Grid2>
        </Grid2>
      </Box>

      <Footer />
    </Box>
  );
}

export default MainPage;
