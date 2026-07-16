import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const StatsGrid = () => {
  const stats = [
    {
      title: 'Total Reports',
      count: '24',
      color: '#6B7280',
      bgColor: '#F9FAFB',
      borderColor: '#D1D5DB',
    },
    {
      title: 'Resolved',
      count: '18',
      color: '#10B981',
      bgColor: '#ECFDF5',
      borderColor: '#10B981',
    },
    {
      title: 'Pending',
      count: '03',
      color: '#F59E0B',
      bgColor: '#FEF3C7',
      borderColor: '#F59E0B',
    },
    {
      title: 'In Progress',
      count: '02',
      color: '#3B82F6',
      bgColor: '#EFF6FF',
      borderColor: '#3B82F6',
    },
  ];

  return (
    <Box sx={{ mt: 3, mx: { xs: 2, sm: 0 } }}>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={6} key={index}>
            <Card
              sx={{
                borderRadius: '12px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
                border: '1px solid #E5E7EB',
                borderLeft: `4px solid ${stat.borderColor}`,
                backgroundColor: '#ffffff',
              }}
            >
              <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#6B7280',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    fontSize: '0.7rem',
                    letterSpacing: '0.05em',
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {stat.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: stat.color,
                    mt: 0.5,
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {stat.count}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsGrid;
