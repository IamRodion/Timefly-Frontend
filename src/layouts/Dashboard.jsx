import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, Outlet } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pngegg from "../assets/images/pngegg.png";
import pngegg1 from "../assets/images/pngegg1.png";
import pngegg2 from "../assets/images/pngegg2.png";
import pngegg3 from "../assets/images/pngegg3.png";
import pngegg4 from "../assets/images/pngegg4.png";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const menuItems = [
    { text: "Home", route: "/", icon: pngegg },
    { text: "About", route: "/about", icon: pngegg1 },
    { text: "Overview", route: "/dashboard/overview", icon: pngegg2 },
    { text: "Settings", route: "/dashboard/settings", icon: pngegg3 },
    { text: "Profile", route: "/dashboard/profile", icon: pngegg4 },
  ];

  return (
    <Box sx={{ height: "100vh" }}>
      <Header />

      <Box sx={{ display: "flex", flexGrow: 1, mt: "56px", mb: "3vh" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: { xs: 200, sm: 240 },
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: { xs: 200, sm: 240 },
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />

          <Box sx={{ overflow: "auto" }}>
            <List>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.text}>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={item.route}>
                      <ListItemIcon
                        sx={{
                          minWidth: "auto", // Elimina el ancho mínimo predeterminado
                          marginRight: 2, // Espacio entre el ícono y el texto
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src={item.icon}
                          alt={`${item.text} icon`}
                          sx={{
                            width: { xs: 55, sm: 65 }, // Ajusta el tamaño según la pantalla
                            height: { xs: 60, sm: 70 },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        sx={{
                          "& .MuiTypography-root": {
                            fontSize: { xs: "0.9rem", sm: "1rem" }, // Ajusta el tamaño de fuente según el tamaño de pantalla
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {index < menuItems.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>

            <Divider />
          </Box>
        </Drawer>

        <Box
          component="main"
          sx={{
            m: 1,
            p: 1,
           
            marginTop: "56px", // Espacio para el Header
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
