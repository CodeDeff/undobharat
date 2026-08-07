import React, { useState, useRef, useEffect } from 'react'
import authSerivce from '../../features/auth/services/authService.js'

const UpdatePassword = ({ onClose }) => {
  const [errormsg, setErrormsg] = useState('')
  const [successmsg, setSuccessmsg] = useState('')

  const passwordref = useRef(null)
 

  const formdata = {
    email:'',
    newPassword: ''
  }
  const [data, setData] = useState(formdata)

  const handleChange = (e) => {
    setErrormsg('')
    setSuccessmsg('')
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrormsg('')

    try {
      if (!data.newPassword) {
        setErrormsg('Please fill all the fields')
        return
      }
      await authSerivce.updatePassword(data)
      setSuccessmsg('Password updated successfully.')
      setData(formdata)
      if (onClose){
        setTimeout(() => {
          onClose()
        }, 1500) // Close the form after 3 seconds
      }
    } catch (error) {
      console.error(error)
      setErrormsg("Failed to update password.")
    }
  }

  useEffect(() => {
    // console.log('Email from state:', email); // Log the email for debugging
    passwordref.current?.focus()
  }, [])

  useEffect(() => {
    const getUserMail= async()=>{
      try{
        const response = await authSerivce.getMail()
        console.log('Response from getMail:', response.data.data.email); // Log the response for debugging
        if(response && response.data && response.data.data.email){
          setData(prevData => ({
            ...prevData,
            email: response.data.data.email
          }));
        }
      }catch(err){
        return;
      }
    }
    getUserMail()
   }, [])

  return (
    <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-8 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">Change Password</h1>
          <p className="text-sm text-gray-500">Enter your new password to update your account.</p>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
            aria-label="Close password form"
          >
            ×
          </button>
        )}
      </div>

      {errormsg && <p className="text-center text-sm text-red-700">{errormsg}</p>}
      {successmsg && <p className="text-center text-sm text-green-700">{successmsg}</p>}

      <form className="space-y-5" onSubmit={handleSubmit}>
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
            ref={passwordref}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

         <button
          type="submit"
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:cursor-pointer"
        >
          Reset Password
        </button>
      </form>
    </div>
  )
}

export default UpdatePassword