import React from 'react'

const Navbar = () => {
    return (
        <nav className='py-3 bg-gray-100 px-4 md:px-10'>
            <div className='flex items-center justify-between max-w-7x1 mx-auto px-4'>

                <div className='hidden md:flex flex items-center space-x-1'>
                    <a href="" className='py-5 px-3 text-gray-700'>Features</a>
                    <a href="" className='py-5 px-3 text-gray-700'>Pricing</a>
                </div>

                <div className='flex gap-2'>
                    <div className='mr-4'>
                        <a href="" className='flex items-center gap-1 py-5 px-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                            </svg>

                            <span className='font-bold'>Nino Dev</span>
                        </a>
                    </div>

                </div>
                <div>
                    <div></div>
                    <div className='md:flex hidden items-center gap-3'>
                        <a href="">Login</a>
                        <a href="" className='py-1 px-3 bg-blue-300 text-white hover:bg-blue-600 rounded transition duration-300'>Sign up</a>
                    </div>
                    <div className='w-5 h-2 right-0  md:hidden '>
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="2.5em"
                            width="2.5em"
                            
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M18 15l-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15h2zm-7 3v2H3v-2h8zm10-7v2H3v-2h18zm0-7v2H3V4h18z" />
                        </svg>
                    </div>
                    <div className='md:hidden flex items-center'>

                    </div>
                </div>
            </div>

            <div className='hidden md:flex-row flex-col items-center gap-'>
                <a href="" className='block'>Features</a>
                <a href="" className='block'>Pricing</a>
            </div>

        </nav >
    )
}

export default Navbar;