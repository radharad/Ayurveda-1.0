import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Services() {
  return (
    <div className=' overflow-hidden'>
      <Nav/>
         <div className="header">
            <h1 className='md:text-[50px] text-[30px] text-[#ffffff] text-center'>Services</h1>
        </div>
        <div className='pt-20 pb-10 text-center'>
            <h2 className='smallhead'>BEST FOR YOU</h2>
            <h1 className='mainhead md:px-[350px]'>Benefit From Choosing The Best</h1>
        </div>   
        <div className='bestservice md:w-[1140px] mx-auto mb-32 grid md:grid-cols-3 grid-cols-1 p-10'>
           <div className='p-10'>
            <img src='images/service-icon1.png' alt='service-icon1' className='rounded-[50%]'/>
            <h3>Herbal</h3>
           </div>
           <div className='p-10'>
            <img src='images/service-icon2.png' alt='service-icon2' className='rounded-[50%]'/>
            <h3>Herb Products</h3>
           </div>
           <div className='p-10'>
            <img src='images/service-icon3.png' alt='service-icon3' className='rounded-[50%]'/>
            <h3>Medicine</h3>
           </div>
           <div className='p-10'>
            <img src='images/service-icon4.png' alt='service-icon4' className='rounded-[50%]'/>
            <h3>Ayurvedic</h3>
           </div>
           <div className='p-10'>
            <img src='images/service-icon5.png' alt='service-icon5' className='rounded-[50%]'/>
            <h3>Theta Healing</h3>
           </div>
           <div className='p-10'>
            <img src='images/service-icon6.png' alt='service-icon6' className='rounded-[50%]'/>
            <h3>Consultations</h3>
           </div>
          </div>
      <Footer/>    
    </div>
  )
}
