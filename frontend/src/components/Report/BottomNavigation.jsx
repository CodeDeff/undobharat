import React, { useState } from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('Process');

  const navItems = [
    { name: 'Process', icon: <AssignmentIcon className="bottom-nav-icon" /> },
    { name: 'Help', icon: <SupportAgentIcon className="bottom-nav-icon" /> },
    { name: 'History', icon: <HistoryIcon className="bottom-nav-icon" /> },
    { name: 'Profile', icon: <AccountCircleIcon className="bottom-nav-icon" /> },
  ];

  return (
    <nav className="custom-bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.name}
          type="button"
          className={`bottom-nav-item ${activeTab === item.name ? 'active' : ''}`}
          onClick={() => setActiveTab(item.name)}
        >
          {item.icon}
          <span>{item.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavigation;
