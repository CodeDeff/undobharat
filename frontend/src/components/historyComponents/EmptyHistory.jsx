import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

const EmptyHistory = () => {
  return (
    <Card
      sx={{
        borderRadius: '16px',
        border: '1px border #E5E7EB',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        py: 6,
        px: 3,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        mb: 4,
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            backgroundColor: '#F1F5F9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <InboxOutlinedIcon sx={{ fontSize: 36, color: '#94A3B8' }} />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#1E293B',
            fontFamily: '"Inter", sans-serif',
            fontSize: '1.1rem',
            mb: 0.5,
          }}
        >
          No reports found.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#64748B',
            fontFamily: '"Inter", sans-serif',
            maxWidth: 360,
          }}
        >
          There are no reports matching your selected status filter or search criteria.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmptyHistory;
