import React from 'react';

const Features = () => {
  return (
    <div className="flex items-center justify-center h-screen text-[#fcaa4e]">
      <div className="flex-1 text-center">
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
        <p className="text-gray-500 text-xl">
          Explore some of the
          awesome things created!
        </p>
        <p className="py-8 md:py-11 z-50 text-6xl text-gray-800 animate-bounce group">
          Creativity <span className="inline-block text-[#fcaa4e] group-hover:animate-none">unleashed</span>! 🚀
        </p>

        <div className='mt-5 gap-6 items-center justify-center flex w-full'>



          {/* Discord */}
          <a href="" className='group flex gap-1 flex-col'>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2.5em"
              width="2.5em"
              className='justify-center transition transform delay-300 group-hover:scale-105 w-full flex group-hover:text-blue-400 text-zinc-700'
            >
              <path d="M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.01-.059.051.051 0 00-.018-.011 8.875 8.875 0 01-1.248-.595.05.05 0 01-.02-.066.051.051 0 01.015-.019c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085 8.254 8.254 0 01-1.249.594.05.05 0 00-.03.03.052.052 0 00.003.041c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z" />
            </svg>
            <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Discord</p>
          </a>

          {/* Twitter */}
          <a href="" className='group flex gap-1 flex-col'>
          <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="2.5em"
      width="2.5em"
      className='justify-center transition transform delay-300 group-hover:scale-105 w-full flex group-hover:text-blue-700 text-zinc-700'
    >
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />
    </svg>
            <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Twitter</p>
          </a>

          {/* Facebook */}
          <a href="" className='group flex gap-1 flex-col'>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2.5em"
              width="2.5em"
              className='justify-center transition transform delay-300 group-hover:scale-105 w-full flex group-hover:text-blue-500 text-zinc-700'

            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>

            <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Facebook</p>
          </a>

        </div>

      </div>
    </div>
  );
};

export default Features;
