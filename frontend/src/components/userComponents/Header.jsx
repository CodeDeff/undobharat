import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        zIndex: 1100,
        backgroundColor: '#ffffff',
        boxShadow: 'none',
        borderBottom: '1px solid #E5E7EB',
        height: 64,
        minHeight: 64,
        maxHeight: 64,
        justifyContent: 'center',
      }}
    >
      <Toolbar
        sx={{
          height: 64,
          minHeight: 64,
          px: { xs: 2, sm: 3 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Left: Brand Logo & Title */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            textDecoration: 'none',
            outline: 'none',
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,
              backgroundColor: '#2563EB',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              p: 0.5,
            }}
          >
            <Box
              component="img"
              src="https://res.cloudinary.com/dqz2hem3m/image/upload/v1750665330/logo_ep4az4.png"
              alt="UndoBharat Logo"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#111827',
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '1.15rem', sm: '1.25rem' },
              letterSpacing: '-0.025em',
              userSelect: 'none',
            }}
          >
            UndoBharat
          </Typography>
        </Box>

        {/* Right: Search & Avatar Controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
          <IconButton
            aria-label="search"
            sx={{
              color: '#4B5563',
              '&:hover': { backgroundColor: '#F3F4F6' },
            }}
          >
            <SearchIcon />
          </IconButton>

          <Avatar
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
            alt="User Profile"
            sx={{
              width: 36,
              height: 36,
              border: '2px solid #E5E7EB',
              transition: 'border-color 0.2s',
              cursor: 'pointer',
              '&:hover': {
                borderColor: '#2563EB',
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
