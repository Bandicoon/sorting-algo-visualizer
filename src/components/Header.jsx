import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '80px',
        width: '100vw',
        position: 'fixed',
        backgroundColor: '#CFD2CD',
        alignItems: 'center',
        padding: '0 2%',
        gap: '1em',
        zIndex: '3',
      }}
    >
      <Link
        to="/bubble"
        style={{
          textDecoration: 'none',
          fontFamily: 'Balsamiq Sans, cursive',
          color: '#7272FA',
        }}
      >
        Bubble sort
      </Link>
      <Box>More coming soon...</Box>
    </Box>
  );
};

export default Header;
