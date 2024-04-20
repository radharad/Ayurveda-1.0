import React from 'react'
import './CSS/style.css'
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='relative z-10 overflow-hidden'>
        <div className='bg-[#4d8f84]'>
         <div className="footer-infobox">
            <div className="newsletter">
              <h2 className='newsletter-title'>Subscribe Our Newsletter</h2>
              <div className="newsletter-form">
              <div className='newsletter-input-form'>
               <input type='email' className='bg-[#ffffff] border border-solid rounded-[50px] md:py-[32px] py-[16px] px-[40px] md:w-[80%] w-[95%] my-8 relative' placeholder='Enter your email'/>
               <button className='newsbtn hover:bg-[#4d8f84] bg-[#181818] text-[#ffffff]  rounded-[50px] py-[15px] font-bold px-[40px] absolute right-[76px] top-[50px] '>SUBSCRIBE</button>
              </div>
              </div>
            </div>
            <div className="center text-[#ffffff]">
            <div className='row-footer'>
             <div className="grid md:grid-cols-3 grid-cols-1">
              <div className='px-[15px] mb-[40px]'>
              <div className="footer-column-inner">
                <h3>Quick Links</h3>
                <div className='footmenu'>
                 <ul>
                  <li><NavLink to={'/'}>Home</NavLink></li>
                  <li><NavLink to={'/about'}>About</NavLink></li>
                  <li><NavLink to={'/service'}>Service</NavLink></li>
                  <li><NavLink to={'/contact'}>Contact</NavLink></li>
                  <li><NavLink to={'/login'}>Login</NavLink></li>
                  <li><NavLink to={'/register'}>Register</NavLink></li>
                 </ul>
                </div>
              </div>
              </div>
              <div className='px-[15px] mb-[40px]'>
              <div className="footer-column-inner bg-[rgba(0,0,0,.1)]">
                <h3 className='px-[40px]'><img src='images/footer-logo.png' alt='logo'/></h3>
                 <p className='footmenu'>Nunc condimentum purus conse quat antvehicula, a porttitor nibh facilisis. Etiam id sagittielt sceleri sque urnaauris vitae.</p>
                 <div className="social-icons flex flex-wrap items-center">
                   <a href=''><TiSocialFacebook/></a>
                   <a href=''><TiSocialTwitter/></a>
                   <a href=''><TiSocialInstagram/></a>
                   <a href=''><TiSocialLinkedin/></a>
                 </div>
              </div>
              </div>
              <div className='px-[15px] mb-[40px]'>
              <div className="footer-column-inner">
                <h3>Contact Info</h3>
                <div className='footmenu'>
                <h4 className='contactpara px-10'>Street 238,52 tempor Donec ultricies mattis nulla risus tristique ut.</h4>
                <h4 className='mb-3'>+01 23 456 7890</h4>
                <h5>support@sitename.com</h5>
                </div>
              </div>
              </div>
             </div>
             <p className='text-center pt-2 pb-10'>© Copyright 2023 Ayurveda - Design by PROBUZ TECHNOLOGIES.</p>
            </div>
            </div>
         </div>
        </div>
    </div>
  )
}
