import React from 'react';
import LocationIcon from '@mui/icons-material/LocationOn';
import LandmarkIcon from '@mui/icons-material/Domain';
import CityIcon from '@mui/icons-material/LocationCity';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MapIcon from '@mui/icons-material/Map';
import PinIcon from '@mui/icons-material/PinDrop';
import ErrorIcon from '@mui/icons-material/Error';

const LocationDetails = ({ reportData, setReportData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 
    'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 
    'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 
    'Lakshadweep', 'Puducherry'
  ];

  return (
    <div>
      <h2 className="section-title">Location Details</h2>
      <p className="section-subtitle">
        Pinpoint the exact location of the issue to help local authorities resolve it faster.
      </p>

      {/* Street Address / Location */}
      <div className="input-group">
        <span className="input-icon">
          <LocationIcon />
        </span>
        <input
          type="text"
          name="location"
          placeholder=" "
          value={reportData.location}
          onChange={handleChange}
          className={`input-field ${errors.location ? 'input-error' : ''}`}
          required
        />
        <label className="input-label">Street Address / Location</label>
        {errors.location && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.location}
          </span>
        )}
      </div>

      {/* Landmark */}
      <div className="input-group">
        <span className="input-icon">
          <LandmarkIcon />
        </span>
        <input
          type="text"
          name="landmark"
          placeholder=" "
          value={reportData.landmark}
          onChange={handleChange}
          className="input-field"
        />
        <label className="input-label">Landmark (Optional)</label>
      </div>

      {/* District */}
      <div className="input-group">
        <span className="input-icon">
          <CityIcon />
        </span>
        <input
          type="text"
          name="district"
          placeholder=" "
          value={reportData.district}
          onChange={handleChange}
          className={`input-field ${errors.district ? 'input-error' : ''}`}
          required
        />
        <label className="input-label">District</label>
        {errors.district && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.district}
          </span>
        )}
      </div>

      {/* Mandal */}
      <div className="input-group">
        <span className="input-icon">
          <AccountBalanceIcon />
        </span>
        <input
          type="text"
          name="mandal"
          placeholder=" "
          value={reportData.mandal}
          onChange={handleChange}
          className={`input-field ${errors.mandal ? 'input-error' : ''}`}
          required
        />
        <label className="input-label">Mandal</label>
        {errors.mandal && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.mandal}
          </span>
        )}
      </div>

      {/* State Select */}
      <div className="input-group">
        <span className="input-icon">
          <MapIcon />
        </span>
        <select
          name="state"
          value={reportData.state}
          onChange={handleChange}
          className={`input-field select-field ${errors.state ? 'input-error' : ''}`}
          required
        >
          <option value="" disabled hidden></option>
          {indianStates.map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>
        <label className="input-label">State / UT</label>
        {errors.state && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.state}
          </span>
        )}
      </div>

      {/* Pincode */}
      <div className="input-group">
        <span className="input-icon">
          <PinIcon />
        </span>
        <input
          type="text"
          name="pincode"
          placeholder=" "
          maxLength="6"
          value={reportData.pincode}
          onChange={(e) => {
            // Only allow numbers, up to 6 digits
            const val = e.target.value.replace(/\D/g, '');
            handleChange({ target: { name: 'pincode', value: val } });
          }}
          className={`input-field ${errors.pincode ? 'input-error' : ''}`}
          required
        />
        <label className="input-label">Pincode</label>
        {errors.pincode && (
          <span className="validation-error">
            <ErrorIcon style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }} />
            {errors.pincode}
          </span>
        )}
      </div>
    </div>
  );
};

export default LocationDetails;
