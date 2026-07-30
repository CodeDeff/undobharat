import React, { useRef, useEffect } from 'react';

const OTPInput = ({ length = 4, otp = ['', '', '', ''], setOtp, hasError = false, disabled = false }) => {
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus the first input field on component mount
    if (inputRefs.current[0] && !disabled) {
      inputRefs.current[0].focus();
    }
  }, [disabled]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    // Allow only numeric input
    if (value && !/^[0-9]+$/.test(value)) return;

    const newOtp = [...otp];
    // Take the last character entered in case of overwriting
    const singleDigit = value.slice(-1);
    newOtp[index] = singleDigit;
    setOtp(newOtp);

    // Auto-advance cursor to next input box if a digit was entered
    if (singleDigit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        // Clear current index digit
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        // Move to previous index and clear digit
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    const digitsOnly = pastedData.replace(/\D/g, '').slice(0, length);

    if (digitsOnly) {
      const newOtp = [...otp];
      for (let i = 0; i < length; i++) {
        newOtp[i] = digitsOnly[i] || '';
      }
      setOtp(newOtp);

      const nextFocusIndex = Math.min(digitsOnly.length, length - 1);
      inputRefs.current[nextFocusIndex]?.focus();
    }
  };

  return (
    <div className="flex justify-center items-center gap-3 sm:gap-4 my-4" onPaste={handlePaste}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={otp[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          disabled={disabled}
          aria-label={`Digit ${index + 1} of OTP`}
          className={`w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold rounded-xl border transition-all duration-200 focus:outline-none ${
            hasError
              ? 'border-red-500 text-red-600 bg-red-50 focus:ring-2 focus:ring-red-300'
              : 'border-gray-300 text-gray-800 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
          } ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-400' : ''}`}
        />
      ))}
    </div>
  );
};

export default OTPInput;
