import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import IssueDetails from '../components/Report/IssueDetails';
import LocationDetails from '../components/Report/LocationDetails';
import EvidenceSection from '../components/Report/EvidenceSection';
import ReviewSubmit from '../components/Report/ReviewSubmit';
import '../styles/report.css';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShieldIcon from '@mui/icons-material/ShieldOutlined';
import SuccessIcon from '@mui/icons-material/CheckCircle';
import PrintIcon from '@mui/icons-material/Print';
import VerifiedIcon from '@mui/icons-material/VerifiedUser';

const ReportNow = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [reportData, setReportData] = useState({
    issueCategory: '',
    issueTitle: '',
    description: '',
    location: '',
    landmark: '',
    district: '',
    state: '',
    pincode: '',
    priority: 'Low',
    anonymous: false,
    phone: '',
    email: '',
    images: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Step information
  const steps = [
    { number: 1, title: 'Issue Details', percent: '25%' },
    { number: 2, title: 'Location Details', percent: '50%' },
    { number: 3, title: 'Evidence & Contacts', percent: '75%' },
    { number: 4, title: 'Review & Submit', percent: '100%' },
  ];

  // Validation rules per step
  const validateStep = (currentStep) => {
    const tempErrors = {};
    if (currentStep === 1) {
      if (!reportData.issueCategory) tempErrors.issueCategory = 'Please select an issue category.';
      if (!reportData.issueTitle.trim()) tempErrors.issueTitle = 'Please enter an issue title.';
      if (!reportData.description.trim()) tempErrors.description = 'Please enter a description.';
    } else if (currentStep === 2) {
      if (!reportData.location.trim()) tempErrors.location = 'Please enter the street address/location.';
      if (!reportData.district.trim()) tempErrors.district = 'Please enter the district name.';
      if (!reportData.state) tempErrors.state = 'Please select the state or union territory.';
      if (!reportData.pincode.trim()) {
        tempErrors.pincode = 'Please enter the pincode.';
      } else if (!/^\d{6}$/.test(reportData.pincode)) {
        tempErrors.pincode = 'Pincode must be exactly 6 digits.';
      }
    } else if (currentStep === 3) {
      if (!reportData.anonymous) {
        if (!reportData.phone.trim()) {
          tempErrors.phone = 'Please enter your phone number.';
        } else if (!/^\d{10}$/.test(reportData.phone)) {
          tempErrors.phone = 'Phone number must be exactly 10 digits.';
        }
        if (!reportData.email.trim()) {
          tempErrors.email = 'Please enter your email address.';
        } else if (!/\S+@\S+\.\S+/.test(reportData.email)) {
          tempErrors.email = 'Please enter a valid email address.';
        }
      }
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitReport = () => {
    // Generate a random official-looking reference number
    const year = new Date().getFullYear();
    const rand = Math.floor(100000 + Math.random() * 900000);
    setReferenceId(`UB-${year}-${rand}`);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveStep = () => {
    switch (step) {
      case 1:
        return <IssueDetails reportData={reportData} setReportData={setReportData} errors={errors} />;
      case 2:
        return <LocationDetails reportData={reportData} setReportData={setReportData} errors={errors} />;
      case 3:
        return <EvidenceSection reportData={reportData} setReportData={setReportData} errors={errors} />;
      case 4:
        return <ReviewSubmit reportData={reportData} setStep={setStep} onSubmit={handleSubmitReport} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="report-page-wrapper">
      <Navbar />

      <main className="report-container">
        {!isSubmitted ? (
          <>
            {/* Step Progress Tracker */}
            <div className="report-card" style={{ paddingBottom: '20px', marginBottom: '20px' }}>
              <div className="step-progress-wrapper">
                <div className="step-progress-header">
                  <div className="step-indicator-left">
                    <span className="step-number-circle">{step}</span>
                    <span className="step-title-text">{steps[step - 1].title}</span>
                  </div>
                  <div className="step-progress-right">
                    Step {step} of 4 • {steps[step - 1].percent}
                  </div>
                </div>
                <div className="progress-bar-track">
                  <div
                    className="progress-bar-fill"
                    style={{ width: steps[step - 1].percent }}
                  />
                </div>
              </div>

              {/* DigiLocker Identity Badge for Govt Portal look */}
              {step === 1 && (
                <div className="verified-identity-card">
                  <div className="identity-left">
                    <div className="identity-avatar-placeholder">
                      <VerifiedIcon />
                    </div>
                    <div className="identity-details">
                      <h4>
                        Verified Identity <span className="green-dot" />
                      </h4>
                      <p>Secured via Aadhaar e-KYC / DigiLocker</p>
                    </div>
                  </div>
                  <button type="button" className="identity-change-btn">
                    Change
                  </button>
                </div>
              )}

              {/* Active Step Form Component */}
              {renderActiveStep()}

              {/* Data Protection Shield Banner (except Review Step) */}
              {step < 4 && (
                <div className="info-banner" style={{ marginTop: '24px', marginBottom: '0px' }}>
                  <ShieldIcon className="info-banner-icon" />
                  <p className="info-banner-text">
                    Your data is protected under the Digital Personal Data Protection Act (DPDPA). We use 256-bit secure encryption to store and route your report to public officials.
                  </p>
                </div>
              )}
            </div>

            {/* Stepper Navigation Buttons */}
            {step < 4 && (
              <div className="action-buttons-container">
                <button type="button" onClick={handleNext} className="btn-primary">
                  Continue to Step {step + 1}
                  <ArrowForwardIcon style={{ fontSize: 18 }} />
                </button>

                {step > 1 ? (
                  <button type="button" onClick={handleBack} className="btn-secondary">
                    <ArrowBackIcon style={{ fontSize: 16 }} />
                    Back to Previous Step
                  </button>
                ) : (
                  <button type="button" onClick={() => navigate('/')} className="btn-secondary">
                    <ArrowBackIcon style={{ fontSize: 16 }} />
                    Back to Overview
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          /* Submission Success Acknowledgement Screen */
          <div className="report-card" style={{ textAlign: 'center', padding: '40px 24px' }}>
            <div style={{ color: '#22c55e', fontSize: '64px', marginBottom: '16px' }}>
              <SuccessIcon style={{ fontSize: 72 }} />
            </div>
            <h2 className="section-title" style={{ fontSize: '26px', marginBottom: '6px' }}>
              Report Submitted Successfully
            </h2>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 24px 0' }}>
              Thank you for contributing to a better India. Your report has been registered on the national grievance routing system.
            </p>

            {/* Receipt Summary Box */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'left',
                marginBottom: '28px',
              }}
            >
              <div style={{ borderBottom: '1px dashed #cbd5e1', paddingBottom: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>ACK REFERENCE NUMBER</span>
                <div style={{ fontSize: '20px', color: '#1f2937', fontWeight: '700', letterSpacing: '0.5px', marginTop: '2px' }}>
                  {referenceId}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#6b7280', display: 'block' }}>DATE OF SUBMISSION</span>
                  <span style={{ fontSize: '13px', color: '#1f2937', fontWeight: '600' }}>
                    {new Date().toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#6b7280', display: 'block' }}>ISSUE CATEGORY</span>
                  <span style={{ fontSize: '13px', color: '#1f2937', fontWeight: '600' }}>
                    {reportData.issueCategory}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#6b7280', display: 'block' }}>LOCATION</span>
                  <span style={{ fontSize: '13px', color: '#1f2937', fontWeight: '600' }}>
                    {reportData.district}, {reportData.state}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#6b7280', display: 'block' }}>REPORTING MODE</span>
                  <span style={{ fontSize: '13px', color: '#1f2937', fontWeight: '600' }}>
                    {reportData.anonymous ? 'Anonymous' : 'Public ID'}
                  </span>
                </div>
              </div>
            </div>

            <div className="info-banner" style={{ textAlign: 'left', marginBottom: '32px' }}>
              <ShieldIcon className="info-banner-icon" />
              <p className="info-banner-text">
                An SMS and email acknowledgment containing the status tracking link has been dispatched. Action will be initiated by the respective municipal department within 48 business hours.
              </p>
            </div>

            {/* Action buttons on success */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                type="button"
                onClick={() => window.print()}
                className="btn-primary"
                style={{ backgroundColor: '#1f2937', boxShadow: 'none' }}
              >
                <PrintIcon style={{ fontSize: 18 }} />
                Print Acknowledgement
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="btn-secondary"
                style={{ alignSelf: 'center' }}
              >
                Back to Home Page
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ReportNow;
