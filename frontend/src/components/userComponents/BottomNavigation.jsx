import React, { useState } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';

const BottomNavBar = () => {
  // History is active by default: index 2
  const [value, setValue] = useState(2);

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
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
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
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
          label="Process"
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
