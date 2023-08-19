import React from 'react';

const Features = () => {
  return (
    <div className="flex items-center justify-center h-screen text-[#fcaa4e]">
      <div className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none flex-1 text-center">
        <h2 className="font-bold text-4xl mb-4">

          Here


          we go!

        </h2>
        <div className="mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16 mx-auto animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        <h2 className="text-[#fcaa4e] text-3xl font-bold mb-2">Interactive Showcase</h2>
        <p className="text-lg">
          Explore some of the
          awesome things created!
        </p>
        <p className="py-8 text-6xl text-gray-800 animate-bounce group">
          Creativity <span className="inline-block text-[#fcaa4e] group-hover:animate-none">unleashed</span>! 🚀
        </p>
        


      </div>
    </div>
  );
};

export default Features;
