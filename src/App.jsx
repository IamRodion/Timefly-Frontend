// src/App.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import Form from './components/Form';
import ImageCarousel from './components/ImageCarousel';

const App = () => {
  return (
    <Container sx={{ paddingTop: '2rem' }}>
      <Typography variant="h3" gutterBottom>
        React + MUI Example
      </Typography>
      
      <Form />
      <ImageCarousel />
    </Container>
  );
};

export default App;
