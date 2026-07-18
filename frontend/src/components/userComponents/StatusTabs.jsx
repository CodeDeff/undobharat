import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

const StatusTabs = ({ activeTab, setActiveTab }) => {
  const tabsList = [
    { value: 'All', label: 'All Reports' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Resolved', label: 'Resolved' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Rejected', label: 'Rejected' },
  ];

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        mt: 3,
        borderBottom: '1px solid #E5E7EB',
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          px: { xs: 2, sm: 0 },
          '& .MuiTabs-indicator': {
            backgroundColor: '#2563EB',
            height: '3px',
            borderRadius: '3px 3px 0 0',
          },
          '& .MuiTabs-flexContainer': {
            gap: { xs: 2, sm: 3 },
          },
        }}
      >
        {tabsList.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            disableRipple
            sx={{
              textTransform: 'none',
              fontWeight: activeTab === tab.value ? 700 : 500,
              fontSize: '0.9rem',
              color: activeTab === tab.value ? '#2563EB' : '#6B7280',
              minWidth: 'auto',
              padding: '12px 4px',
              fontFamily: '"Inter", sans-serif',
              '&.Mui-selected': {
                color: '#2563EB',
              },
              '&:hover': {
                color: '#1D4ED8',
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default StatusTabs;
