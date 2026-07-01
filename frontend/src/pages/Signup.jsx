import React, {useState} from 'react'

const Signup = () => {


      const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });


    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

    });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FormData:", formData);
    }

  return (
       <div className="signup flex flex-col items-center justify-center p-4"  >
    <div className="form-container w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 p-6 text-center">
            <h1 className="text-2xl font-bold text-white">Create Your Account</h1>
            <p className="text-indigo-100 mt-1">Join our community today</p>
        </div>
        
                <form   className="p-6 space-y-6" onSubmit={handleSubmit} >
            <div className="space-y-4">
                {/* <!-- Full Name --> */}
                <div>
                    <label htmlFor='name' className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <input 
                        type="text" 
                        id="name" 
                        required 
                        name="name"
                           value={formData.name}
                        placeholder="John Doe"
                        onChange={handleChange}
                      
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

                    {/* registerButton */}
             <input type="submit"  className=" w-70 ml-13 text-gray-700 hover:text-blue-500 font-medium border-2 border-solid hover:cursor-pointer mt-2 px-3 py-2  rounded"  value={"Register"}/>
           
            </div>
            <div className="text-center text-sm text-gray-600">
                Already have an account? 
                <a href="./login" className="link-signin text-indigo-600 hover:text-indigo-500 font-medium">
                    Login
                </a>
            </div>
            

                
        </form>    
    </div>

       </div>
  )
}


export default Signup;