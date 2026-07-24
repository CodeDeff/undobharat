import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VerifiedIdentityCard = ({ onIdentityChange }) => {
  return (
    <div className="verified-identity-card">
      <div className="identity-left">
        <div className="identity-avatar-placeholder" style={{ backgroundColor: '#e6f0fa', borderRadius: '12px' }}>
          <CheckCircleIcon style={{ color: '#0b5ed7', fontSize: 24 }} />
        </div>
        <div className="identity-details">
          <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '15px', fontWeight: '600' }}>
            Verified Identity
            <span className="green-dot" style={{ backgroundColor: '#22c55e' }} />
          </h4>
          <p style={{ color: '#6b7280', fontSize: '12px', marginTop: '4px' }}>
            Secured via DigiLocker e-KYC
          </p>
        </div>
      </div>
      <button
        type="button"
        className="identity-change-btn"
        onClick={onIdentityChange}
        style={{ color: '#0b5ed7', fontWeight: '600', fontSize: '14px' }}
      >
        Change
      </button>
    </div>
  );
};

export default VerifiedIdentityCard;
