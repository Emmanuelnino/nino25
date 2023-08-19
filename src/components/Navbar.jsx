import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className='fixed top-0 shadow-xl w-full py-3 bg-gray-100 px-4 z-50 md:px-8'>
            <div className='flex items-center justify-between max-w-7x1 mx-auto'>

                <div className='font-medium hidden md:flex items-center space-x-1'>
                    <a
                        href=''
                        className='font-bold py-5 px-3 text-gray-700 transition duration-300 transform hover:-translate-y-1'
                    >
                        Plugins
                    </a>
                    <a
                        href=''
                        className='font-bold py-5 px-3 text-gray-700 transition duration-300 transform hover:-translate-y-1'
                    >
                        My Projects
                    </a>
                </div>


                <div className='transition duration-300 transform hover:-translate-y-1 flex gap-2'>
                    <div className='mr-4'>
                        <a href="" className='flex items-center gap-1 py-5 px-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#fcaa4e]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                            </svg>

                            <span className='font-bold te text-gray-700'>Nino Dev</span>
                        </a>
                    </div>

                </div>
                <div>
                    <div className='md:flex hidden items-center gap-3'>
                        <a href="http://127.0.0.1:5175/" className='transition duration-300 transform hover:-translate-y-1 bg-yellow-gold-500 text-gray-600 font-bold'>Login</a>
                        <a href="" className='py-1 px-3 bg-[#fcaa4e] text-white hover:bg-opacity-80 rounded transition duration-300 transform hover:translate-y-1 font-bold'>Sign up</a>
                    </div>
                    <div className='stroke="currentColor" className="w-6 h-6 text-bg-[#fcaa4e] right-0 top-0 md:hidden '>
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
                    {isMenuOpen && (
                        <div className='md:hidden absolute bg-white top-[100%] h-screen shadow-xl right-0 w-2/3'>
                            <div className='flex flex-col  p-2 gap-3 w-full'>
                                <a href="http://127.0.0.1:5175/" className='py-1 px-3 font-semibold border-opacity-50 text-gray-600 border-b-[#fcaa4e] border-b'>Login</a>
                                <a href="" className='py-1 px-3 border-b-[#fcaa4e] border-opacity-50 border-b text-gray-600 font-semibold'>Sign up</a>
                            </div>
                            <div className='transition duration-300 flex flex-col bg-white p-2 gap-2 w-full'>
                                <a href="" className='py-1 px-3 border-b-[#fcaa4e] border-b border-opacity-50 text-gray-600 font-semibold'>Features</a>
                                <a href="" className='py-1 px-3 border-b-[#fcaa4e] border-b border-opacity-50 text-gray-600 font-semibold'>Pricing</a>
                                <a href="" className='py-1 px-3 border-b-[#fcaa4e] border-b border-opacity-50 text-gray-600 font-semibold'>Plugins</a>
                                <a href="" className='py-1 px-3 border-b-[#fcaa4e] border-b border-opacity-50 text-gray-600 font-semibold'>My Projects</a>
                            </div>
                        </div>
                    )}
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