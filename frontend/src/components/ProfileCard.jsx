import React from 'react';
import { Card, CardContent, Avatar, Badge, Typography, Box, Chip } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';

const ProfileCard = () => {
  return (
    <Card
      sx={{
        borderRadius: '16px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        border: '1px solid #E5E7EB',
        overflow: 'visible',
        mt: 2,
        mx: { xs: 2, sm: 0 },
      }}
    >
      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            textAlign: { xs: 'center', sm: 'left' },
            gap: 2.5,
          }}
        >
          {/* Avatar with Status Indicator */}
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#10B981',
                color: '#10B981',
                boxShadow: '0 0 0 2px #fff',
                width: 14,
                height: 14,
                borderRadius: '50%',
                mr: 0.5,
                mb: 0.5,
              },
            }}
          >
            <Avatar
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Rahul Sharma"
              sx={{
                width: 80,
                height: 80,
                border: '3px solid #2563EB',
              }}
            />
          </Badge>

          {/* User Details */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: '#111827',
                fontFamily: '"Inter", sans-serif',
                mb: 0.5,
              }}
            >
              Rahul Sharma
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#6B7280',
                fontFamily: '"Inter", sans-serif',
                mb: 2,
              }}
            >
              Premium Member since Oct 2023
            </Typography>

            {/* Badges */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', sm: 'flex-start' },
                gap: 1.5,
              }}
            >
              <Chip
                icon={<VerifiedIcon sx={{ fontSize: '16px !important', color: '#10B981 !important' }} />}
                label="KYC VERIFIED"
                sx={{
                  backgroundColor: '#ECFDF5',
                  color: '#065F46',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  height: '26px',
                  fontFamily: '"Inter", sans-serif',
                  '& .MuiChip-label': { px: 1 },
                }}
              />
              <Chip
                icon={<StarIcon sx={{ fontSize: '16px !important', color: '#F59E0B !important' }} />}
                label="PRIORITY TIER"
                sx={{
                  backgroundColor: '#FEF3C7',
                  color: '#92400E',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  height: '26px',
                  fontFamily: '"Inter", sans-serif',
                  '& .MuiChip-label': { px: 1 },
                }}
              />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
