import React, { useState } from 'react';
import IssueIcon from '@mui/icons-material/ReportProblem';
import LocationIcon from '@mui/icons-material/LocationOn';
import ContactIcon from '@mui/icons-material/ContactPhone';
import CheckedIcon from '@mui/icons-material/CheckCircle';
import ShieldIcon from '@mui/icons-material/Shield';
import ErrorIcon from '@mui/icons-material/Error';

const ReviewSubmit = ({ reportData, setStep, onSubmit, errors: submissionErrors }) => {
  const [declared, setDeclared] = useState(false);
  const [declarationError, setDeclarationError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleEditSection = (stepNum) => {
    setStep(stepNum);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!declared) {
      setDeclarationError('You must accept the declaration to submit the report.');
      return;
    }
    setDeclarationError('');
    setSubmitting(true);
    
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1800));
    onSubmit();
    setSubmitting(false);
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'badge-high';
      case 'Medium':
        return 'badge-medium';
      case 'Low':
      default:
        return 'badge-low';
    }
  };

  return (
    <div>
      <h2 className="section-title">Review & Submit</h2>
      <p className="section-subtitle">
        Double-check your report details before final submission to the portal.
      </p>

      {/* Review Card Details */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        
        {/* Section 1: Issue Details */}
        <div className="review-section">
          <div className="review-section-header">
            <span className="review-section-title">
              <IssueIcon style={{ color: '#0b5ed7', fontSize: 18 }} />
              1. Issue Details
            </span>
            <button
              type="button"
              className="review-edit-link"
              onClick={() => handleEditSection(1)}
            >
              Edit
            </button>
          </div>
          <div className="review-grid">
            <div className="review-item">
              <span className="review-label">Category</span>
              <span className="review-value">{reportData.issueCategory || 'Not specified'}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Priority Level</span>
              <span className={`priority-indicator-badge ${getPriorityClass(reportData.priority)}`}>
                <span 
                  className="green-dot" 
                  style={{
                    backgroundColor: reportData.priority === 'High' ? '#ef4444' : reportData.priority === 'Medium' ? '#f97316' : '#22c55e'
                  }}
                />
                {reportData.priority || 'Low'}
              </span>
            </div>
            <div className="review-item review-grid-full">
              <span className="review-label">Title</span>
              <span className="review-value" style={{ fontWeight: '600' }}>{reportData.issueTitle || 'Not specified'}</span>
            </div>
            <div className="review-item review-grid-full">
              <span className="review-label">Description</span>
              <span className="review-value review-value-description">{reportData.description || 'Not specified'}</span>
            </div>
          </div>
        </div>

        {/* Section 2: Location Details */}
        <div className="review-section">
          <div className="review-section-header">
            <span className="review-section-title">
              <LocationIcon style={{ color: '#0b5ed7', fontSize: 18 }} />
              2. Location Details
            </span>
            <button
              type="button"
              className="review-edit-link"
              onClick={() => handleEditSection(2)}
            >
              Edit
            </button>
          </div>
          <div className="review-grid">
            <div className="review-item review-grid-full">
              <span className="review-label">Street Address / Location</span>
              <span className="review-value">{reportData.location || 'Not specified'}</span>
            </div>
            {reportData.landmark && (
              <div className="review-item review-grid-full">
                <span className="review-label">Landmark</span>
                <span className="review-value">{reportData.landmark}</span>
              </div>
            )}
            <div className="review-item">
              <span className="review-label">District</span>
              <span className="review-value">{reportData.district || 'Not specified'}</span>
            </div>
            <div className="review-item">
              <span className="review-label">State / UT</span>
              <span className="review-value">{reportData.state || 'Not specified'}</span>
            </div>
            <div className="review-item">
              <span className="review-label">Pincode</span>
              <span className="review-value">{reportData.pincode || 'Not specified'}</span>
            </div>
          </div>
        </div>

        {/* Section 3: Evidence & Identity */}
        <div className="review-section">
          <div className="review-section-header">
            <span className="review-section-title">
              <ContactIcon style={{ color: '#0b5ed7', fontSize: 18 }} />
              3. Identity & Contact Information
            </span>
            <button
              type="button"
              className="review-edit-link"
              onClick={() => handleEditSection(3)}
            >
              Edit
            </button>
          </div>
          <div className="review-grid">
            <div className="review-item review-grid-full">
              <span className="review-label">Report Mode</span>
              <span className="review-value" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {reportData.anonymous ? (
                  <>
                    <ShieldIcon style={{ color: '#6b7280', fontSize: 18 }} /> Anonymous Reporting Active (Personal info hidden)
                  </>
                ) : (
                  <>
                    <CheckedIcon style={{ color: '#22c55e', fontSize: 18 }} /> Verified Identity
                  </>
                )}
              </span>
            </div>
            {!reportData.anonymous && (
              <>
                <div className="review-item">
                  <span className="review-label">Contact Phone</span>
                  <span className="review-value">+91 {reportData.phone || 'Not specified'}</span>
                </div>
                <div className="review-item">
                  <span className="review-label">Contact Email</span>
                  <span className="review-value">{reportData.email || 'Not specified'}</span>
                </div>
              </>
            )}
            <div className="review-item review-grid-full">
              <span className="review-label">Attached Evidence</span>
              <span className="review-value" style={{ color: '#6b7280', fontSize: 13, fontStyle: 'italic' }}>
                No images uploaded (Placeholder mode active)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Citizen Undertaking / Declaration Checkbox */}
      <div className="declaration-container">
        <div className="declaration-checkbox-wrapper">
          <input
            type="checkbox"
            id="citizen-declaration"
            checked={declared}
            onChange={(e) => {
              setDeclared(e.target.checked);
              if (e.target.checked) setDeclarationError('');
            }}
            className="declaration-checkbox"
          />
        </div>
        <label htmlFor="citizen-declaration" className="declaration-text">
          I hereby declare that all the information provided in this report is correct, genuine, and verified to the best of my knowledge. I understand that submitting false or malicious reports is punishable under public safety rules.
        </label>
      </div>
      {declarationError && (
        <span className="validation-error" style={{ marginTop: '6px', display: 'block' }}>
          <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
          {declarationError}
        </span>
      )}
      {submissionErrors && Object.keys(submissionErrors).length > 0 && (
        <span className="validation-error" style={{ marginTop: '8px', display: 'block' }}>
          <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
          Please complete all required fields in the previous steps before submitting.
        </span>
      )}

      {/* Action Buttons: Submit */}
      <div className="action-buttons-container" style={{ marginTop: '24px' }}>
        <button
          type="button"
          onClick={handleFormSubmit}
          disabled={submitting}
          className="btn-primary"
        >
          {submitting ? (
            <>
              <div className="spinner" />
              Submitting Report...
            </>
          ) : (
            <>
              Submit Final Report
              <span style={{ fontSize: 18 }}>✓</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ReviewSubmit;
