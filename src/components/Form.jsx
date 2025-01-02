// src/components/Form.jsx
import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import InputField from './InputField';
import SelectField from './SelectField';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    alert(`Input: ${inputValue}, Selected: ${selectedOption}`);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <form onSubmit={handleSubmit}>
        <InputField label="Enter some text" value={inputValue} onChange={handleInputChange} />
        <SelectField
          label="Choose an option"
          value={selectedOption}
          onChange={handleSelectChange}
          options={['Option 1', 'Option 2', 'Option 3']}
        />
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
      {formSubmitted && <p>Form submitted!</p>}
    </Box>
  );
};

export default Form;
