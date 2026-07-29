import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

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

            <Link to="/user/reportnow" className="nav-link text-gray-700 hover:text-blue-500 font-medium">
              Report Issue
            </Link>

            <a href="#conc" className="nav-link text-gray-700 hover:text-blue-500 font-medium">
              Contact
            </a>
            <Link to="/auth/signin" className="nav-link text-gray-700 hover:text-blue-500 font-medium">
              Login
            </Link>
          </div>

          <Link
            to="/user/reportnow"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition duration-300"
          >
            Report Now
          </Link>

          <button
            id="mobile-menu-button"
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white py-2 px-4 shadow-lg`}>
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-500" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-500" onClick={closeMenu}>
            About
          </Link>
          <Link to="/user/reportnow" className="block py-2 text-gray-700 hover:text-blue-500" onClick={closeMenu}>
            Report Issue
          </Link>
          <a href="#conc" className="block py-2 text-gray-700 hover:text-blue-500" onClick={closeMenu}>
            Contact
          </a>
          <Link to="/auth/signin" className="block py-2 text-gray-700 hover:text-blue-500" onClick={closeMenu}>
            Login
          </Link>
          <Link
            to="/user/reportnow"
            className="block my-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium text-center transition duration-300"
            onClick={closeMenu}
          >
            Report Now
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
