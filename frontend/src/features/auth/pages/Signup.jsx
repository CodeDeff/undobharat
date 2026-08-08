import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import authService from '../services/authService'

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    role: '',
    secretCode: ''
  });
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)

  const nameRef = useRef(null);

  const handleChange = (e) => {
    setError('')
     setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    try{
    setError('')
    if(!formData.email || !formData.password || !formData.role || !formData.fullname) return setError("Enter All Fields")
    await authService.sendOTP({email: formData.email})
   navigate("/auth/verify-otp", {
      state: {
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      }
    });
    }catch(error){
      setError(error.response?.data?.message || "Signup failed. Please try again.");
     }
 finally{
  setLoading(false);
 }
 
  }


    useEffect(()=>{
        nameRef.current.focus();
    },[])



  return (
       <div className="signup flex flex-col items-center justify-center p-4"  >
    <div className="form-container w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 p-6 text-center">
            <h1 className="text-2xl font-bold text-white">Create Your Account</h1>
            <p className="text-indigo-100 mt-1">Join our community today</p>
        </div>
       

         {error && (
            <div className="bg-red-50 text-red-700 text-sm p-3 m-4 rounded-lg border border-red-200 text-center font-medium transition-all">
              {error}
            </div>
          )}
        
        <form   className="p-6 space-y-6" >
            <div className="space-y-4">
                {/* <!-- Full Name --> */}
                <div>
                    <label htmlFor='fullname' className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input 
                        type="text" 
                        id="fullname" 
                        required 
                        name="fullname"
                        value={formData.fullname}
                        placeholder="John Doe"
                        onChange={handleChange}
                        ref={nameRef}
                        className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        />
                </div>
                {/* <!-- Email  */}
                <div>
                    <label htmlFor='email' className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                    <div className="flex space-x-2">
                        <input 
                            type="email" 
                            name="email"
                             id="email" 
                             value={formData.email}
                             onChange={handleChange}
                            required 
                            className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                            placeholder="your@email.com"/>
                        {/* <button type="button" id="sendOtpBtn" className="px-3 py-2 bg-indigo-600 text-white rounded">Send OTP</button> */}
                        
                    </div>
                    {/* <p className="fs-0.5">The entered email must exist. You will receive an OTP.</p> */}
                </div>

                   <div>
                    <label htmlFor='password' className="block text-sm font-medium text-gray-700 mb-1">Create Password*</label>
                    <div className="flex space-x-2">
                        <input 
                            type="password" 
                            name="password"
                             id="password" 
                             value={formData.password}
                             onChange={handleChange}
                            required 
                            className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                            placeholder="*********"/>
                         
                    </div>
                 </div>
               
                {/* User Type Select */}
            <div>
                <label htmlFor='role' className="block text-sm font-medium text-gray-700 mb-1">Register As*</label>
               
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  type="text"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 hover:cursor-pointer"
                >
                  <option value="" disabled className="bg-slate-900 text-slate-400">
                    Select User Type
                  </option>
                  <option value="User" className="bg-slate-900 text-white">
                    User
                  </option>
                  <option value="Admin" className="bg-slate-900 text-white">
                    Admin
                  </option>
                  
                </select>
               
              </div>
            </div>


            {/* Admin Secret Code */}
            {formData.role === "Admin" && (
              <div>
                <label htmlFor='secretCode' className="block text-sm font-medium text-gray-700 mb-1">Secret Code*</label>
                <input
                  type="password"
                  name="secretCode"
                  id="secretCode"
                  value={formData.secretCode}
                  onChange={handleChange}
                  required
                  className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Enter Secret Code"
                />
              </div>
            )}

                    {/* registerButton */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer"
            onClick={handleSubmit}
          >
            {loading ? 'Sending Otp..' :'Send Otp' }
          </button>           
            </div>
            <div className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/auth/signin" className="link-signin text-indigo-600 hover:text-indigo-500 font-medium">
                    Login
                </Link>
            </div>
            

                
        </form>    
    </div>

       </div>
  )
}


export default Signup;