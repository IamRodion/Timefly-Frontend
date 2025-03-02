import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  Typography,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  FormControl,
} from "@mui/material";
import "../styles/FrontFly.css";

const TypeAndNumberId = () => {
  /* const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }; */
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid2 container spacing={2} className="TypeAndNumberId">
      <Grid2 item size={{ xs: 12 }}>
        <Box>
          <FormControl
            sx={{ m: 1, width: "100%" }}
            size="small"
            error={age === "" ? true : false}
          >
            <InputLabel >
              Seleccione su tipo de documento
            </InputLabel>
            <Select
              
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>...</em>
              </MenuItem>
              <MenuItem value="CC">Cédula de ciudadania</MenuItem>
              <MenuItem value="TI">Tarjeta de identidad</MenuItem>
              <MenuItem value="DNI">DNI</MenuItem>
              <MenuItem value="NIT">NIT</MenuItem>
            </Select>
            {/* <FormHelperText>Required</FormHelperText> */}
          </FormControl>
        </Box>
      </Grid2>
      <Grid2 item size={{ xs: 12, }}>
        <Box>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
      </Grid2>

      <Grid2 item size={{ xs: 12 }}>
        <Box>
          <Button variant="outlined" color="primary">
            Botón de MUI
          </Button>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default TypeAndNumberId;
