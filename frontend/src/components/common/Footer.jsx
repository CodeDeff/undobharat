import React from 'react'

const Footer = () => {
  return (
    <div>

        
     {/* <!-- Footer --> */}
    <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <img src="https://res.cloudinary.com/dqz2hem3m/image/upload/v1750665330/logo_ep4az4.png" alt="logo"/>
                        </div>
                        <span className="text-xl font-bold">UndoBharat</span>
                    </div>
                    <p className="text-gray-300">Empowering citizens to build a better India by solving local problems together.</p>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="text-gray-300 hover:text-white transition duration-300">home</a></li>
                        <li><a href="/about" className="text-gray-300 hover:text-white transition duration-300">About</a></li>
                        <li><a href="#report" className="text-gray-300 hover:text-white transition duration-300">Report Issue</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Success Stories</a></li>
                    </ul>
                </div>
                
                <div id="conc">
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <i className="fas fa-envelope text-gray-300"></i>
                            <span className="text-gray-300">undobharat@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <i className="fas fa-phone text-gray-300"></i>
                            <span className="text-gray-300">+91 93XXXXXX32 </span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <i className="fas fa-map-marker-alt text-gray-300"></i>
                            <span className="text-gray-300">Anjanapally, Telangana</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                       
                        
                        <a href="https://www.instagram.com/undobharatofficial/" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition duration-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
            
     
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0 md:space-x-0 mt-12 ml-0 md:ml-5">
                    {/* <p className="mb-0 fs-7 text-center md:text-left">Visitor Count: <%= typeof visitorCount !== 'undefined' ? visitorCount-1 : 'N/A' %></p> */}
                    <p className="mb-0 fs-7 text-center md:text-left">Designed & Developed By Yuvaraj Kurri</p>
                    <p className="mb-0 fs-1 text-center md:text-left">&copy; 2025 UndoBharat. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer