import React from 'react';

const ProgressSection = ({ currentStep, totalSteps, title, percentage }) => {
  return (
    <div className="step-progress-wrapper">
      <div className="step-progress-header">
        <div className="step-indicator-left">
          <span className="step-number-circle">{currentStep}</span>
          <span className="step-title-text" style={{ fontFamily: '"Inter", sans-serif', letterSpacing: '0.2px' }}>
            {title}
          </span>
        </div>
        <div className="step-progress-right" style={{ fontFamily: '"Courier New", Courier, monospace', letterSpacing: '-0.3px' }}>
          Step {currentStep} of {totalSteps} • {percentage}%
        </div>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressSection;
