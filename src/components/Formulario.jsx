import React from "react";
import Input from "./Input";
import EnviarButton from "./EnviarButton";
import { Box, Container } from "@mui/material";

function Formulario({ formData, handleChange, handleSubmit }) {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 3,
          border: "1px solid #ddd",
          borderRadius: 2,
        }}
      >
        <h2>Front TimeFly v.1</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <EnviarButton />
        </form>
      </Box>
    </Container>
  );
}

export default Formulario;
