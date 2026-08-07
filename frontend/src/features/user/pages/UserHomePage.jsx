import React, { useState, useEffect } from 'react';
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
import Loader from '../../../components/common/Loader';
import EmptyStateCard from '../../../components/dashboardComponents/EmptyStateCard';
import { sampleHomeReports } from '../../../data/sampleHome';

import { getUserData } from '../services/home.service.js';


const UserHomePage = () => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const user = await getUserData();
        console.log('User data fetched:', user?.data?.data);
        setUserData(user?.data?.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Interactive filtering logic
  const filteredReports = sampleHomeReports.filter((report) => {
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

  if (loading) {
    return (
      
        <Loader size="xl" text="Loading Home..." />
       
    );
  }

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
          pb: 12,
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {/* Left Column on Desktop / Top on Mobile */}
          <Grid size={{ xs: 12, md: 4 }}>
            <ProfileCard userData={userData} />
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

            {filteredReports.length > 0 ? (
              <>
                <ReportsList reports={filteredReports} />
                <LoadMoreReports onClick={handleLoadMore} />
              </>
            ) : (
              <EmptyStateCard
                title="No reports found."
                description="No reports match your current search or filter criteria."
                actionLabel="Clear Filters"
                onActionClick={() => {
                  setSearchQuery('');
                  setActiveTab('All');
                }}
              />
            )}
          </Grid>
        </Grid>
      </Container>

      {/* Fixed Bottom Navigation */}
      <BottomNavBar />
    </Box>
  );
};

export default UserHomePage;
