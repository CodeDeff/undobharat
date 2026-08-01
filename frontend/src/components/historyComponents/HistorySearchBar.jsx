import React from 'react';
import { Box, InputBase, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';

const HistorySearchBar = ({ searchQuery, setSearchQuery, onFilterClick, onSortClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        alignItems: 'center',
        mb: 3,
      }}
    >
      {/* Search Input Field */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          px: 2.5,
          py: 1,
          flexGrow: 1,
          width: { xs: '100%', sm: 'auto' },
          border: '1px solid #E5E7EB',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          transition: 'all 0.2s ease-in-out',
          '&:focus-within': {
            borderColor: '#2563EB',
            boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.12)',
          },
        }}
      >
        <SearchIcon sx={{ color: '#9CA3AF', mr: 1.5, fontSize: 22 }} />
        <InputBase
          placeholder="Search by Report ID or Title..."
          value={searchQuery || ''}
          onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
          fullWidth
          sx={{
            fontSize: '0.9rem',
            color: '#1F2937',
            fontFamily: '"Inter", sans-serif',
            '& input::placeholder': {
              color: '#9CA3AF',
              opacity: 1,
            },
          }}
        />
      </Box>

      {/* Filter and Sort Action Buttons */}
      <Stack direction="row" spacing={1.5} sx={{ width: { xs: '100%', sm: 'auto' } }}>
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={onFilterClick || (() => console.log('Filter clicked'))}
          sx={{
            flex: { xs: 1, sm: 'none' },
            borderRadius: '20px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.875rem',
            px: 2.5,
            py: 1,
            borderColor: '#E5E7EB',
            color: '#374151',
            backgroundColor: '#FFFFFF',
            fontFamily: '"Inter", sans-serif',
            '&:hover': {
              borderColor: '#2563EB',
              color: '#2563EB',
              backgroundColor: '#EFF6FF',
            },
          }}
        >
          Filter
        </Button>

        <Button
          variant="outlined"
          startIcon={<SwapVertIcon />}
          onClick={onSortClick || (() => console.log('Sort clicked'))}
          sx={{
            flex: { xs: 1, sm: 'none' },
            borderRadius: '20px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.875rem',
            px: 2.5,
            py: 1,
            borderColor: '#E5E7EB',
            color: '#374151',
            backgroundColor: '#FFFFFF',
            fontFamily: '"Inter", sans-serif',
            '&:hover': {
              borderColor: '#2563EB',
              color: '#2563EB',
              backgroundColor: '#EFF6FF',
            },
          }}
        >
          Sort
        </Button>
      </Stack>
    </Box>
  );
};

export default HistorySearchBar;
