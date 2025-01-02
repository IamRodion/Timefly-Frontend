import React from "react";
import { TextField } from "@mui/material";

function Input({ label, name, value, onChange }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
      margin="normal"
    />
  );
}

export default Input;
