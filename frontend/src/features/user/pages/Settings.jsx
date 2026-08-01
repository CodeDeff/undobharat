import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Divider,
  Button,
} from '@mui/material';
import Header from '../../../components/userComponents/Header';
import BottomNavBar from '../../../components/userComponents/BottomNavigation';
import PageSkeleton from '../../../components/dashboardComponents/SkeletonLoader';
import {
  sampleNotificationSettings,
  sampleAppInfo,
} from '../../../data/sampleSettings';

// Icons
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';

const Settings = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(sampleNotificationSettings.push);
  const [emailNotifications, setEmailNotifications] = useState(sampleNotificationSettings.email);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    console.log('Logout');
  };

  const cardStyle = {
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
    border: '1px solid #E5E7EB',
    mb: 3,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  };

  const sectionHeaderStyle = {
    fontWeight: 700,
    fontSize: '1.05rem',
    color: '#111827',
    fontFamily: '"Inter", sans-serif',
    px: 3,
    pt: 2.5,
    pb: 1,
  };

  const listItemStyle = {
    py: 1.5,
    px: 3,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F9FAFB',
    },
    '&:focus-visible': {
      outline: '2px solid #2563EB',
      outlineOffset: '-2px',
    },
  };

  const iconStyle = {
    color: '#4B5563',
    minWidth: 40,
  };

  const primaryTextStyle = {
    fontSize: '0.95rem',
    fontWeight: 500,
    color: '#1F2937',
    fontFamily: '"Inter", sans-serif',
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
        maxWidth="md"
        sx={{
          flexGrow: 1,
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 3, sm: 4 },
          pb: 12,
        }}
      >
        {/* Page Title */}
        <Box sx={{ mb: 3 }}>
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
            Settings
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#6B7280', fontFamily: '"Inter", sans-serif', mt: 0.5 }}
          >
            Manage your account preferences and application settings
          </Typography>
        </Box>

        {loading ? (
          <PageSkeleton />
        ) : (
          <>
            {/* Account Section */}
            <Card sx={cardStyle}>
              <Typography sx={sectionHeaderStyle} component="h2">Account</Typography>
              <List disablePadding aria-label="Account Settings">
                <ListItem
                  tabIndex={0}
                  role="button"
                  aria-label="Edit Profile"
                  onClick={() => navigate('/user/home')}
                  sx={listItemStyle}
                >
                  <ListItemIcon sx={iconStyle}>
                    <PersonOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Edit Profile"
                    primaryTypographyProps={primaryTextStyle}
                  />
                  <ChevronRightIcon sx={{ color: '#9CA3AF' }} />
                </ListItem>
                <Divider component="li" sx={{ borderColor: '#F3F4F6' }} />
                <ListItem
                  tabIndex={0}
                  role="button"
                  aria-label="Change Password"
                  sx={listItemStyle}
                >
                  <ListItemIcon sx={iconStyle}>
                    <LockOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Change Password"
                    primaryTypographyProps={primaryTextStyle}
                  />
                  <ChevronRightIcon sx={{ color: '#9CA3AF' }} />
                </ListItem>
              </List>
            </Card>

            {/* Notifications Section */}
            <Card sx={cardStyle}>
              <Typography sx={sectionHeaderStyle} component="h2">Notifications</Typography>
              <List disablePadding aria-label="Notification Preferences">
                <ListItem sx={{ ...listItemStyle, cursor: 'default', '&:hover': { backgroundColor: 'transparent' } }}>
                  <ListItemIcon sx={iconStyle}>
                    <NotificationsNoneOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Push Notifications"
                    secondary="Receive instant updates about your reports"
                    primaryTypographyProps={primaryTextStyle}
                    secondaryTypographyProps={{ fontSize: '0.8rem', color: '#6B7280' }}
                  />
                  <ListItemSecondaryAction sx={{ right: 24 }}>
                    <Switch
                      edge="end"
                      checked={pushNotifications}
                      onChange={(e) => setPushNotifications(e.target.checked)}
                      inputProps={{ 'aria-label': 'Push Notifications' }}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': { color: '#2563EB' },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#2563EB' },
                      }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider component="li" sx={{ borderColor: '#F3F4F6' }} />
                <ListItem sx={{ ...listItemStyle, cursor: 'default', '&:hover': { backgroundColor: 'transparent' } }}>
                  <ListItemIcon sx={iconStyle}>
                    <EmailOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email Notifications"
                    secondary="Receive weekly digest and account alerts"
                    primaryTypographyProps={primaryTextStyle}
                    secondaryTypographyProps={{ fontSize: '0.8rem', color: '#6B7280' }}
                  />
                  <ListItemSecondaryAction sx={{ right: 24 }}>
                    <Switch
                      edge="end"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      inputProps={{ 'aria-label': 'Email Notifications' }}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': { color: '#2563EB' },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#2563EB' },
                      }}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Card>

            {/* Privacy Section */}
            <Card sx={cardStyle}>
              <Typography sx={sectionHeaderStyle} component="h2">Privacy</Typography>
              <List disablePadding aria-label="Privacy Settings">
                <ListItem tabIndex={0} role="button" aria-label="Privacy Policy" sx={listItemStyle}>
                  <ListItemIcon sx={iconStyle}>
                    <ShieldOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Privacy Policy"
                    primaryTypographyProps={primaryTextStyle}
                  />
                  <ChevronRightIcon sx={{ color: '#9CA3AF' }} />
                </ListItem>
                <Divider component="li" sx={{ borderColor: '#F3F4F6' }} />
                <ListItem tabIndex={0} role="button" aria-label="Terms and Conditions" sx={listItemStyle}>
                  <ListItemIcon sx={iconStyle}>
                    <DescriptionOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Terms & Conditions"
                    primaryTypographyProps={primaryTextStyle}
                  />
                  <ChevronRightIcon sx={{ color: '#9CA3AF' }} />
                </ListItem>
              </List>
            </Card>

            {/* Help Section */}
            <Card sx={cardStyle}>
              <Typography sx={sectionHeaderStyle} component="h2">Help</Typography>
              <List disablePadding aria-label="Help and Support Links">
                <ListItem
                  tabIndex={0}
                  role="button"
                  aria-label="Help Center"
                  onClick={() => navigate('/support')}
                  sx={listItemStyle}
                >
                  <ListItemIcon sx={iconStyle}>
                    <HelpOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Help Center"
                    primaryTypographyProps={primaryTextStyle}
                  />
                  <ChevronRightIcon sx={{ color: '#9CA3AF' }} />
                </ListItem>
                <Divider component="li" sx={{ borderColor: '#F3F4F6' }} />
                <ListItem
                  tabIndex={0}
                  role="button"
                  aria-label="Contact Support"
                  onClick={() => navigate('/support')}
                  sx={listItemStyle}
                >
                  <ListItemIcon sx={iconStyle}>
                    <SupportAgentIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Contact Support"
                    primaryTypographyProps={primaryTextStyle}
                  />
                  <ChevronRightIcon sx={{ color: '#9CA3AF' }} />
                </ListItem>
              </List>
            </Card>

            {/* About Section */}
            <Card sx={cardStyle}>
              <Typography sx={sectionHeaderStyle} component="h2">About</Typography>
              <CardContent sx={{ px: 3, py: 2, '&:last-child': { pb: 2.5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        backgroundColor: '#2563EB',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        p: 0.5,
                      }}
                    >
                      <Box
                        component="img"
                        src="https://res.cloudinary.com/dqz2hem3m/image/upload/v1750665330/logo_ep4az4.png"
                        alt="UndoBharat Logo"
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem', fontFamily: '"Inter", sans-serif' }}>
                        {sampleAppInfo.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.8rem', fontFamily: '"Inter", sans-serif' }}>
                        {sampleAppInfo.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      backgroundColor: '#F3F4F6',
                      color: '#4B5563',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    Version {sampleAppInfo.version}
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Logout Button */}
            <Box sx={{ mt: 4, mb: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="outlined"
                color="error"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                aria-label="Logout of account"
                sx={{
                  px: 4,
                  py: 1.25,
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  borderColor: '#FCA5A5',
                  color: '#DC2626',
                  fontFamily: '"Inter", sans-serif',
                  '&:hover': {
                    borderColor: '#DC2626',
                    backgroundColor: '#FEF2F2',
                  },
                  width: { xs: '100%', sm: 'auto' },
                  minWidth: 200,
                }}
              >
                Logout
              </Button>
            </Box>
          </>
        )}
      </Container>

      {/* Reused Bottom Navigation */}
      <BottomNavBar />
    </Box>
  );
};

export default Settings;
