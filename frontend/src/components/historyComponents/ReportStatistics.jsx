import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const ReportStatistics = ({ stats }) => {
  const defaultStats = [
    {
      title: 'Total Reports',
      count: '24',
      color: '#111827',
      bgColor: '#F3F4F6',
      borderColor: '#E5E7EB',
    },
    {
      title: 'Resolved',
      count: '18',
      color: '#15803D',
      bgColor: '#F0FDF4',
      borderColor: '#BBF7D0',
    },
    {
      title: 'Pending',
      count: '03',
      color: '#B45309',
      bgColor: '#FFFBEB',
      borderColor: '#FDE68A',
    },
    {
      title: 'In Progress',
      count: '02',
      color: '#1D4ED8',
      bgColor: '#EFF6FF',
      borderColor: '#BFDBFE',
    },
  ];

  const displayStats = stats || defaultStats;

  return (
    <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }} sx={{ mb: 3 }}>
      {displayStats.map((item, index) => (
        <Grid key={index} size={{ xs: 6, sm: 3 }}>
          <Card
            sx={{
              borderRadius: '16px',
              border: `1px solid ${item.borderColor}`,
              backgroundColor: item.bgColor,
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              },
            }}
          >
            <CardContent sx={{ p: { xs: 2, sm: 2.5 }, '&:last-child': { pb: { xs: 2, sm: 2.5 } } }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#6B7280',
                  fontWeight: 600,
                  fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: item.color,
                  fontFamily: '"Inter", sans-serif',
                  mt: 0.5,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                }}
              >
                {item.count}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReportStatistics;
