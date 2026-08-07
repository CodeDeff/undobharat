import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Button, Stack, Divider } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const getStatusStyle = (status) => {
  switch (status) {
    case 'Resolved':
      return { bg: '#DCFCE7', color: '#15803D', border: '#86EFAC' };
    case 'In Progress':
      return { bg: '#DBEAFE', color: '#1D4ED8', border: '#93C5FD' };
    case 'Pending':
      return { bg: '#FEF3C7', color: '#B45309', border: '#FDE68A' };
    case 'Rejected':
      return { bg: '#FEE2E2', color: '#B91C1C', border: '#FCA5A5' };
    default:
      return { bg: '#F3F4F6', color: '#4B5563', border: '#E5E7EB' };
  }
};

const getPriorityStyle = (priority) => {
  if (priority?.toLowerCase().includes('high')) {
    return { bg: '#FEE2E2', color: '#991B1B' };
  }
  if (priority?.toLowerCase().includes('low')) {
    return { bg: '#ECFDF5', color: '#065F46' };
  }
  return { bg: '#F3F4F6', color: '#374151' };
};

const ReportHistoryCard = ({ report }) => {
  const statusStyle = getStatusStyle(report.status);
  const priorityStyle = getPriorityStyle(report.priority);

  return (
    <Card
      sx={{
        borderRadius: '16px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        mb: 2.5,
        backgroundColor: '#FFFFFF',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          borderColor: '#CBD5E1',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, sm: 3 }, '&:last-child': { pb: { xs: 2.5, sm: 3 } } }}>
        {/* Top Meta Row: Report ID, Status & Priority Badges */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: '#64748B',
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
            }}
          >
            REPORT ID: {report.reportId || `#UB-${report.id || '101'}`}
          </Typography>

          <Stack direction="row" spacing={1} alignitems="center">
            <Chip
              label={report.status}
              size="small"
              sx={{
                fontWeight: 700,
                fontSize: '0.75rem',
                fontFamily: '"Inter", sans-serif',
                backgroundColor: statusStyle.bg,
                color: statusStyle.color,
                border: `1px solid ${statusStyle.border}`,
                height: 24,
              }}
            />
            {report.priority && (
              <Chip
                label={report.priority}
                size="small"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.725rem',
                  fontFamily: '"Inter", sans-serif',
                  backgroundColor: priorityStyle.bg,
                  color: priorityStyle.color,
                  height: 24,
                }}
              />
            )}
          </Stack>
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.05rem', sm: '1.15rem' },
            color: '#0F172A',
            fontFamily: '"Inter", sans-serif',
            mb: 1.5,
          }}
        >
          {report.title}
        </Typography>

        {/* Details Row: Category, Location, Date */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, sm: 3 }, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <FolderOutlinedIcon sx={{ color: '#64748B', fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: '#475569', fontSize: '0.85rem', fontFamily: '"Inter", sans-serif' }}>
              {report.category}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <LocationOnOutlinedIcon sx={{ color: '#64748B', fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: '#475569', fontSize: '0.85rem', fontFamily: '"Inter", sans-serif' }}>
              {report.location}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <CalendarTodayOutlinedIcon sx={{ color: '#64748B', fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: '#475569', fontSize: '0.85rem', fontFamily: '"Inter", sans-serif' }}>
              {report.date}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2, borderColor: '#F1F5F9' }} />

        {/* Action Buttons: Track & View Details */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="flex-end">
          <Button
            variant="outlined"
            size="small"
            startIcon={<TrackChangesIcon />}
            onClick={() => console.log('Track Report')}
            sx={{
              borderRadius: '10px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.85rem',
              px: 2.5,
              py: 0.75,
              borderColor: '#2563EB',
              color: '#2563EB',
              fontFamily: '"Inter", sans-serif',
              '&:hover': {
                backgroundColor: '#EFF6FF',
                borderColor: '#1D4ED8',
              },
            }}
          >
            Track
          </Button>

          <Button
            variant="contained"
            size="small"
            startIcon={<VisibilityOutlinedIcon />}
            onClick={() => console.log('View Details')}
            sx={{
              borderRadius: '10px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.85rem',
              px: 2.5,
              py: 0.75,
              backgroundColor: '#2563EB',
              boxShadow: 'none',
              fontFamily: '"Inter", sans-serif',
              '&:hover': {
                backgroundColor: '#1D4ED8',
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)',
              },
            }}
          >
            View Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ReportHistoryCard;
