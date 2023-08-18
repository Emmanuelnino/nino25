import React from 'react'

const Features = () => {
  return (
    <div className="flex items-center justify-between bg-slate p-10 text-[#fcaa4e]">
      <div className="flex-1">
        <h2 className='px-10 font-bold text-4xl'>Here we go!</h2>
        <h2 className="py-96 text-3xl font-bold">Interactive Showcase</h2>
        <p>Check out some of the cool things I can do!</p>
      </div>
      <div className="flex-1 px-96 flex justify-around">
        <div className="flex-1 px-96 flex justify-around">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-16 h-16 transition-transform hover:scale-110"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="1em"
              width="1em"
              
            >
              <path d="M10.28 6.28a.75.75 0 10-1.06-1.06L6.25 8.19l-.97-.97a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.06 0l3.5-3.5z" />
              <path
                fillRule="evenodd"
                d="M7.5 15a7.469 7.469 0 004.746-1.693l2.474 2.473a.75.75 0 101.06-1.06l-2.473-2.474A7.5 7.5 0 107.5 15zm0-13.5a6 6 0 104.094 10.386.75.75 0 01.293-.292A6 6 0 007.5 1.5z"
              />
            </svg>
          </svg>
        </div>

        <img
          src="image2.jpg"
          alt="Animation Example"
          className="w-40 h-40 rounded-lg transition-transform hover:scale-110"
        />
      </div>
    </div>
  )
}

export default Features