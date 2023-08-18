import React from 'react'

const Features = () => {
  return (
    <div className="flex items-center justify-between bg-slate p-10 text-[#fcaa4e]">
      <div className="flex-1">
        <h2 className="py-65 text-3xl font-bold">Interactive Showcase</h2>
        <p>Check out some of the cool things I can do!</p>
      </div>
      <div className="flex-1 flex justify-around">
        <img
          src="image1.jpg"
          alt="Animation Example"
          className="w-40 h-40 rounded-lg transform transition-transform hover:scale-110"
        />
        <img
          src="image2.jpg"
          alt="Animation Example"
          className="w-40 h-40 rounded-lg transform transition-transform hover:scale-110"
        />
      </div>
    </div>
  )
}

export default Features