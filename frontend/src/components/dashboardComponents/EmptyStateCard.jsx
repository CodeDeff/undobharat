import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';

const EmptyStateCard = ({
  icon: Icon = InboxOutlinedIcon,
  title = 'No Data Found',
  description = 'There are no items to display at this time.',
  actionLabel,
  onActionClick,
}) => {
  return (
    <Card
      sx={{
        borderRadius: '16px',
        border: '1px solid #E5E7EB',
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
          <Icon sx={{ fontSize: 36, color: '#94A3B8' }} />
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
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#64748B',
            fontFamily: '"Inter", sans-serif',
            maxWidth: 380,
            mb: actionLabel ? 2.5 : 0,
          }}
        >
          {description}
        </Typography>

        {actionLabel && (
          <Button
            variant="contained"
            onClick={onActionClick}
            sx={{
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
              py: 1,
              backgroundColor: '#2563EB',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            {actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default EmptyStateCard;
