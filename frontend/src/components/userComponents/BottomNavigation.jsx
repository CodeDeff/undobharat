import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getTabValue = (pathname) => {
    if (pathname === '/user/settings') return 3;
    if (pathname === '/user/history') return 2;
    if (pathname === '/user/support') return 1;
    if (pathname === '/user/home' ) return 0;
    return 0;
  };

  const handleTabChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate('/user/home');
        break;
      case 1:
        navigate('/user/support');
        break;
      case 2:
        navigate('/user/history');
        break;
      case 3:
        navigate('/user/settings');
        break;
      default:
        break;
    }
  };

  return (
    
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        top: 'auto',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: { xs: '100%', md: '1200px' },
        zIndex: 1200,
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.06)',
        borderTop: '1px solid #E5E7EB',
      }}
      elevation={3}
    >
      
      <BottomNavigation
        showLabels
        value={getTabValue(location.pathname)}
        onChange={handleTabChange}
        sx={{
          height: 64,
          '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
            padding: '6px 0',
            color: '#9CA3AF',
            fontFamily: '"Inter", sans-serif',
            '&.Mui-selected': {
              color: '#2563EB',
              fontWeight: 700,
              '& .MuiSvgIcon-root': {
                color: '#2563EB',
              },
            },
          },
          '& .MuiBottomNavigationAction-label': {
            fontSize: '0.75rem',
            mt: 0.5,
            '&.Mui-selected': {
              fontSize: '0.75rem',
            },
          },
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<AssignmentIcon />}
        />
        <BottomNavigationAction
          label="Support"
          icon={<SupportAgentIcon />}
        />
        <BottomNavigationAction
          label="History"
          icon={<HistoryIcon />}
        />
        <BottomNavigationAction
          label="Settings"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
