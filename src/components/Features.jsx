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
        <p className="text-lg">
          Explore some of the
           awesome things created!
        </p>
        <p className="text-lg animate-bounce">
  Creativity <span className="group inline-block animate-bounce text-[#fcaa4e] group-hover:animate-none">unleashed</span>! 🚀
</p>
{/* Other paragraphs */}
<p className="text-lg animate-bounce">
  About Us: We are a passionate community of creators and innovators, dedicated to nurturing the sparks of imagination and turning them into impactful realities. Our mission is to provide a platform for individuals to explore, experiment, and collaborate, fostering a culture where creativity knows no bounds.
</p>
<p className="text-lg animate-bounce">
  Join our vibrant community and be a part of the journey to unlock the hidden potential within you. Together, we can shape a future that's vibrant with innovation and brimming with limitless possibilities.
</p>


      </div>
    </div>
  );
};

export default Features;
