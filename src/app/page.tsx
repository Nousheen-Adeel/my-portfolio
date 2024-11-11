
"use client"


import Hero from '@/components/Hero';

import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import About from '@/components/About';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Home(){
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out-sine',
      delay: 100,
      mirror: true,
      anchorPlacement: 'top-bottom',
      offset: 160,
     });
    //  AOS.refresh
  }, []);
  
  return(
    <main>
      <Hero />

      <Skills/>
      <Contact />
      <About />

    </main>
  )
}
