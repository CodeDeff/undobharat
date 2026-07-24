import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";

import ProgressSection from "../../../components/Report/ProgressSection";
import VerifiedIdentityCard from "../../../components/Report/VerifiedIdentityCard";
import IdentityInformation from "../../../components/Report/IdentityInformation";
import SecurityNotice from "../../../components/Report/SecurityNotice";
import BottomNavigation from "../../../components/Report/BottomNavigation";

import IssueDetails from "../../../components/Report/IssueDetails";
import LocationDetails from "../../../components/Report/LocationDetails";
import EvidenceSection from "../../../components/Report/EvidenceSection";
import ReviewSubmit from "../../../components/Report/ReviewSubmit";

import "../../../styles/report.css";

// Material UI icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SuccessIcon from '@mui/icons-material/CheckCircle';
import PrintIcon from '@mui/icons-material/Print';
import ShieldIcon from '@mui/icons-material/ShieldOutlined';

const ReportNow = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [reportData, setReportData] = useState({
    // Step 1: Personal Details (All empty by default)
    fullName: '',
    aadhaar: '',
    phone: '',
    alternatePhone: '',
    email: '',
    language: '',

    // Steps 2-5: Grievance Details
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
    images: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // 5-step metadata
  const stepsMetadata = [
    { number: 1, title: 'Personal Details', percent: 20 },
    { number: 2, title: 'Issue Details', percent: 40 },
    { number: 3, title: 'Location Details', percent: 60 },
    { number: 4, title: 'Evidence & Contacts', percent: 80 },
    { number: 5, title: 'Review & Submit', percent: 100 },
  ];

  // Specific validator for Step 1 fields
  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'fullName':
        if (!value || !value.trim()) {
          errorMsg = 'Please enter your full name.';
        } else if (value.trim().length < 3) {
          errorMsg = 'Full name must be at least 3 characters.';
        } else if (value.trim().length > 50) {
          errorMsg = 'Full name must be at most 50 characters.';
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
          errorMsg = 'Only alphabets and spaces are allowed.';
        }
        break;
      case 'aadhaar': {
        const cleanAadhaar = value.replace(/\s/g, '');
        if (!cleanAadhaar) {
          errorMsg = 'Aadhaar number is required.';
        } else if (!/^\d+$/.test(cleanAadhaar)) {
          errorMsg = 'Aadhaar number must contain digits only.';
        } else if (cleanAadhaar.length !== 12) {
          errorMsg = 'Aadhaar number must contain exactly 12 digits.';
        }
        break;
      }
      case 'phone':
        if (!value || !value.trim()) {
          errorMsg = 'Phone number is required.';
        } else if (!/^[6-9]\d{9}$/.test(value.trim())) {
          errorMsg = 'Please enter a valid mobile number.';
        }
        break;
      case 'alternatePhone':
        if (value && value.trim() && !/^[6-9]\d{9}$/.test(value.trim())) {
          errorMsg = 'Please enter a valid mobile number.';
        }
        break;
      case 'email':
        if (!value || !value.trim()) {
          errorMsg = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          errorMsg = 'Please enter a valid email address.';
        }
        break;
      case 'language':
        if (!value) {
          errorMsg = 'Please select a preferred communication language.';
        }
        break;
      default:
        break;
    }
    return errorMsg;
  };

  const handleFieldBlur = (name, value) => {
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleFieldChange = (name, value) => {
    if (errors[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  // Validation rules per step
  const validateStep = (currentStep) => {
    const tempErrors = {};
    if (currentStep === 2) {
      if (!reportData.issueCategory) tempErrors.issueCategory = 'Please select an issue category.';
      if (!reportData.issueTitle.trim()) tempErrors.issueTitle = 'Please enter an issue title.';
      if (!reportData.description.trim()) tempErrors.description = 'Please enter a description.';
    } else if (currentStep === 3) {
      if (!reportData.location.trim()) tempErrors.location = 'Please enter the street address/location.';
      if (!reportData.district.trim()) tempErrors.district = 'Please enter the district name.';
      if (!reportData.state) tempErrors.state = 'Please select the state or union territory.';
      if (!reportData.pincode.trim()) {
        tempErrors.pincode = 'Please enter the pincode.';
      } else if (!/^\d{6}$/.test(reportData.pincode)) {
        tempErrors.pincode = 'Pincode must be exactly 6 digits.';
      }
    } else if (currentStep === 4) {
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
    if (step === 1) {
      const tempErrors = {};
      let firstErrorField = null;
      const fieldsToValidate = ['fullName', 'aadhaar', 'phone', 'alternatePhone', 'email', 'language'];

      fieldsToValidate.forEach((field) => {
        const errorMsg = validateField(field, reportData[field]);
        if (errorMsg) {
          tempErrors[field] = errorMsg;
          if (!firstErrorField) {
            firstErrorField = field;
          }
        }
      });

      setErrors(tempErrors);

      if (Object.keys(tempErrors).length > 0) {
        // Scroll to the first invalid field and focus it
        setTimeout(() => {
          const errorElement = document.getElementsByName(firstErrorField)[0];
          if (errorElement) {
            errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            errorElement.focus();
          }
        }, 100);
        return;
      }
    } else {
      if (!validateStep(step)) return;
    }

    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIdentityChange = () => {
    // Allows resetting or editing identity fields
    setReportData((prev) => ({
      ...prev,
      fullName: '',
      aadhaar: '',
      phone: '',
      email: '',
    }));
  };

  const handleSubmitReport = () => {
    const year = new Date().getFullYear();
    const rand = Math.floor(100000 + Math.random() * 900000);
    setReferenceId(`UB-${year}-${rand}`);
    setIsSubmitted(true);
    console.log("FormData:", reportData)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveStep = () => {
    switch (step) {
      case 1:
        return (
          <IdentityInformation
            reportData={reportData}
            setReportData={setReportData}
            errors={errors}
            onFieldBlur={handleFieldBlur}
            onFieldChange={handleFieldChange}
          />
        );
      case 2:
        return (
          <IssueDetails
            reportData={reportData}
            setReportData={setReportData}
            errors={errors}
          />
        );
      case 3:
        return (
          <LocationDetails
            reportData={reportData}
            setReportData={setReportData}
            errors={errors}
          />
        );
      case 4:
        return (
          <EvidenceSection
            reportData={reportData}
            setReportData={setReportData}
            errors={errors}
          />
        );
      case 5:
        return (
          <ReviewSubmit
            reportData={reportData}
            setStep={setStep}
            onSubmit={handleSubmitReport}
            errors={errors}
          />
        );
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
            {/* Step Progress Tracker Card */}
            <div className="report-card">
              <ProgressSection
                currentStep={step}
                totalSteps={5}
                title={stepsMetadata[step - 1].title}
                percentage={stepsMetadata[step - 1].percent}
              />

              {/* Verified Identity Card (Rendered for Step 1 only) */}
              {step === 1 && (
                <VerifiedIdentityCard onIdentityChange={handleIdentityChange} />
              )}

              {/* Active Step Form Component */}
              {renderActiveStep()}

              {/* Security Shield Notice (Rendered for Step 1 only as per layout flow, or standard steps) */}
              {step === 1 && <SecurityNotice />}

              {/* Stepper Navigation Buttons */}
              <div className="action-buttons-container" style={{ marginTop: '24px' }}>
                {step < 5 ? (
                  <button type="button" onClick={handleNext} className="btn-primary">
                    Continue to Step {step + 1}
                    <ArrowForwardIcon style={{ fontSize: 18 }} />
                  </button>
                ) : null}

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
            </div>
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
                  <span style={{ fontSize: '11px', color: '#6b7280', display: 'block' }}>CITIZEN NAME</span>
                  <span style={{ fontSize: '13px', color: '#1f2937', fontWeight: '600' }}>
                    {reportData.fullName}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#6b7280', display: 'block' }}>ISSUE CATEGORY</span>
                  <span style={{ fontSize: '13px', color: '#1f2937', fontWeight: '600' }}>
                    {reportData.issueCategory || 'Civic Issue'}
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#6b7280', display: 'block' }}>LOCATION</span>
                  <span style={{ fontSize: '13px', color: '#1f2937', fontWeight: '600' }}>
                    {reportData.district || 'N/A'}, {reportData.state || 'N/A'}
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

      {/* Sticky Bottom Navigation Bar */}
      <BottomNavigation />

      <Footer />
    </div>
  );
};

export default ReportNow;
