// src/components/ImageCarousel.jsx
import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista de imágenes aleatorias (puedes sustituir con URLs de tu elección)
  const images = [
    'https://via.placeholder.com/600x400/0000FF/808080?text=Image+1',
    'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Image+2',
    'https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Image+3',
    'https://via.placeholder.com/600x400/FFFF00/000000?text=Image+4'
  ];

  // Funciones para cambiar las imágenes
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <img src={images[currentImageIndex]} alt="carousel" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '1rem' }}>
        <IconButton onClick={goToPrevious} color="primary">
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={goToNext} color="primary">
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
