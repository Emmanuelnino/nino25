import React from 'react';

const GetStartedPage = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex justify-center items-center'>
      <div className='max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Get Started</h2>
        <p className='text-gray-600 mb-6'>
          Choose a platform to get started with.
        </p>
        <div className='flex flex-col gap-4'>
          <a
            href='https://github.com/your-username'
            className='py-2 px-4 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition duration-300'
          >
            GitHub
          </a>
          {/* Add more links/buttons as needed */}
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
