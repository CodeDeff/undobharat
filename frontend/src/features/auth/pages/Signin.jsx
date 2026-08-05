import React, { useState, useRef, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import authService from '../services/authService'

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errormsg,SetErrormsg]=useState('')
  const emailref= useRef(null);
  const navigate=useNavigate();

  const formdata={
      email:'',
      password:''
    }
    const[data, setData]=useState(formdata)

  const handleChange=(e)=>{
    SetErrormsg('')
      setData({
        ...data,
        [e.target.name]:e.target.value
      });

  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      if(!data.email || !data.password){
        SetErrormsg("Please fill all the fields")
        return;
      }
       await authService.login(data);
  
     navigate('/')
    } catch (error) {
      SetErrormsg("Invalid email or password")
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
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500">Login to continue to your account</p>
        </div>
        {
          errormsg &&
        <p className="text-center text-sm text-red-700">{errormsg}</p>
        }
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

          {/* Password */}
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={data.password}
                required
                className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  /* Eye-off icon */
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  /* Eye icon */
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer"
            onClick={handleSubmit}
          >
            Log In
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/auth/signup" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Signin