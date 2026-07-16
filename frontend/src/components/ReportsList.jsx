import React from 'react';
import { Box, Typography } from '@mui/material';
import ReportCard from './ReportCard';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ReportsList = ({ reports }) => {
  if (reports.length === 0) {
    return (
      <Box
        sx={{
          mt: 4,
          mx: { xs: 2, sm: 0 },
          py: 6,
          px: 3,
          borderRadius: '16px',
          border: '1px dashed #D1D5DB',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 1.5,
        }}
      >
        <InfoOutlinedIcon sx={{ fontSize: 40, color: '#9CA3AF' }} />
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
            color: '#374151',
            fontFamily: '"Inter", sans-serif',
          }}
        >
          No reports found
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#6B7280',
            fontFamily: '"Inter", sans-serif',
            maxWidth: '280px',
          }}
        >
          Try adjusting your search terms or selecting a different status tab.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 3, mx: { xs: 2, sm: 0 } }}>
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </Box>
  );
};

export default ReportsList;
