import React from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import ErrorIcon from '@mui/icons-material/Error';

const IssueDetails = ({ reportData, setReportData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrioritySelect = (priorityVal) => {
    setReportData((prev) => ({
      ...prev,
      priority: priorityVal,
    }));
  };

  const categories = [
    { value: 'Civic & Infrastructure', label: 'Civic & Infrastructure' },
    { value: 'Waste Management & Garbage', label: 'Waste & Garbage Management' },
    { value: 'Roads, Potholes & Traffic', label: 'Roads, Potholes & Traffic' },
    { value: 'Water Supply & Sewage', label: 'Water Supply & Sewage' },
    { value: 'Electricity & Streetlights', label: 'Electricity & Streetlights' },
    { value: 'Public Safety & Nuisance', label: 'Public Safety & Nuisance' },
    { value: 'Health & Sanitation', label: 'Health & Sanitation' },
    { value: 'Others', label: 'Others' },
  ];

  return (
    <div>
      <h2 className="section-title">Issue Details</h2>
      <p className="section-subtitle">
        Provide accurate category and details of the civic or public issue you are reporting.
      </p>

      {/* Issue Category Select */}
      <div className="input-group">
        <span className="input-icon">
          <CategoryIcon />
        </span>
        <select
          name="issueCategory"
          value={reportData.issueCategory}
          onChange={handleChange}
          className={`input-field select-field ${errors.issueCategory ? 'input-error' : ''}`}
          required
        >
          <option value="" disabled hidden></option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
        <label className="input-label">Issue Category</label>
        {errors.issueCategory && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.issueCategory}
          </span>
        )}
      </div>

      {/* Issue Title Input */}
      <div className="input-group">
        <span className="input-icon">
          <TitleIcon />
        </span>
        <input
          type="text"
          name="issueTitle"
          placeholder=" "
          value={reportData.issueTitle}
          onChange={handleChange}
          className={`input-field ${errors.issueTitle ? 'input-error' : ''}`}
          required
        />
        <label className="input-label">Issue Title</label>
        {errors.issueTitle && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.issueTitle}
          </span>
        )}
      </div>

      {/* Issue Description Textarea */}
      <div className="input-group input-group-textarea">
        <span className="input-icon">
          <DescriptionIcon />
        </span>
        <textarea
          name="description"
          placeholder=" "
          value={reportData.description}
          onChange={handleChange}
          className={`input-field input-field-textarea ${errors.description ? 'input-error' : ''}`}
          required
        ></textarea>
        <label className="input-label">Detailed Description</label>
        {errors.description && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.description}
          </span>
        )}
      </div>

      {/* Issue Priority Pills */}
      <div>
        <label className="priority-label">Select Urgency / Priority Level</label>
        <div className="priority-pills">
          <button
            type="button"
            className={`priority-pill priority-pill-low ${reportData.priority === 'Low' ? 'active' : ''}`}
            onClick={() => handlePrioritySelect('Low')}
          >
            <span className="green-dot" /> Low
          </button>
          <button
            type="button"
            className={`priority-pill priority-pill-medium ${reportData.priority === 'Medium' ? 'active' : ''}`}
            onClick={() => handlePrioritySelect('Medium')}
          >
            <span className="green-dot" style={{ backgroundColor: '#f97316' }} /> Medium
          </button>
          <button
            type="button"
            className={`priority-pill priority-pill-high ${reportData.priority === 'High' ? 'active' : ''}`}
            onClick={() => handlePrioritySelect('High')}
          >
            <span className="green-dot" style={{ backgroundColor: '#ef4444' }} /> High
          </button>
        </div>
        {errors.priority && (
          <span className="validation-error" style={{ display: 'block', marginTop: '-12px', marginBottom: '20px' }}>
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.priority}
          </span>
        )}
      </div>
    </div>
  );
};

export default IssueDetails;
