// src/components/ImageCarousel.jsx
import React, { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://via.placeholder.com/600x300?text=Image+1',
    'https://via.placeholder.com/600x300?text=Image+2',
    'https://via.placeholder.com/600x300?text=Image+3'
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box sx={{ position: 'relative', textAlign: 'center' }}>
      <img
        src={images[currentIndex]}
        alt="carousel"
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
        }}
        onClick={prevImage}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
        }}
        onClick={nextImage}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;
