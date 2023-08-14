import React from 'react';

const GetStartedPage = () => {
    return (
        <div className='bg-gray-100 min-h-screen flex justify-center items-center'>
            <div className='max-w-md mx-auto p-8 bg-white shadow-xl rounded-xl'>
                <h2 className='text-2xl font-semibold mb-4'>Resources</h2>
                <p className='text-gray-600 mb-6'>
                    Choose a platform to get started with.
                </p>
                <div className='flex flex-col gap-4'>
                    <a
                        href='https://github.com/Emmanuelnino'
                        className='py-2 px-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition duration-300'
                    >
                        GitHub
                    </a>
                    <div className=' flex flex-col gap-4'>
                        <a href=""className='py-2 px-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition duration-300'>Youtube</a>
                        <a href=""className='py-2 px-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition duration-300'>Gmail</a>
                    </div>
                    {/* Add more links/buttons as needed */}
                </div>
            </div>
        </div>
    );
};

export default GetStartedPage;
