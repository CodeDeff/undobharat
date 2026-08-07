import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import OTPInput from '../components/OTPInput';
import authServices from '../services/authService';



const VerifyOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve email passed via React Router navigation state
  const email = location.state?.email || 'your email';
  const fullname = location.state?.fullname || 'your name';
  const password = location.state?.password || 'your password';
  const role = location.state?.role || 'your role';

  const formdata = { fullname, email, password, role };

  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [countdown, setCountdown] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(true);


 
  // Timer effect for Resend OTP countdown
  useEffect(() => {
    let timer = null;
    if (isTimerActive && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsTimerActive(false);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isTimerActive, countdown]);

  const handleOtpChange = (newOtp) => {
    setOtp(newOtp);
    // Clear error message when user starts typing
    if (error) setError('');
  };

  const handleVerify =async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
try {
  
    const fullOtp = otp.join('');

    if (!fullOtp) {
      setError('OTP is required.');
      return;
    }

    if (fullOtp.length < 4 || !/^\d{4}$/.test(fullOtp)) {
      setError('Please enter a valid 4-digit OTP.');
      return;
    }

    const res=await authServices.verifyOtp({email, otp: fullOtp});
    console.log(res.data);
  
    if(res.data.success){
      await authServices.signup(formdata);
      setSuccessMessage('OTP verified successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/auth/signin');
      }, 2000);
    }else{
      setError('Incorrect OTP. Please try again.');
    }
} catch (error) {
  console.error(error);
  setSuccessMessage('');
  setError(error.message.includes("400")?"Incorrect OTP. Please try again.":"Failed to verify OTP. Please try again.");
}

  
  };

  const handleResend = async() => {
    if (isTimerActive) return;

    try{
      await authServices.sendOTP({email});
      setOtp(['', '', '', '']);
      setError('');
      setSuccessMessage('OTP resent successfully.');
      setCountdown(30);
      setIsTimerActive(true);
      // Reset OTP input, trigger success toast/message, and restart 30s countdown
      // Auto dismiss success message after 4 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 4000);
    }
    catch(error){
      setError('Failed to resend OTP. Please try again later.');
      console.error('Resend OTP error:', error);
    }

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 text-center text-white">
          <h1 className="text-2xl font-bold">Verify OTP</h1>
          <p className="text-indigo-100 text-sm mt-1">
            Please enter the 4-digit code sent to your email
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Target Email Display */}
          <div className="text-center bg-indigo-50/60 rounded-xl p-4 border border-indigo-100/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-1">
              Verification Code Sent
            </p>
            <p className="text-sm text-gray-600">
              OTP has been sent to{''}
              <span className="font-semibold text-gray-800 break-all">{email.split('@')[0]}@{email.split('@')[1]}</span> <br/>
              <span className="font-semibold text-gray-800 break-all">Valid for 3 Minutes</span>
            </p>
          </div>

          {/* Success Banner */}
          {successMessage && (
            <div className="bg-emerald-50 text-emerald-700 text-sm p-3 rounded-lg border border-emerald-200 text-center font-medium transition-all">
              {successMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label className="block text-center text-sm font-medium text-gray-700 mb-2">
                Enter 4-Digit Code
              </label>

              {/* Modular OTP Input */}
              <OTPInput
                length={4}
                otp={otp}
                setOtp={handleOtpChange}
                hasError={Boolean(error)}
              />

              {/* Inline Validation Error Message */}
              {error && (
                <p className="text-center text-sm font-medium text-red-500 mt-2 animate-shake">
                  {error}
                </p>
              )}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl shadow-md hover:shadow-indigo-200 transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Verify OTP
            </button>
          </form>

          {/* Resend Section */}
          <div className="text-center pt-2 border-t border-gray-100">
            <p className="text-sm text-gray-600 mb-2">
              Didn't receive the code?
            </p>
            {isTimerActive ? (
              <span className="text-sm text-gray-400 font-medium">
                Resend OTP in <span className="font-semibold text-indigo-600">{countdown}</span> seconds
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:underline transition cursor-pointer"
              >
                Resend OTP
              </button>
            )}
          </div>

          {/* Navigation link to go back */}
          <div className="text-center">
            <Link
              to="/auth/signup"
              className="text-xs text-gray-500 hover:text-gray-700 font-medium transition hover:underline"
            >
              ← Back to Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
