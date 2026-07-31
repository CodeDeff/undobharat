import React from 'react';
import { Box, Chip } from '@mui/material';

const StatusFilter = ({ activeFilter, setActiveFilter }) => {
  const filters = ['All Reports', 'Pending', 'Resolved', 'In Progress', 'Rejected'];

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        overflowX: 'auto',
        pb: 1,
        mb: 3,
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {filters.map((filter) => {
        const isSelected = activeFilter === filter || (activeFilter === 'All' && filter === 'All Reports');

        return (
          <Chip
            key={filter}
            label={filter}
            onClick={() => setActiveFilter(filter === 'All Reports' ? 'All' : filter)}
            sx={{
              fontWeight: 600,
              fontSize: '0.85rem',
              fontFamily: '"Inter", sans-serif',
              px: 1,
              py: 0.5,
              height: 36,
              borderRadius: '18px',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              backgroundColor: isSelected ? '#2563EB' : '#FFFFFF',
              color: isSelected ? '#FFFFFF' : '#4B5563',
              border: isSelected ? '1px solid #2563EB' : '1px solid #E5E7EB',
              '&:hover': {
                backgroundColor: isSelected ? '#1D4ED8' : '#F3F4F6',
              },
            }}
          />
        );
      })}
    </Box>
  );
};

export default StatusFilter;
