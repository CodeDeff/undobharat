import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import StatsGrid from '../components/StatsGrid';
import SearchFilters from '../components/SearchFilters';
import StatusTabs from '../components/StatusTabs';
import ReportNowButton from '../components/ReportNowButton';
import ReportsList from '../components/ReportsList';
import LoadMoreReports from '../components/LoadMoreReports';
import BottomNavBar from '../components/BottomNavigation';

const sampleReports = [
  {
    id: 1,
    title: 'Identity Discrepancy',
    category: 'Verification',
    location: 'New Delhi, DL',
    date: 'Oct 24, 2023',
    status: 'Pending',
    priority: 'High Priority',
  },
  {
    id: 2,
    title: 'Address Re-validation',
    category: 'Residency',
    location: 'Mumbai, MH',
    date: 'Oct 20, 2023',
    status: 'In Progress',
    priority: 'Standard',
  },
  {
    id: 3,
    title: 'Tax Filing Amendment',
    category: 'Finance',
    location: 'Bangalore, KA',
    date: 'Oct 15, 2023',
    status: 'Resolved',
    priority: 'Standard',
  },
  {
    id: 4,
    title: 'Duplicate Profile Merge',
    category: 'Profile',
    location: 'Global',
    date: 'Oct 10, 2023',
    status: 'Rejected',
    priority: 'Standard',
  },
];

const UserProfilePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  // Interactive filtering logic
  const filteredReports = sampleReports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === 'All' || report.status === activeTab;

    return matchesSearch && matchesTab;
  });

  const handleFilterClick = () => {
    console.log('Filter clicked');
  };

  const handleSortClick = () => {
    console.log('Sort clicked');
  };

  const handleLoadMore = () => {
    console.log('Load more clicked');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F9FAFB',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Mobile-first centered layout container */}
      <Box
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: '600px' },
          mx: 'auto',
          backgroundColor: '#ffffff',
          boxShadow: { sm: '0px 0px 24px rgba(0, 0, 0, 0.03)' },
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Sticky Header */}
        <Header />

        {/* Scrollable Content Area */}
        <Box sx={{ flexGrow: 1, pb: 4 }}>
          <Container maxWidth={false} disableGutters sx={{ px: { xs: 0, sm: 3 } }}>
            {/* User Profile Card */}
            <ProfileCard />

            {/* Stats Summary Section */}
            <StatsGrid />

            {/* Action Call Button */}
            <ReportNowButton />

            {/* Search and Filters */}
            <SearchFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onFilterClick={handleFilterClick}
              onSortClick={handleSortClick}
            />

            {/* Horizontal Scroll Status Tabs */}
            <StatusTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Interactive Reports List */}
            <ReportsList reports={filteredReports} />

            {/* Load More Button */}
            <LoadMoreReports onClick={handleLoadMore} />
          </Container>
        </Box>

        {/* Fixed Bottom Navigation */}
        <BottomNavBar />
      </Box>
    </Box>
  );
};

export default UserProfilePage;
