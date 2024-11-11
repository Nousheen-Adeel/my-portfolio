'use client';

import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Initialize AOS animations when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 200, // Trigger earlier
    });
  }, []); // Empty dependency array ensures AOS is initialized only once

  return (
    <div className='pt-8 container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* Animated Navbar Logo */}
        <div className='text-xl font-medium' data-aos="fade-down" data-aos-delay="100">
          My Portfolio
        </div>

        {/* Desktop and larger screens */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-500 transition duration-200" data-aos="fade-right" data-aos-delay="200">Home</a>
          <a href="#about" className="hover:text-blue-500 transition duration-200" data-aos="fade-right" data-aos-delay="300">About</a>
          <a href="#skills" className="hover:text-blue-500 transition duration-200" data-aos="fade-right" data-aos-delay="400">Skills</a>
          <a href="#contact" className="hover:text-blue-500 transition duration-200" data-aos="fade-right" data-aos-delay="500">Contact</a>
        </nav>

        {/* Mobile menu icon */}
        <IoMenu 
          className='md:hidden cursor-pointer' 
          size={30} 
          onClick={toggleMenu} 
          data-aos="fade-left" 
          data-aos-delay="200"
        />
      </div>

      {/* Mobile menu, only visible when isMobileMenuOpen is true */}
      <nav 
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4`} 
        data-aos="fade-up" 
        data-aos-delay="300"
      >
        <a href="#home" className="block py-2 hover:text-blue-500 transition duration-200" data-aos="fade-up" data-aos-delay="400">Home</a>
        <a href="#about" className="block py-2 hover:text-blue-500 transition duration-200" data-aos="fade-up" data-aos-delay="500">About</a>
        <a href="#skills" className="block py-2 hover:text-blue-500 transition duration-200" data-aos="fade-up" data-aos-delay="600">Skills</a>
        <a href="#contact" className="block py-2 hover:text-blue-500 transition duration-200" data-aos="fade-up" data-aos-delay="700">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
