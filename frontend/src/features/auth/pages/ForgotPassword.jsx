import React, { useState, useRef, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import authService from '../services/authService'

const ForgotPassword = () => {
  const [errormsg, setErrormsg] = useState('')
  const [successmsg, setSuccessmsg] = useState('')
  const [currentStep, setCurrentStep] = useState(1)
  const emailref = useRef(null)
  const navigate = useNavigate()

  const formdata = {
    email: '',
    otp: '',
    newPassword: ''
  }
  const [data, setData] = useState(formdata)
 
  const handleChange=(e)=>{
    setErrormsg('')
    setSuccessmsg('')
      setData({
        ...data,
        [e.target.name]:e.target.value
      });

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrormsg('')

    try {
      if (!data.email) {
        setErrormsg('Please fill all the fields')
        return
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(data.email)) {
        setErrormsg('Enter valid email')
        return
      }

      const res = await authService.sendOTP({ email: data.email })
      console.log(res)
      setSuccessmsg('OTP sent to your email. Please check your inbox.')
      setCurrentStep(2)
      setData({
        ...data,
        otp: '',
        password: ''
      })
    } catch (error) {
      console.error(error)
      setErrormsg(error.message)
    }
  }

  const handleVerifyOTP = async (e) => {
    e.preventDefault()
    try {
      if (!data.otp) {
        setErrormsg('Please fill all the fields')
        return
      }

      const res = await authService.verifyOtp({
        email: data.email,
        otp: data.otp
      })
      console.log(res)
      setSuccessmsg('OTP verified successfully.')
      setCurrentStep(3)
    } catch (error) {
      setErrormsg(error.message)
    }
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    try {
      if (!data.newPassword) {
        setErrormsg('Please fill all the fields')
        return
      }
     const res = await authService.updatePassword({
        email: data.email,
        newPassword: data.newPassword
      })

       setSuccessmsg('Password reset successfully.redirecting to login...')
      setTimeout(() => {

        
        navigate('/auth/signin')
      },2000);
    } catch (error) {
      setErrormsg(error.message)
    }
  }

  useEffect(()=>{
    emailref.current.focus();
  },[]);

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 space-y-6">

        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-gray-800">Forgot Password</h1>
          <p className="text-sm text-gray-500">Enter your email to reset your password</p>
        </div>
        {
          errormsg &&
        <p className="text-center text-sm text-red-700">{errormsg}</p>
        }
                <p className="text-center text-lg text-green-600">{successmsg}</p>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={data.email}
              required
              ref={emailref}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {currentStep >= 2 && (
            <div className="space-y-1">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                placeholder="Enter your OTP"
                onChange={handleChange}
                value={data.otp}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-1">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter your new password"
                onChange={handleChange}
                value={data.newPassword}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer"
            onClick={currentStep === 1 ? handleSubmit : currentStep === 2 ? handleVerifyOTP : handleResetPassword}
          >
            {currentStep === 1 ? 'Send OTP' : currentStep === 2 ? 'Verify OTP' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword