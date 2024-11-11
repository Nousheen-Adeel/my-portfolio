import React from 'react'


const Hero = () => {
  return (
    <section id="home"className="bg-black text-white h-screen flex items-center justify-center">
<div className="text-center">
  <img
    src="/Profile-picture-Nousheen.jpeg"
    alt="Profile"
    className="mx-auto mb-4 w-32 h-32 object-cover rounded-full"
  />
  
        <div className="text-center">
        <h1  data-aos="flip-left" className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p data-aos="flip-right" className="text-lg md:text-xl mb-6">
          I'm Nousheen, a passionate web developer and AI enthusiast.
        </p>
        <a
          href="#about"
          className="inline-block px-6 py-3 bg-white text-black border-2 border-white rounded-lg font-semibold shadow-lg hover:bg-blue-800 hover:text-white transition duration-300 ease-in-out"
        >
          Learn More
        </a>

    </div>
   
      </div>
      
    </section>
 
  );
}

export default Hero
