import React from 'react';
import ShieldIcon from '@mui/icons-material/ShieldOutlined';

const SecurityNotice = () => {
  return (
    <div className="info-banner" style={{ margin: '24px 0', backgroundColor: '#f0f7ff', border: '1px solid #d0e7ff', borderRadius: '12px' }}>
      <ShieldIcon className="info-banner-icon" style={{ color: '#0b5ed7', fontSize: '20px' }} />
      <p className="info-banner-text" style={{ fontSize: '13px', color: '#1e3a8a', lineHeight: '1.45', fontWeight: '500' }}>
        Your data is protected under the Digital Personal Data Protection Act. We use 256-bit encryption to secure your details.
      </p>
    </div>
  );
};

export default SecurityNotice;
