// src/components/ImageCarousel.jsx
import React, { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import pngegg from '../assets/images/pngegg.png';
import pngegg1 from '../assets/images/pngegg1.png';
import pngegg2 from '../assets/images/pngegg2.png';
import pngegg3 from '../assets/images/pngegg3.png';
import pngegg4 from '../assets/images/pngegg4.png';
import pngegg5 from '../assets/images/pngegg5.png';
import pngegg6 from '../assets/images/pngegg6.png';
import pngegg7 from '../assets/images/pngegg7.png';
import pngegg8 from '../assets/images/pngegg8.png';



const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    pngegg,
    pngegg1,
    pngegg2,
    pngegg3,
    pngegg4,
    pngegg5,
    pngegg6,
    pngegg7,
    pngegg8,
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
