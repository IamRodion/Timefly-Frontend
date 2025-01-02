// src/App.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Form from './components/Form';
import ImageCarousel from './components/ImageCarousel';

const App = () => {
  return (
    <Container sx={{ paddingTop: '2rem' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h3" gutterBottom>
          TimeFly Front v1
        </Typography>
      </Box>

      <Form />
      <ImageCarousel />
    </Container>
  );
};

export default App;
