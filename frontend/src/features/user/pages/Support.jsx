import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import Header from '../../../components/userComponents/Header';
import BottomNavBar from '../../../components/userComponents/BottomNavigation';
import PageSkeleton from '../../../components/dashboardComponents/SkeletonLoader';
import {
  sampleSupportContact,
  sampleEmergencyHelplines,
  sampleFaqs,
} from '../../../data/sampleSupport';

// Icons
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

const Support = () => {
  const [loading, setLoading] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  const handleSupportClick = () => {
    console.log('Support clicked');
  };

  const handleFeedbackClick = () => {
    console.log('Feedback clicked');
  };

  const cardStyle = {
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
    border: '1px solid #E5E7EB',
    mb: 3,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  };

  const quickActionCardStyle = {
    borderRadius: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
    border: '1px solid #E5E7EB',
    height: '100%',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      borderColor: '#2563EB',
      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.1)',
      transform: 'translateY(-2px)',
    },
    '&:focus-visible': {
      outline: '2px solid #2563EB',
      outlineOffset: '2px',
    },
  };

  const quickActions = [
    {
      title: 'Contact Support',
      description: 'Talk with our support team.',
      icon: <SupportAgentIcon sx={{ fontSize: 28, color: '#2563EB' }} />,
      onClick: handleSupportClick,
    },
    {
      title: 'FAQs',
      description: 'Find answers to common questions.',
      icon: <HelpOutlineOutlinedIcon sx={{ fontSize: 28, color: '#2563EB' }} />,
      onClick: () => {
        const faqElement = document.getElementById('faq-section');
        if (faqElement) faqElement.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      title: 'Report a Problem',
      description: 'Report issues related to the application.',
      icon: <ReportProblemOutlinedIcon sx={{ fontSize: 28, color: '#2563EB' }} />,
      onClick: () => console.log('Report a Problem clicked'),
    },
    {
      title: 'Feedback',
      description: 'Help us improve UndoBharat.',
      icon: <RateReviewOutlinedIcon sx={{ fontSize: 28, color: '#2563EB' }} />,
      onClick: handleFeedbackClick,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#F9FAFB',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Reused Top Header */}
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
        {/* Header Title Section */}
        <Box sx={{ mb: 4 }}>
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
            Support Center
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#6B7280', fontFamily: '"Inter", sans-serif', mt: 0.5 }}
          >
            We're here to help you with your reports and account.
          </Typography>
        </Box>

        {loading ? (
          <PageSkeleton />
        ) : (
          <>
            {/* Quick Actions Cards Section */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: '#111827',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.1rem',
                  mb: 2,
                }}
              >
                Quick Actions
              </Typography>
              <Grid container spacing={{ xs: 2, sm: 3 }}>
                {quickActions.map((action, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6 }}>
                    <Card
                      tabIndex={0}
                      role="button"
                      aria-label={`${action.title}: ${action.description}`}
                      sx={quickActionCardStyle}
                      onClick={action.onClick}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          action.onClick();
                        }
                      }}
                    >
                      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '12px',
                            backgroundColor: '#EFF6FF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                          }}
                        >
                          {action.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: '#111827',
                            fontFamily: '"Inter", sans-serif',
                            mb: 0.5,
                          }}
                        >
                          {action.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#6B7280',
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '0.85rem',
                          }}
                        >
                          {action.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Contact Information Card */}
            <Card sx={cardStyle}>
              <Box sx={{ p: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: '#111827',
                    fontFamily: '"Inter", sans-serif',
                    mb: 2.5,
                  }}
                >
                  Contact Information
                </Typography>
                <Stack spacing={2.5}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '10px',
                        backgroundColor: '#F3F4F6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <EmailOutlinedIcon sx={{ color: '#4B5563', fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', color: '#6B7280', fontFamily: '"Inter", sans-serif' }}>
                        Support Email
                      </Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: '#111827', fontFamily: '"Inter", sans-serif', mt: 0.25 }}>
                        {sampleSupportContact.email}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ borderColor: '#F3F4F6' }} />

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '10px',
                        backgroundColor: '#F3F4F6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <PhoneOutlinedIcon sx={{ color: '#4B5563', fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', color: '#6B7280', fontFamily: '"Inter", sans-serif' }}>
                        Toll-Free Phone
                      </Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: '#111827', fontFamily: '"Inter", sans-serif', mt: 0.25 }}>
                        {sampleSupportContact.phone}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ borderColor: '#F3F4F6' }} />

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '10px',
                        backgroundColor: '#F3F4F6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <AccessTimeOutlinedIcon sx={{ color: '#4B5563', fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', color: '#6B7280', fontFamily: '"Inter", sans-serif' }}>
                        Working Hours
                      </Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: '#111827', fontFamily: '"Inter", sans-serif', mt: 0.25 }}>
                        {sampleSupportContact.workingDays}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#6B7280', fontSize: '0.85rem', fontFamily: '"Inter", sans-serif' }}>
                        {sampleSupportContact.workingHours}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Card>

            {/* Frequently Asked Questions Section */}
            <Box id="faq-section" sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: '#111827',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '1.1rem',
                  mb: 2,
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Box sx={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E5E7EB', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                {sampleFaqs.map((faq, index) => (
                  <Accordion
                    key={faq.id}
                    expanded={expandedFaq === faq.id}
                    onChange={handleFaqChange(faq.id)}
                    disableGutters
                    elevation={0}
                    sx={{
                      borderBottom: index < sampleFaqs.length - 1 ? '1px solid #F3F4F6' : 'none',
                      '&:before': { display: 'none' },
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#6B7280' }} />}
                      aria-controls={`${faq.id}-content`}
                      id={`${faq.id}-header`}
                      sx={{
                        px: 3,
                        py: 1,
                        '& .MuiAccordionSummary-content': { my: 1 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          color: '#111827',
                          fontFamily: '"Inter", sans-serif',
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails id={`${faq.id}-content`} sx={{ px: 3, pb: 2.5, pt: 0 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4B5563',
                          fontFamily: '"Inter", sans-serif',
                          lineHeight: 1.6,
                          fontSize: '0.9rem',
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>

            {/* Emergency Information Card */}
            <Card
              sx={{
                borderRadius: '16px',
                backgroundColor: '#FEF2F2',
                border: '1px solid #FCA5A5',
                boxShadow: '0 1px 3px rgba(220, 38, 38, 0.05)',
                mb: 3,
                p: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <WarningAmberOutlinedIcon sx={{ color: '#DC2626', fontSize: 24 }} />
                <Typography
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: '#991B1B',
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  Emergency Helpline
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: '#B91C1C', fontFamily: '"Inter", sans-serif', mb: 2.5, fontSize: '0.875rem' }}
              >
                For urgent law enforcement, fire safety, or medical emergencies, please call national emergency numbers directly:
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      border: '1px solid #FECACA',
                    }}
                  >
                    <LocalPoliceOutlinedIcon sx={{ color: '#DC2626', fontSize: 22 }} />
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#7F1D1D', fontFamily: '"Inter", sans-serif' }}>
                        Police
                      </Typography>
                      <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#991B1B', fontFamily: '"Inter", sans-serif' }}>
                        {sampleEmergencyHelplines[0].number}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      border: '1px solid #FECACA',
                    }}
                  >
                    <LocalFireDepartmentOutlinedIcon sx={{ color: '#DC2626', fontSize: 22 }} />
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#7F1D1D', fontFamily: '"Inter", sans-serif' }}>
                        Fire
                      </Typography>
                      <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#991B1B', fontFamily: '"Inter", sans-serif' }}>
                        {sampleEmergencyHelplines[1].number}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      border: '1px solid #FECACA',
                    }}
                  >
                    <MedicalServicesOutlinedIcon sx={{ color: '#DC2626', fontSize: 22 }} />
                    <Box>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#7F1D1D', fontFamily: '"Inter", sans-serif' }}>
                        Ambulance
                      </Typography>
                      <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#991B1B', fontFamily: '"Inter", sans-serif' }}>
                        {sampleEmergencyHelplines[2].number}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>

            {/* Action Buttons Section */}
            <Box
              sx={{
                mt: 1,
                mb: 6,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                startIcon={<SupportAgentIcon />}
                onClick={handleSupportClick}
                aria-label="Contact Support team"
                sx={{
                  px: 4,
                  py: 1.25,
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  backgroundColor: '#2563EB',
                  boxShadow: '0 2px 6px rgba(37, 99, 235, 0.25)',
                  fontFamily: '"Inter", sans-serif',
                  '&:hover': {
                    backgroundColor: '#1D4ED8',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.35)',
                  },
                }}
              >
                Contact Support
              </Button>

              <Button
                variant="outlined"
                startIcon={<FeedbackOutlinedIcon />}
                onClick={handleFeedbackClick}
                aria-label="Send Feedback"
                sx={{
                  px: 4,
                  py: 1.25,
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  borderColor: '#D1D5DB',
                  color: '#374151',
                  fontFamily: '"Inter", sans-serif',
                  '&:hover': {
                    borderColor: '#2563EB',
                    color: '#2563EB',
                    backgroundColor: '#EFF6FF',
                  },
                }}
              >
                Send Feedback
              </Button>
            </Box>
          </>
        )}
      </Container>

      {/* Reused Fixed Bottom Navigation */}
      <BottomNavBar />
    </Box>
  );
};

export default Support;
