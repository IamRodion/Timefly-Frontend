import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Grid2,
  FormHelperText,
  FormControl,
  TextField,
} from "@mui/material";
import "../styles/FrontFly.css";

const TypeAndNumberId = ({onDocumentoChange}) => {
  
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.length > 5 && inputValue.length < 10) {
      onDocumentoChange(inputValue);
      setError(""); 
    } else {
      setError("El número de documento debe tener más de 5 dígitos y menos de 10.");
    }
  };


  return (
    <Grid2 container spacing={0.5} className="TypeAndNumberId" sx={{ width: "800px" }}>
      <Grid2 item size={{ xs: 6, md: 12 }}>
        <FormControl
          sx={{ m: 1, width: "80%", fontFamily: "Roboto Mono, sans-serif" }}
          size="small"
          error={error != ""}
        >
          <Grid2 container alignItems="center" >
            <Grid2 item size={{ xs: 6, md: 6 }}>
              <Typography
                variant="h6"
                sx={{ fontFamily: "Roboto Mono, sans-serif" }}
              >
                Número de documento:
              </Typography>
            </Grid2>
            <Grid2 item size={{ xs: 6, md: 6 }}>
              <TextField
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                sx={{
                  fontFamily: "Roboto Mono, sans-serif",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#3A7DFF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#6A4C93",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#17A2B8",
                    },
                  },
                }}
              />
            </Grid2>
            {error != "" && (
              <Grid2
                item
                size={{ xs: 12, md: 12 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FormHelperText sx={{color: "red", fontFamily: "Roboto Mono, sans-serif" }}>
                  {error}
                </FormHelperText>
              </Grid2>
            )}
          </Grid2>
        </FormControl>
      </Grid2>

      <Grid2 item size={{ xs: 6, md: 12 }}>
        <Button variant="contained" sx={{background:"#17A2B8", color:"Black"}} onClick={handleButtonClick}>
          Registrar
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default TypeAndNumberId;
