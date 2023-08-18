import React from 'react';

const Features = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#2e3b4e] text-[#fcaa4e]">
      <div className="flex-1 text-center relative z-10">
        <h2 className="font-bold text-4xl mb-4">
          Here
          we go!
        </h2>
        <h2 className="text-3xl font-bold mb-2">Interactive Showcase</h2>
        <p className="text-lg animate__animated animate__fadeInUp animate__delay-1s">
          Explore some of the
          awesome things I can do!
        </p>
        <p className="text-lg animate__animated animate__fadeInUp animate__delay-2s">
          Creativity <span className="font-semibold">unleashed</span>! 🚀
        </p>
      </div>
      <div className="absolute right-5 bottom-5 w-16 h-16 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-16 h-16 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Features;
