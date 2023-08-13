import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='shadow-xl py-3 bg-gray-100 px-4 md:px-10'>
      <div className='flex items-center justify-between max-w-7x1 mx-auto px-4'>

        <div className=' font-medium hidden md:flex items-center space-x-1'>
          <a href="" className='py-5 px-3 text-gray-700'>Pluggins</a>
          <a href="" className='py-5 px-3 text-gray-700'>My Projects</a>
        </div>

        <div className='flex gap-2'>
          <div className='mr-4'>
            <a href="" className='flex items-center gap-1 py-5 px-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400">
                {/* ... SVG path */}
              </svg>

              <span className='font-bold'>Nino Dev</span>
            </a>
          </div>

          {/* Add a button to toggle the menu */}
          <button onClick={toggleMenu} className='md:hidden'>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15h2zm-7 3v2H3v-2h8zm10-7v2H3v-2h18zm0-7v2H3V4h18z" />
            </svg>
          </button>
        </div>

        {/* Render the menu if it's open */}
        {isMenuOpen && (
          <div className='md:hidden flex items-center gap-3'>
            <a href="">Login</a>
            <a href="" className='py-1 px-3 bg-blue-300 text-white hover:bg-blue-600 rounded transition duration-300'>Sign up</a>
          </div>
        )}
      </div>

      <div className='hidden md:flex-row flex-col items-center gap-'>
        <a href="" className='block'>Features</a>
        <a href="" className='block'>Pricing</a>
      </div>

    </nav>
  )
}

export default Navbar;
