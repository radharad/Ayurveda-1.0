import React from 'react'
import './CSS/style.css'
import { IoChevronForwardSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export default function Service() {
  return (
    <div className="bg-service overflow-hidden">   
      <div className="md:w-[1170px] mx-auto grid md:grid-cols-[52%_auto] grid-cols-1 py-[10px] gap-[30px]">
        <div>
            <img src='images/section4-img.png' alt='section4-img'/>
        </div>
        <div>
        <div className='pt-10 '>
            <h2 className='smallhead'>HOW IT WORKS</h2>
            <h1 className='mainhead pl'>Easy Step To Order The Services</h1>
            <p className='text-[#4c4c4c] text-[17px]'>Proin feugiat diam vitae ligula imperd dapibus vestibul tellus libero, at fermentum mi euismod ut. Vivamvitaey dui vitae turpis sollicitudin rutrum.</p>
        </div>
        <div className='p-10'>
        <div className='md:max-w-[900px] mx-auto relative services'>
          <div className='md:max-w-[1170px] mx-auto middleservice'>

           <div className='mb-[25px]'>
             <div className='flex flex-wrap items-center text-[20px]'>
                <div className='flex flex-wrap items-center text-[#ffffff] w-[40px] h-[40px] font-bold  bg-[#4d8f84] p-[10px] rounded-[500px]'><IoChevronForwardSharp /></div>
                <div className='pl-[15px] text-[#282828] md:text-[19px] text-[15px]'>Consultations expert.</div>
             </div>
           </div>

           <div className='mb-[25px] '>
             <div className='flex flex-wrap items-center text-[20px]'>
             <div className='flex flex-wrap items-center text-[#ffffff] w-[40px] h-[40px] font-bold  bg-[#4d8f84] p-[10px] rounded-[500px]'><IoChevronForwardSharp /></div>
                <div className='pl-[15px] text-[#282828] md:text-[19px] text-[15px]'>Get an appointment.</div>
             </div>
           </div>

           <div className='mb-[25px]'>
             <div className='flex flex-wrap items-center text-[20px]'>
             <div className='flex flex-wrap items-center text-[#ffffff] w-[40px] h-[40px] font-bold  bg-[#4d8f84] p-[10px] rounded-[500px]'><IoChevronForwardSharp /></div>
                <div className='pl-[15px] text-[#282828] md:text-[19px] text-[15px]'>Enjoy your service.</div>
             </div>
           </div>
          </div>
      
        </div>
        </div>
        <NavLink to={'/contact'}>
        <div className='service-contact px-[30px] py-[55px]'>
            <div className='text-[16px] leading-[1.3] text-[#ffffff]'>
             <p>Need Help?</p>
             <p>Contact Us</p>
             </div>
           </div>
        </NavLink>
        </div>
      </div>
    </div>
  )
  }