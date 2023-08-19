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
    height="2.5em"
    width="2.5em"
    className='justify-center transition transform delay-300 duration-300 group-hover:scale-105 w-full flex group-hover:text-red-600 text-zinc-700'

  >
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 010 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 017.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
  </svg>
  <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Youtube</p>
</a>

{/* Twitter */}
<a href="" className='group flex gap-1 flex-col'>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="2.5em"
    width="2.5em"
    className='justify-center transition transform delay-300 duration-300 group-hover:scale-105 w-full flex group-hover:text-yellow-500 text-zinc-700'

  >
    <path d="M.331 11.378s.542-.089.765.144c.223.233.077.716-.22.724-.296.01-.57.063-.764-.144a.444.444 0 01.219-.724m5.881 3.292c-.052.01-.107-.017-.164-.058-.388-.542-.529-2.393-.707-2.503-.185-.114-.854 1.026-2.186.903-.557-.051-1.124-.412-1.457-.662.03-.42.036-1.403.865-1.083.504.194 1.367.726 2.125-.23.838-1.058 1.3-.75 1.577-.52.277.23.092 1.425.506 1.09.413-.334 2.082-2.41 2.082-2.41s1.292-1.303 1.49.067c.197 1.37 1.04 2.888 1.263 2.845.223-.043 2.822-5.325 3.195-5.666.372-.341 1.625-.296 1.565.578-.06.874-.187 6.308-.187 6.308s-.147 1.531.093.713c.099-.34.206-.645.339-1.003a989.222 989.222 0 002.278-7.368l.317-1.09a3.592 3.592 0 01.097-.33c.046-.154.076-.255.086-.282.024-.068.092-.12.188-.157.097-.061.2-.064.317-.067.302-.027.69.012 1.04.112.102 0 .212.037.317.112s.006 0 .015.01c.003 0 .005 0 .008.01a.503.503 0 01.098.095c.001 0 .002 0 .004.01a.716.716 0 01.051.073c.196.286.315.814.195 1.75-.3 2.335-.531 7.14-.531 7.14s-.047.229.435-.783c.017-.035.038-.066.058-.098a.42.42 0 00.091-.085c.298-.354 1.097-.563 1.651-.558.234.028.43.087.547.16.218.333.09 1.562.09 1.562-.462.043-1.341.291-1.653.337-.311.046-.785 2.07-1.443 1.863-.658-.207-2.125-1.127-2.125-1.253a98.33 98.33 0 01.152-1.87.152.152 0 010-.014c.022-.273.003-.392-.123-.12-.109.235-.581 1.736-1.108 3.371-.056.143-1.051 3.156-1.182 3.523-.156.427-.287.753-.377.921-.138.187-.324.304-.583.226-.646-.196-1.465-1.09-1.473-1.31-.015-1.251.06-7.974-.242-7.414-.311.575-2.73 4.561-2.73 4.561-.04.01-.07.01-.106.01-.172-.019-.437-.074-.51-.238-.004-.01-.01-.018-.013-.028l-.014-.04c-.033-.11-.046-.23-.075-.327a40.828 40.828 0 00-.463-1.42c-.279-.909-.566-1.837-.613-1.94-.092-.2-.227-.116-.347 0-.54.458-1.687 2.48-2.723 2.59" />
  </svg>
  <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Audiomack</p>
</a>

{/* Facebook */}
<a href="https://music.apple.com/ch/artist/stonewreckodds/165524673" className='group flex gap-1 flex-col'>
<svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="2.5em"
      width="2.5em"
      
    >
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    </svg>

  <p className='md:text-sm text-xs transition transform delay-300 duration-300 group-hover:opacity-0 text-zinc-500'>Apple</p>
</a>

</div>

      </div>
    </div>
  );
};

export default Features;
