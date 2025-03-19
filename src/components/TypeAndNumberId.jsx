import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Grid2,
  FormHelperText,
  FormControl,
  TextField,
  CircularProgress,
} from "@mui/material";
import "../styles/FrontFly.css";

const TypeAndNumberId = ({ onDocumentoChange, isLoading, onButtonClick }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const documento = e.target.value;
    //console.log("Documento ingresado", documento);
    setInputValue(documento);
  };

  const handleButtonClick = () => {
    if (inputValue.length > 5 && inputValue.length <= 10) {
      onDocumentoChange(inputValue);
      setError("");
      onButtonClick(); // Llamar a la función onButtonClick
    } else {
      setError(
        "El número de documento debe tener más de 5 dígitos y menos de 10."
      );
    }
  };

  return (
    <Grid2
      container
      spacing={0.5}
      className="TypeAndNumberId"
      size={{ xs: 12, md: 12 }}
    >
      <FormControl
        sx={{ width: "80%", fontFamily: "Roboto Mono, sans-serif" }}
        size="small"
        error={error !== ""}
      >
        <Grid2 container alignItems="center">
          <Grid2 item size={{ xs: 12, md: 12, lg: 6 }}>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Roboto Mono, sans-serif" }}
            >
              Número de documento:
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 12, lg: 6 }}>
            <TextField
              type="number"
              //value={inputValue}
              onChange={handleInputChange}
              variant="outlined"
              sx={{
                width: "80%",
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
              inputProps={{
                style: { textAlign: "center" },
              }}
            />
          </Grid2>
          {error !== "" && (
            <Grid2
              item
              size={{ xs: 12, md: 12, lg: 12 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FormHelperText
                sx={{ color: "red", fontFamily: "Roboto Mono, sans-serif" }}
              >
                {error}
              </FormHelperText>
            </Grid2>
          )}
          <Grid2
            item
            size={{ xs: 12, md: 12, lg: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "#17A2B8",
                color: "Black",
                width: "150px",
                border: `2px solid ${isLoading ? "#6A4C93" : "#17A2B8"}`,
                "&:hover": {
                  boxShadow:
                    "0 0 5px #6A4C93, 0 0 20px #6A4C93, 0 0 40px #6A4C93",
                },
                fontWeight: "bold"
              }}
              onClick={handleButtonClick}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress
                  size={25}
                  sx={{
                    color: "#6A4C93",
                  }}
                />
              ) : (
                "Registrar"
              )}
            </Button>
          </Grid2>
        </Grid2>
      </FormControl>
    </Grid2>
  );
};

export default TypeAndNumberId;
