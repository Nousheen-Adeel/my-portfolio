import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";




const Contact = () => {
  return (
    <section id="contact">
    <div id='Contact' className='pt-32 conatiner'>
        <div className='grid md:grid-cols-2 gap-5'></div>
        <div className='space-y-8'></div>
        <h2 data-aos="fade-down" className='text-4xl' >Reach Out</h2>
        <p className='text-gray-600 text-[18px] pt-2'>Feel free to call, email, or send a message through the form below</p>
        <br />
        <div  data-aos="flip-up" className='flex gap-4 items-center'>
        <IoMdMail size={40}/>nousheenfatimeadeel@gmail.com
        </div>
        <br />
        <div  data-aos="flip-up" className='flex gap-4 items-center'>
        <FaPhoneVolume size={40}/>92-334-3887219
        </div>
        <br />

        <div  data-aos="flip-up" className='flex gap-4 items-center'>
        <FaGithub size={40}/> https://github.com/Nousheen-Adeel

        </div>
        <br />
        <br />
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
               <label htmlFor="name">Name</label>
                <input type="text" className='h-[40px] bg-transparent border-2 border-blue-800 rounded-lg border-accent' id="name" />

   
        </div>
            <div className='flex flex-col gap-1'>
               <label htmlFor="e-mail">E-mail</label>
                <input type="text" className='h-[40px] bg-transparent border-2 border-blue-800 rounded-lg border-accent' id="e-mail" />

   
        </div>
        <div className='flex flex-col gap-1'>
               <label htmlFor="message">Message</label>
                <textarea id="message" className='bg-transparent border-2 border-blue-800 rounded-lg border-accent' rows={8} ></textarea>
                <button className='border-2 border-blue-800 rounded-lg border-accent bg-accent p-2 px-5'>Send</button>

   
        </div>
    </div>
    </div>
    </section>
  )
}

export default Contact
