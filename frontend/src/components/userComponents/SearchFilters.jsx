import React from 'react';
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';

const SearchFilters = ({ searchQuery, setSearchQuery, onFilterClick, onSortClick }) => {
  return (
    <Box
      sx={{
        mt: 3,
        mx: { xs: 2, sm: 0 },
        display: 'flex',
        gap: 1.5,
        alignItems: 'center',
      }}
    >
      {/* Search Input */}
      <TextField
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search reports..."
        size="small"
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#9CA3AF' }} />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          flexGrow: 1,
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            border: '1px solid #E5E7EB',
            '& fieldset': {
              border: 'none',
            },
            '&:hover': {
              backgroundColor: '#F9FAFB',
            },
            '&.Mui-focused': {
              backgroundColor: '#ffffff',
              boxShadow: '0 0 0 2px rgba(37, 99, 235, 0.2)',
            },
          },
          '& .MuiInputBase-input': {
            fontFamily: '"Inter", sans-serif',
            fontSize: '0.9rem',
            py: 1.2,
          },
        }}
      />

      {/* Filter Button */}
      <Button
        onClick={onFilterClick}
        variant="outlined"
        startIcon={<FilterListIcon />}
        sx={{
          minWidth: { xs: '44px', sm: '100px' },
          height: '44px',
          borderRadius: '12px',
          borderColor: '#E5E7EB',
          color: '#374151',
          textTransform: 'none',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
          fontSize: '0.85rem',
          backgroundColor: '#ffffff',
          px: { xs: 1.5, sm: 2 },
          '&:hover': {
            borderColor: '#D1D5DB',
            backgroundColor: '#F9FAFB',
          },
          '& .MuiButton-startIcon': {
            marginRight: { xs: 0, sm: 1 },
          },
          '& span': {
            display: { xs: 'none', sm: 'inline' },
          },
        }}
      >
        Filter
      </Button>

      {/* Sort Button */}
      <Button
        onClick={onSortClick}
        variant="outlined"
        startIcon={<SortIcon />}
        sx={{
          minWidth: { xs: '44px', sm: '100px' },
          height: '44px',
          borderRadius: '12px',
          borderColor: '#E5E7EB',
          color: '#374151',
          textTransform: 'none',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
          fontSize: '0.85rem',
          backgroundColor: '#ffffff',
          px: { xs: 1.5, sm: 2 },
          '&:hover': {
            borderColor: '#D1D5DB',
            backgroundColor: '#F9FAFB',
          },
          '& .MuiButton-startIcon': {
            marginRight: { xs: 0, sm: 1 },
          },
          '& span': {
            display: { xs: 'none', sm: 'inline' },
          },
        }}
      >
        Sort
      </Button>
    </Box>
  );
};

export default SearchFilters;
