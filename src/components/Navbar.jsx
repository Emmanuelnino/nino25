import React from 'react'

const Navbar = () => {
    return (
        <nav className='py-3 bg-gray-100'>
            <div className='flex items-center justify-between max-w-7x1 mx-auto '>

<div className='flex gap-2'>
                <div className='mr-4'>
                    <a href="" className='flex items-center py-4 px-2 text-gray-700'>
                    <svg className='h-6 w-6 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
</svg>
<span>Better Dev</span>
                    </a>
                </div>



                <div className='flex items-center space-x-1'>
                    <a href=""className='py-4 px-3 text-gray-700'>Features</a>
                    <a href=""className='py-4 px-3 text-gray-700'>Pricing</a>
                </div>
                </div>

                <div>secondary nav</div>  


            </div>
        </nav>
    )
}

export default Navbar;