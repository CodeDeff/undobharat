import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dqz2hem3m/image/upload/v1750665330/logo_ep4az4.png"
                alt="logo"
              />
            </div>
            <Link to="/" className="text-xl font-bold text-gray-800">
              UndoBharat
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link text-gray-700 hover:text-blue-500 font-medium">
              Home
            </Link>
            <Link to="/about" className="nav-link text-gray-700 hover:text-blue-500 font-medium">
              About
            </Link>

            <Link to="/report-an-issue-now" className="nav-link text-gray-700 hover:text-blue-500 font-medium">
              Report Issue
            </Link>
            
            <a href="#conc" className="nav-link text-gray-700 hover:text-blue-500 font-medium">
              Contact
            </a>
            <Link to="/auth/signin" className="nav-link text-gray-700 hover:text-blue-500 font-medium">
              Login
            </Link>
            <Link to="/admin" className="nav-link text-gray-700 hover:text-blue-500 font-medium">
              Admin
            </Link>
          </div>

          <Link
            to="/report-an-issue-now"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition duration-300"
          >
            Report Now
          </Link>

          <button id="mobile-menu-button" className="md:hidden text-gray-700 focus:outline-none">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden bg-white py-2 px-4 shadow-lg">
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-500">
            About
          </Link>
          <a href="#report" className="block py-2 text-gray-700 hover:text-blue-500">
            Report Issue
          </a>
          <a href="#conc" className="block py-2 text-gray-700 hover:text-blue-500">
            Contact
          </a>
          <Link to="/login" className="block py-2 text-gray-700 hover:text-blue-500">
            Login
          </Link>
          <Link to="/admin" className="block py-2 text-gray-700 hover:text-blue-500">
            Admin
          </Link>
          <a
            href="#report"
            className="block my-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium text-center transition duration-300"
          >
            Report Now
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
