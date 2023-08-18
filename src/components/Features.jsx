import React from 'react';

const Features = () => {
  return (
    <div className="flex items-center justify-center h-screen text-[#fcaa4e]">
      <div className="flex-1 text-center">
        <h2 className="font-bold text-4xl mb-4">
          <span className="text-[#fcaa4e] transition-transform hover:-translate-y-1 inline-block">
            Here
          </span>
          <span className="text-[#fcaa4e] transition-transform hover:-translate-y-1 inline-block">
            we go!
          </span>
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
        <div className="flex items-center justify-center h-screen text-white">
          <div className="flex-1 text-center">
            <h2 className="font-bold text-4xl mb-4">
              <span className="transition-transform hover:-translate-y-1 inline-block">
                Here
              </span>{' '}
              <span className="transition-transform hover:-translate-y-1 inline-block">
                we go!
              </span>
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
            <h2 className="text-[#fcaa4e] text-3xl font-bold mb-2">
              Interactive Showcase
            </h2>
            <p className="text-[#fcaa4e] text-lg">
              Explore some of the{' '}
              <span className="text-[#fcaa4e] ">awesome</span> things I can do!
            </p>
            <p className="text-3xl animate-pulse">&#x1F4AA;&#x1F4AA;&#x1F4AA;</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
