import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from '../../../components/userComponents/Header';
import BottomNavBar from '../../../components/userComponents/BottomNavigation';
import PageSkeleton from '../../../components/dashboardComponents/SkeletonLoader';
import ReportStatistics from '../../../components/historyComponents/ReportStatistics';
import HistorySearchBar from '../../../components/historyComponents/HistorySearchBar';
import StatusFilter from '../../../components/historyComponents/StatusFilter';
import ReportHistoryCard from '../../../components/historyComponents/ReportHistoryCard';
import EmptyStateCard from '../../../components/dashboardComponents/EmptyStateCard';

import {
  sampleHistoryStats,
  initialHistoryReports,
  additionalHistoryReports,
} from '../../../data/sampleHistory';

const History = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [reportsList, setReportsList] = useState(initialHistoryReports);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Frontend filter logic
  const filteredReports = reportsList.filter((report) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      report.title.toLowerCase().includes(query) ||
      report.category.toLowerCase().includes(query) ||
      report.location.toLowerCase().includes(query) ||
      report.reportId.toLowerCase().includes(query);

    const matchesFilter =
      activeFilter === 'All' ||
      activeFilter === 'All Reports' ||
      report.status.toLowerCase() === activeFilter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  const handleLoadMore = () => {
    if (!hasLoadedMore) {
      setReportsList((prev) => [...prev, ...additionalHistoryReports]);
      setHasLoadedMore(true);
    }
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
      {/* Reused Header */}
      <Header />

      {/* Main Container */}
      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 3, sm: 4 },
          pb: 12,
        }}
      >
        {/* Title & Report Now Button Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: 800,
                color: '#111827',
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '1.5rem', sm: '1.75rem' },
                letterSpacing: '-0.02em',
              }}
            >
              Report History
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: '#6B7280', fontFamily: '"Inter", sans-serif', mt: 0.5 }}
            >
              Track the progress of your submitted reports.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/user/reportnow')}
            aria-label="Create a new report now"
            sx={{
              backgroundColor: '#F97316',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.9rem',
              textTransform: 'none',
              px: 3,
              py: 1.25,
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(249, 115, 22, 0.25)',
              fontFamily: '"Inter", sans-serif',
              '&:hover': {
                backgroundColor: '#EA580C',
                boxShadow: '0 4px 14px rgba(249, 115, 22, 0.35)',
              },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Report Now
          </Button>
        </Box>

        {loading ? (
          <PageSkeleton />
        ) : (
          <>
            {/* Statistics Summary Cards */}
            <ReportStatistics stats={sampleHistoryStats} />

            {/* Search Bar */}
            <HistorySearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onFilterClick={() => console.log('Filter clicked')}
              onSortClick={() => console.log('Sort clicked')}
            />

            {/* Status Filter Chips */}
            <StatusFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

            {/* Report Cards List or Empty State */}
            {filteredReports.length > 0 ? (
              <Box>
                {filteredReports.map((report) => (
                  <ReportHistoryCard key={report.id} report={report} />
                ))}

                {/* Load More Button */}
                {!hasLoadedMore && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 2 }}>
                    <Button
                      variant="outlined"
                      endIcon={<ExpandMoreIcon />}
                      onClick={handleLoadMore}
                      aria-label="Load more reports from history"
                      sx={{
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        px: 4,
                        py: 1.25,
                        borderColor: '#CBD5E1',
                        color: '#475569',
                        backgroundColor: '#FFFFFF',
                        fontFamily: '"Inter", sans-serif',
                        '&:hover': {
                          borderColor: '#2563EB',
                          color: '#2563EB',
                          backgroundColor: '#EFF6FF',
                        },
                      }}
                    >
                      Load More Reports
                    </Button>
                  </Box>
                )}
              </Box>
            ) : (
              <EmptyStateCard
                title="No reports found."
                description="There are no reports matching your selected status filter or search criteria."
                actionLabel="Reset Filters"
                onActionClick={() => {
                  setSearchQuery('');
                  setActiveFilter('All');
                }}
              />
            )}
          </>
        )}
      </Container>

      {/* Reused Fixed Bottom Navigation */}
      <BottomNavBar />
    </Box>
  );
};

export default History;
