import React from 'react';

const GetStartedPage = () => {
    return (
        <section style={{backgroundImage:`url(https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=600)`}} className='justify-center items-center h-full w-full bg-cover bg-center bg-no-repeat flex text-white'>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='max-w-md mx-auto p-8 backdrop-blur-md bg-white/25 shadow-lg rounded-xl'>
                    <h2 className='text-2xl font-bold mb-4'>Get Started</h2>
                    <p className='text-white-600 font-bold mb-6'>
                        Choose a platform to get started with.
                    </p>
                    <div className='flex flex-col gap-4'>
                        <a
                            href='https://github.com/Emmanuelnino'
                            className='py-2 px-4 bg-[#fcaa4e] text-white font-bold rounded-lg text-center bg-hover:opacity-50 transform transition duration-300'
                        >
                            GitHub
                        </a>
                        <div className=' flex flex-col gap-4'>
                            <a href="" className='py-2 px-4 bg-[#fcaa4e] text-white font-bold rounded-lg text-center bg-hover:opacity-90 transition transform duration-300'>Youtube</a>
                            <a href="https://www.linkedin.com/in/emmanuel-tembo-132156260/" className='py-2 px-4 bg-[#fcaa4e] text-white font-bold rounded-lg text-center bg-hover:opacity-90 transition transform duration-300'>LinkedIn</a>
                        </div>
                        {/* Add more links/buttons as needed */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStartedPage;
