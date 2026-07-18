import React from 'react';
import { Box, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LoadMoreReports = ({ onClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 3,
        mb: 8, // extra margin bottom to clear the fixed bottom navigation
      }}
    >
      <Button
        onClick={onClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: '#4B5563',
          fontWeight: 700,
          fontSize: '0.875rem',
          textTransform: 'none',
          fontFamily: '"Inter", sans-serif',
          py: 1,
          px: 3,
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#F3F4F6',
            color: '#1F2937',
          },
        }}
      >
        Load More Reports
      </Button>
    </Box>
  );
};

export default LoadMoreReports;
