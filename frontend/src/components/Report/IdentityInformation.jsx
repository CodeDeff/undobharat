import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import GlobeIcon from '@mui/icons-material/Public';
import PhoneIcon from '@mui/icons-material/Smartphone';
import MailIcon from '@mui/icons-material/Mail';
import TranslateIcon from '@mui/icons-material/Translate';
import ErrorIcon from '@mui/icons-material/Error';

const IdentityInformation = ({ reportData, setReportData, errors, onFieldBlur, onFieldChange }) => {
  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setReportData((prev) => ({
      ...prev,
      [name]: value,
    }));
    onFieldChange(name, value);
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    // Allow only alphabets and spaces during input to prevent typos
    const cleanValue = value.replace(/[^A-Za-z\s]/g, '');
    setReportData((prev) => ({
      ...prev,
      [name]: cleanValue,
    }));
    onFieldChange(name, cleanValue);
  };

  const handlePhoneChange = (e) => {
    // Keep only digits and limit to 10 digits
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setReportData((prev) => ({
      ...prev,
      [e.target.name]: digits,
    }));
    onFieldChange(e.target.name, digits);
  };

  const languages = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi / हिन्दी' },
    { value: 'Telugu', label: 'Telugu / తెలుగు' },
    { value: 'Tamil', label: 'Tamil / தமிழ்' },
    { value: 'Kannada', label: 'Kannada / కన్నడ' },
    { value: 'Bengali', label: 'Bengali / বাংলা' },
    { value: 'Marathi', label: 'Marathi / मराठी' },
    { value: 'Gujarati', label: 'Gujarati / ગુજરાતી' },
  ];

  return (
    <div>
      <h3 className="section-title" style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px', color: '#1f2937' }}>
        Identity Information
      </h3>
      <p className="section-subtitle" style={{ fontSize: '14px', color: '#6b7280', marginBottom: '28px', lineHeight: '1.5' }}>
        Complete your profile to ensure seamless communication with authorities.
      </p>

      {/* Full Name Input */}
      <div className="input-group">
        <span className="input-icon">
          <PersonIcon />
        </span>
        <input
          type="text"
          name="fullName"
          placeholder=" "
          value={reportData.fullName}
          onChange={handleNameChange}
          onBlur={(e) => onFieldBlur(e.target.name, e.target.value)}
          className={`input-field ${errors.fullName ? 'input-error' : ''}`}
          required
        />
        <label className="input-label">Full Name</label>
        {errors.fullName && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.fullName}
          </span>
        )}
      </div>

      {/* Phone Number Input Row */}
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
            value={reportData.phone}
            onChange={handlePhoneChange}
            onBlur={(e) => onFieldBlur(e.target.name, e.target.value)}
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

      {/* Alternate Phone Number Input */}
      <div className="input-group">
        <span className="input-icon">
          <PhoneIcon />
        </span>
        <input
          type="text"
          name="alternatePhone"
          placeholder=" "
          value={reportData.alternatePhone}
          onChange={handlePhoneChange}
          onBlur={(e) => onFieldBlur(e.target.name, e.target.value)}
          className={`input-field ${errors.alternatePhone ? 'input-error' : ''}`}
        />
        <label className="input-label">Alternate Phone Number (Optional)</label>
        {errors.alternatePhone && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.alternatePhone}
          </span>
        )}
      </div>

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
          onChange={handleTextChange}
          onBlur={(e) => onFieldBlur(e.target.name, e.target.value)}
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

      {/* Preferred Communication Language Select */}
      <div className="input-group">
        <span className="input-icon">
          <TranslateIcon />
        </span>
        <select
          name="language"
          value={reportData.language}
          onChange={(e) => {
            setReportData((prev) => ({ ...prev, language: e.target.value }));
            onFieldChange('language', e.target.value);
          }}
          onBlur={(e) => onFieldBlur('language', e.target.value)}
          className={`input-field select-field ${errors.language ? 'input-error' : ''}`}
          required
        >
          <option value="" disabled hidden>Select language</option>
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
        <label className="input-label">Preferred Communication Language</label>
        {errors.language && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.language}
          </span>
        )}
      </div>
    </div>
  );
};

export default IdentityInformation;
