import React, { useState } from 'react';
import { Box, Grid, Container } from '@mui/material';
import Header from '../../../components/userComponents/Header';
import ProfileCard from '../../../components/userComponents/ProfileCard';
import StatsGrid from '../../../components/userComponents/StatsGrid';
import SearchFilters from '../../../components/userComponents/SearchFilters';
import StatusTabs from '../../../components/userComponents/StatusTabs';
import ReportNowButton from '../../../components/userComponents/ReportNowButton';
import ReportsList from '../../../components/userComponents/ReportsList';
import LoadMoreReports from '../../../components/userComponents/LoadMoreReports';
import BottomNavBar from '../../../components/userComponents/BottomNavigation';

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
      {/* Sticky Header */}
      <Header />

      {/* Main Responsive Container */}
      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          px: { xs: 0, sm: 3, md: 4 },
          py: { xs: 2, sm: 3, md: 4 },
          pb: 12, // extra padding for bottom navigation
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {/* Left Column on Desktop / Top on Mobile */}
          <Grid size={{ xs: 12, md: 4 }}>
            <ProfileCard />
            <ReportNowButton />
          </Grid>

          {/* Right Column on Desktop / Bottom on Mobile */}
          <Grid size={{ xs: 12, md: 8 }}>
            <StatsGrid />
            <SearchFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onFilterClick={handleFilterClick}
              onSortClick={handleSortClick}
            />
            <StatusTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <ReportsList reports={filteredReports} />
            <LoadMoreReports onClick={handleLoadMore} />
          </Grid>
        </Grid>
      </Container>

      {/* Fixed Bottom Navigation */}
      <BottomNavBar />
    </Box>
  );
};

export default UserProfilePage;
