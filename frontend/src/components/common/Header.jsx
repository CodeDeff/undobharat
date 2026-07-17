import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Tooltip,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

/**
 * Header Component
 * A reusable, sticky, and mobile-responsive navigation header styled with Material UI.
 * Height: 64px, Background: White, Border bottom: #E5E7EB
 */
const Header = () => {
  // Mobile search state
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  // User menu state
  const [anchorEl, setAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

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
      {showMobileSearch ? (
        // Mobile Search Mode Toolbar
        <Toolbar
          sx={{
            height: 64,
            minHeight: 64,
            px: { xs: 2, sm: 3 },
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ffffff',
          }}
        >
          <IconButton
            onClick={() => setShowMobileSearch(false)}
            edge="start"
            aria-label="back to navigation"
            sx={{ mr: 1, color: '#4B5563' }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              backgroundColor: '#F3F4F6',
              borderRadius: '24px',
              px: 2,
              py: 0.5,
            }}
          >
            <SearchIcon sx={{ color: '#9CA3AF', mr: 1 }} />
            <InputBase
              placeholder="Search UndoBharat..."
              autoFocus
              fullWidth
              sx={{
                fontSize: '0.95rem',
                color: '#1F2937',
                '& input::placeholder': {
                  color: '#9CA3AF',
                  opacity: 1,
                },
              }}
            />
          </Box>
        </Toolbar>
      ) : (
        // Standard Navigation Toolbar
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
                backgroundColor: '#2563EB', // Blue matching branding
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
            {/* Desktop Search Bar (md and up) */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                backgroundColor: '#F3F4F6',
                borderRadius: '24px',
                px: 2,
                py: 0.5,
                width: 260,
                border: '1px solid transparent',
                transition: 'all 0.2s ease-in-out',
                '&:focus-within': {
                  backgroundColor: '#ffffff',
                  borderColor: '#2563EB',
                  boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.15)',
                  width: 320,
                },
              }}
            >
              <SearchIcon sx={{ color: '#9CA3AF', mr: 1, fontSize: 20 }} />
              <InputBase
                placeholder="Search..."
                fullWidth
                sx={{
                  fontSize: '0.875rem',
                  color: '#1F2937',
                  '& input::placeholder': {
                    color: '#9CA3AF',
                    opacity: 1,
                  },
                }}
              />
            </Box>

            {/* Mobile Search Button (below md) */}
            <IconButton
              onClick={() => setShowMobileSearch(true)}
              aria-label="search"
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: '#4B5563',
                '&:hover': { backgroundColor: '#F3F4F6' },
              }}
            >
              <SearchIcon />
            </IconButton>

            {/* Profile Avatar & Dropdown */}
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleMenuOpen}
                size="small"
                aria-controls={isMenuOpen ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : undefined}
                sx={{ p: 0.25 }}
              >
                <Avatar
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="User Profile"
                  sx={{
                    width: 36,
                    height: 36,
                    border: '2px solid #E5E7EB',
                    transition: 'border-color 0.2s',
                    '&:hover': {
                      borderColor: '#2563EB',
                    },
                  }}
                >
                  U
                </Avatar>
              </IconButton>
            </Tooltip>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={isMenuOpen}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.08))',
                  mt: 1.5,
                  borderRadius: '12px',
                  border: '1px solid #F3F4F6',
                  minWidth: 180,
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 18,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    borderLeft: '1px solid #F3F4F6',
                    borderTop: '1px solid #F3F4F6',
                  },
                },
              }}
            >
              <MenuItem onClick={handleMenuClose} sx={{ py: 1.25, px: 2, fontSize: '0.9rem' }}>
                <ListItemIcon sx={{ minWidth: '32px !important' }}>
                  <PersonOutlineIcon fontSize="small" sx={{ color: '#4B5563' }} />
                </ListItemIcon>
                My Profile
              </MenuItem>
              <MenuItem onClick={handleMenuClose} sx={{ py: 1.25, px: 2, fontSize: '0.9rem' }}>
                <ListItemIcon sx={{ minWidth: '32px !important' }}>
                  <SettingsIcon fontSize="small" sx={{ color: '#4B5563' }} />
                </ListItemIcon>
                Settings
              </MenuItem>
              <Divider sx={{ my: 1 }} />
              <MenuItem onClick={handleMenuClose} sx={{ py: 1.25, px: 2, fontSize: '0.9rem', color: '#DC2626' }}>
                <ListItemIcon sx={{ minWidth: '32px !important' }}>
                  <LogoutIcon fontSize="small" sx={{ color: '#DC2626' }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      )}
    </AppBar>
  )
}

export default Header
