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
        
        <div className='mt-10 gap-6 items-center justify-center flex w-full'>

{/* Instagram */}
<a href="https://distrokid.com/hyperflow/stonewreckodds1/9am" className='group flex gap-1 flex-col'>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="2.5em"
    width="2.5em"
    className='justify-center transition transform delay-300 duration-300 group-hover:scale-105 w-full flex group-hover:text-green-500 text-zinc-700'

  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
  <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Instagram</p>
</a>

{/* Discord */}
<a href="" className='group flex gap-1 flex-col'>
<svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      className='justify-center transition transform delay-300 group-hover:scale-105 w-full flex group-hover:text-blue-400 text-zinc-700'
    >
      <path d="M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.01-.059.051.051 0 00-.018-.011 8.875 8.875 0 01-1.248-.595.05.05 0 01-.02-.066.051.051 0 01.015-.019c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085 8.254 8.254 0 01-1.249.594.05.05 0 00-.03.03.052.052 0 00.003.041c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z" />
    </svg>
  <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Youtube</p>
</a>

{/* Twitter */}
<a href="" className='group flex gap-1 flex-col'>
<svg
      viewBox="0 0 448 512"
      fill="currentColor"
      height="2.5em"
      width="2.5em"
      className='justify-center transition transform delay-300 group-hover:scale-105 w-full flex group-hover:text-blue-700 text-zinc-700'
    >
      <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 01-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
    </svg>
  <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Twitter</p>
</a>

{/* Facebook */}
<a href="https://music.apple.com/ch/artist/stonewreckodds/165524673" className='group flex gap-1 flex-col'>
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
