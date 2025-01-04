import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function HomeButton() {
  const navigate = useNavigate();

  return (
    <Button variant="contained" color="primary" onClick={() => navigate('/')}>
      Go to Home
    </Button>
  );
}

export default HomeButton;
