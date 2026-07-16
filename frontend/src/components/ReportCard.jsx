import React from 'react';
import { Card, CardContent, Box, Typography, Chip, Button, Link } from '@mui/material';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NearMeIcon from '@mui/icons-material/NearMe';

const getCategoryIcon = (category) => {
  switch (category?.toLowerCase()) {
    case 'verification':
      return <FingerprintIcon sx={{ color: '#2563EB' }} />;
    case 'residency':
      return <HomeIcon sx={{ color: '#EAB308' }} />;
    case 'finance':
      return <AccountBalanceIcon sx={{ color: '#10B981' }} />;
    case 'profile':
      return <PersonIcon sx={{ color: '#8B5CF6' }} />;
    default:
      return <DescriptionIcon sx={{ color: '#6B7280' }} />;
  }
};

const getCategoryBg = (category) => {
  switch (category?.toLowerCase()) {
    case 'verification':
      return '#EFF6FF';
    case 'residency':
      return '#FEF9C3';
    case 'finance':
      return '#ECFDF5';
    case 'profile':
      return '#F5F3FF';
    default:
      return '#F3F4F6';
  }
};

const getStatusStyles = (status) => {
  switch (status?.toLowerCase()) {
    case 'pending':
      return { color: '#D97706', bgColor: '#FEF3C7' };
    case 'in progress':
      return { color: '#2563EB', bgColor: '#DBEAFE' };
    case 'resolved':
      return { color: '#059669', bgColor: '#D1FAE5' };
    case 'rejected':
      return { color: '#DC2626', bgColor: '#FEE2E2' };
    default:
      return { color: '#4B5563', bgColor: '#F3F4F6' };
  }
};

const getPriorityStyles = (priority) => {
  if (priority?.toLowerCase() === 'high priority') {
    return { color: '#B91C1C', bgColor: '#FEF2F2', border: '1px solid #FCA5A5' };
  }
  return { color: '#4B5563', bgColor: '#F3F4F6', border: '1px solid #E5E7EB' };
};

const ReportCard = ({ report }) => {
  const { title, category, location, date, status, priority } = report;
  const statusStyles = getStatusStyles(status);
  const priorityStyles = getPriorityStyles(priority);

  return (
    <Card
      sx={{
        borderRadius: '16px',
        boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.03)',
        border: '1px solid #E5E7EB',
        mb: 2,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
        {/* Top Section: Icon, Title, and Status Badge */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '12px',
              backgroundColor: getCategoryBg(category),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {getCategoryIcon(category)}
          </Box>

          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 1.5,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: '#111827',
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: 1.3,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {title}
              </Typography>
              <Chip
                label={status}
                sx={{
                  backgroundColor: statusStyles.bgColor,
                  color: statusStyles.color,
                  fontWeight: 700,
                  fontSize: '0.725rem',
                  height: '22px',
                  fontFamily: '"Inter", sans-serif',
                  flexShrink: 0,
                }}
              />
            </Box>

            <Typography
              variant="caption"
              sx={{
                color: '#6B7280',
                fontFamily: '"Inter", sans-serif',
                display: 'block',
                mt: 0.5,
              }}
            >
              Category: {category}
            </Typography>
          </Box>
        </Box>

        {/* Middle Section: Location, Date & Priority */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 1.5, sm: 2.5 },
            mt: 2,
            mb: 2.5,
            pt: 2,
            borderTop: '1px dashed #E5E7EB',
          }}
        >
          {/* Location */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <PlaceIcon sx={{ fontSize: 16, color: '#9CA3AF' }} />
            <Typography variant="body2" sx={{ color: '#4B5563', fontSize: '0.825rem', fontFamily: '"Inter", sans-serif' }}>
              {location}
            </Typography>
          </Box>

          {/* Date */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CalendarTodayIcon sx={{ fontSize: 16, color: '#9CA3AF' }} />
            <Typography variant="body2" sx={{ color: '#4B5563', fontSize: '0.825rem', fontFamily: '"Inter", sans-serif' }}>
              {date}
            </Typography>
          </Box>

          {/* Priority */}
          <Chip
            label={priority}
            sx={{
              backgroundColor: priorityStyles.bgColor,
              color: priorityStyles.color,
              border: priorityStyles.border,
              fontWeight: 600,
              fontSize: '0.7rem',
              height: '20px',
              fontFamily: '"Inter", sans-serif',
              ml: { sm: 'auto' },
            }}
          />
        </Box>

        {/* Bottom Section: Track Link and View Details Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 1.5,
            borderTop: '1px solid #F3F4F6',
          }}
        >
          <Link
            href="#"
            underline="none"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#2563EB',
              fontFamily: '"Inter", sans-serif',
              transition: 'color 0.2s',
              '&:hover': {
                color: '#1D4ED8',
              },
            }}
          >
            <NearMeIcon sx={{ fontSize: 14 }} />
            Track Status
          </Link>

          <Button
            variant="outlined"
            size="small"
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '0.8rem',
              borderColor: '#D1D5DB',
              color: '#374151',
              fontFamily: '"Inter", sans-serif',
              px: 2,
              '&:hover': {
                borderColor: '#9CA3AF',
                backgroundColor: '#F9FAFB',
              },
            }}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReportCard;
