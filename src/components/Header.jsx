import React, { useState } from 'react';

const Navbar = () => {
  
};

const HeroSection = () => {
  return (
    <section className='min-h-screen justify-center items-center w-full flex bg-[#fcaa4e] text-white py-32'>
      <div className='container mx-auto text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Welcome to Your Favorite Website
        </h1>
        <p className='text-lg md:text-xl mb-8'>
          Discover amazing features and explore our Projects.
        </p>
        <a href="#" className='bg-white text-[#fcaa4e]  py-2 px-6 rounded-full font-semibold text-lg bg-hover:opacity-90 transition duration-300'>
          Collaborate?
        </a>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* ... other sections ... */}
    </div>
  );
};

export default App;
