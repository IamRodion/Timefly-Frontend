// src/components/InputField.jsx
import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      sx={{ marginBottom: 2 }}
    />
  );
};

export default InputField;
