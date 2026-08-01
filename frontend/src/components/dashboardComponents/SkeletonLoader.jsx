import React from 'react';
import { Box, Skeleton, Card, CardContent, Grid } from '@mui/material';

export const CardSkeleton = () => (
  <Card sx={{ borderRadius: '16px', mb: 2.5, border: '1px solid #E5E7EB', boxShadow: 'none' }}>
    <CardContent sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Skeleton variant="text" width={120} height={20} />
        <Skeleton variant="rectangular" width={80} height={24} sx={{ borderRadius: '12px' }} />
      </Box>
      <Skeleton variant="text" width="70%" height={28} sx={{ mb: 1.5 }} />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="text" width={100} height={20} />
      </Box>
    </CardContent>
  </Card>
);

export const StatsSkeleton = () => (
  <Grid container spacing={2} sx={{ mb: 3 }}>
    {[1, 2, 3, 4].map((item) => (
      <Grid key={item} size={{ xs: 6, sm: 3 }}>
        <Card sx={{ borderRadius: '16px', p: 2, border: '1px solid #E5E7EB', boxShadow: 'none' }}>
          <Skeleton variant="text" width="60%" height={20} />
          <Skeleton variant="text" width="40%" height={40} sx={{ mt: 1 }} />
        </Card>
      </Grid>
    ))}
  </Grid>
);

export const PageSkeleton = () => (
  <Box sx={{ width: '100%', py: 2 }}>
    <Skeleton variant="text" width={200} height={36} sx={{ mb: 1 }} />
    <Skeleton variant="text" width={300} height={24} sx={{ mb: 3 }} />
    <StatsSkeleton />
    <CardSkeleton />
    <CardSkeleton />
  </Box>
);

export default PageSkeleton;
