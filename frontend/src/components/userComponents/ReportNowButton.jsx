import React from 'react';
import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

const ReportNowButton = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 3, mx: { xs: 2, sm: 0 } }}>
      <Button
        onClick={() => navigate('/user/reportnow')}
        variant="contained"
        fullWidth
        startIcon={<AddIcon />}
        endIcon={<KeyboardArrowRightIcon sx={{ ml: 'auto' }} />}
        sx={{
          backgroundColor: '#2563EB',
          color: '#ffffff',
          py: 1.75,
          px: 2.5,
          borderRadius: '12px',
          fontWeight: 700,
          fontSize: '1rem',
          textTransform: 'none',
          fontFamily: '"Inter", sans-serif',
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: '#1D4ED8',
            boxShadow: '0 6px 16px rgba(37, 99, 235, 0.3)',
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(1px)',
          },
          '& .MuiButton-startIcon': {
            mr: 1.5,
          },
          '& .MuiButton-endIcon': {
            marginLeft: 'auto',
          },
        }}
      >
        Report Now
      </Button>
    </Box>
  );
};

export default ReportNowButton;
