const HeroSection = () => {
  return (
    <section style={{backgroundImage:`url(https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&w=600)`}} className='min-h-screen justify-center items-center h-full w-full bg-cover bg-center bg-no-repeat flex text-white'>
      <div className='bg-[#fcaa4e] bg-opacity-80 px-4 md:px-8 flex-1 w-full min-h-screen flex flex-col h-full items-center justify-center text-center'>
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

export default HeroSection;
