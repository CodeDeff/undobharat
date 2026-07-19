import React from 'react';
import UploadIcon from '@mui/icons-material/CloudUpload';
import GlobeIcon from '@mui/icons-material/Public';
import PhoneIcon from '@mui/icons-material/Smartphone';
import MailIcon from '@mui/icons-material/Mail';
import ShieldIcon from '@mui/icons-material/ShieldOutlined';
import ErrorIcon from '@mui/icons-material/Error';

const EvidenceSection = ({ reportData, setReportData, errors }) => {
  const handleToggleAnonymous = () => {
    setReportData((prev) => ({
      ...prev,
      anonymous: !prev.anonymous,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="section-title">Evidence & Contact Details</h2>
      <p className="section-subtitle">
        Upload supporting evidence of the issue and provide contact information to receive updates.
      </p>

      {/* Image Upload Card UI - Commented out upload logic, placeholder UI only */}
      <div className="upload-card-placeholder">
        {/*
          <ImageUpload
            images={reportData.images}
            setImages={(imgs) => setReportData(prev => ({ ...prev, images: imgs }))}
          />
        */}
        <div className="upload-icon-container">
          <UploadIcon />
        </div>
        <p className="upload-text">Upload Supporting Images / Photos</p>
        <p className="upload-subtext">Drag and drop images here, or click to browse files</p>
        <p className="upload-subtext" style={{ fontSize: 11, marginTop: 6, color: '#94a3b8' }}>
          Supported formats: PNG, JPG, WEBP • Max 5MB per file (Up to 3 images)
        </p>
      </div>

      {/* Anonymous Report Toggle */}
      <div className="anonymous-toggle-wrapper">
        <div className="toggle-left">
          <ShieldIcon className="toggle-icon" />
          <div className="toggle-info">
            <h4>Report Anonymously</h4>
            <p>
              Your personal identity will not be shared with any resolving authority. Only the issue details and location will be visible.
            </p>
          </div>
        </div>
        <label className="switch-control">
          <input
            type="checkbox"
            checked={reportData.anonymous}
            onChange={handleToggleAnonymous}
          />
          <span className="switch-slider"></span>
        </label>
      </div>

      {/* Contact Details (rendered only if NOT anonymous) */}
      {!reportData.anonymous ? (
        <div className="contact-details-container animate-fade-in">
          <h3 className="priority-label" style={{ fontSize: 15, marginBottom: 16 }}>
            Identity & Contact Information
          </h3>

          {/* Phone Number Input with +91 Country Code selector */}
          <div className="phone-input-row">
            {/* Country Code Selector */}
            <div className="input-group phone-code-select-group">
              <span className="input-icon">
                <GlobeIcon />
              </span>
              <select className="input-field select-field" defaultValue="+91" disabled>
                <option value="+91">+91</option>
              </select>
              <label className="input-label">Code</label>
            </div>

            {/* Main Phone Number */}
            <div className="input-group phone-number-field-group">
              <span className="input-icon">
                <PhoneIcon />
              </span>
              <input
                type="text"
                name="phone"
                placeholder=" "
                maxLength="10"
                value={reportData.phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '');
                  handleChange({ target: { name: 'phone', value: val } });
                }}
                className={`input-field ${errors.phone ? 'input-error' : ''}`}
                required
              />
              <label className="input-label">Phone Number</label>
            </div>
          </div>
          {errors.phone && (
            <span className="validation-error" style={{ marginTop: '-14px', marginBottom: '18px' }}>
              <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
              {errors.phone}
            </span>
          )}

          {/* Email Address Input */}
          <div className="input-group">
            <span className="input-icon">
              <MailIcon />
            </span>
            <input
              type="email"
              name="email"
              placeholder=" "
              value={reportData.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? 'input-error' : ''}`}
              required
            />
            <label className="input-label">Email Address</label>
            {errors.email && (
              <span className="validation-error">
                <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
                {errors.email}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="info-banner" style={{ marginTop: 8 }}>
          <ShieldIcon className="info-banner-icon" />
          <p className="info-banner-text">
            <strong>Anonymous Mode Active:</strong> You do not need to fill in your contact information. The system will mask your username and credentials.
          </p>
        </div>
      )}
    </div>
  );
};

export default EvidenceSection;
