/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
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
import DescriptionAlerts from "../components/Alerts";
import TypeAndNumberId from "../components/TypeAndNumberId";
import BasicModal from "../components/Modal";
import { handleTimeEntry } from "../routes/iamrodionAPI";
import "../styles/FrontFly.css";

function FrontFly() {
  const [formattedTime, setFormattedTime] = useState("");
  const [documento, setDocumento] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [modalOpen, setModalOpen] = useState(false);

  const handleFormattedTimeChange = (newFormattedTime) => {
    setFormattedTime(newFormattedTime);
  };

  const handleDocumentoChange = (newDocumento) => {
    setDocumento(newDocumento);
  };

  const handleButtonClick = () => {
    setShouldSubmit(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setAlert({ ...alert, open: false });
  };

  useEffect(() => {
    const submitData = async () => {
      if (shouldSubmit && documento) {
        setIsLoading(true);
        try {
          const result = await handleTimeEntry(documento);
          setAlert({
            open: true,
            message: result.message,
            severity: result.status === "success" ? "success" : "info",
          });
          setModalOpen(true);
        } catch (error) {
          setAlert({
            open: true,
            message: "Ha ocurrido un error inesperado.",
            severity: "error",
          });
          setModalOpen(true);
        } finally {
          setIsLoading(false);
          setShouldSubmit(false);
        }
      }
    };

    submitData();
  }, [shouldSubmit, documento]);

  return (
    <Grid2 container className="FrontFly" spacing={2}>
      <Grid2 item xs={12} className="FrontFly-Logo">
        <CardMedia
          component="img"
          alt="green iguana"
          image="images/TimeFly_Logo_1.png"
          sx={{ borderRadius: "5%" }}
        />
      </Grid2>
      <Grid2 item xs={12}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "Roboto Mono, sans-serif", fontSize: "3.5vw" }}
        >
          Bienvenido a TimeFly
        </Typography>
      </Grid2>
      <Grid2 item xs={12}>
        <Watch onFormattedTimeChange={handleFormattedTimeChange} />
      </Grid2>
      <Grid2 item xs={12}>
        <TypeAndNumberId
          onDocumentoChange={handleDocumentoChange}
          isLoading={isLoading}
          onButtonClick={handleButtonClick}
        />
      </Grid2>
      <Grid2 item xs={12}>
        <BasicModal
          open={modalOpen}
          alertMessage={alert.message}
          alertSeverity={alert.severity}
          handleClose={handleCloseModal}
        />
      </Grid2>
    </Grid2>
  );
}

export default FrontFly;
