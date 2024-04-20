import React from 'react'
import Nav from './Nav'
import './CSS/style.css'
import Best from './Best'
import Combination from './Combination'
import Choose from './Choose'
import Service from './Service'
import Extraordinary from './Extraordinary'
import Products from './Products'
import Testimonials from './Testimonials'
import Blog from './Blog'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' overflow-hidden'>
        <Nav/>
   {/* Home Section Start */}    
  <div  className='wrapper text-[#ffffff]'>
   <div className='bg1 font-bold'>
     <div className='md:pt-[200px] md:pb-[100px]  md:w-[1220px] md:py-0 py-5 md:px-0 px-5 mx-auto'>
     <h4 className='md:text-[20px] text-[15px]'>WE’RE THE BEST IN</h4>
     <h1 className='md:text-[70px] text-[30px]'>AYURVEDA</h1>
     <h3 className='md:text-[35px] text-[30px]'>& Ayurvedic Medicine</h3>
     <p className='md:text-[18px] text-[13px]'>Duis variur convls eleme exera tincid magna</p>
     <p>sed phares purus aceleo.</p>
     <button className='z-50 hover:bg-[#282828] hover:text-[#ffffff] rounded-full bg-white my-8 px-8 py-4 mt-30 text-lg text-[#282828]'><NavLink to={'/about'}>Discover More</NavLink></button>
    </div>

    </div>
   

    <div className='bg5 font-bold'>
     <div className='md:pt-[200px] md:pb-[100px]  md:w-[1220px] md:py-0 py-5 md:px-0 px-5 mx-auto'>
     <h4 className='md:text-[20px] text-[15px]'>WE’RE THE BEST IN</h4>
     <h1 className='md:text-[70px] text-[30px]'>AYURVEDA</h1>
     <h3 className='md:text-[35px] text-[30px]'>& Ayurvedic Medicine</h3>
     <p className='md:text-[18px] text-[13px]'>Duis variur convls eleme exera tincid magna</p>
     <p>sed phares purus aceleo.</p>
     <button className='z-50 hover:bg-[#282828] hover:text-[#ffffff] rounded-full bg-white my-8 px-8 py-4 mt-30 text-lg text-[#282828]'><NavLink to={'/about'}>Discover More</NavLink></button>
    </div>
    </div>
    </div>
  {/* Home Section End */}
  <div className='fixed cursor-pointer w-[40px]  md:bottom-[40px] md:left-[20px] md:right-0 right-[39px] bottom-[90px] z-[100] '>
      <a href="https://wa.me/917875006677" target='_blank' rel='noreferrer'><img src='images/whatsapp.png' alt='' className='' width={40}/></a>
   </div>
  {/* Best Section Start */}
  <Best/>
  {/* Best Section Start */}

  {/* Combination Section Start */}
  <Combination/>
  {/* Combination Section End */}

  {/* Choose Section Start */}
  <Choose/>
  {/* Choose Section End */}
   
  {/* Service Section Start */}
   <Service/>
  {/* Service Section End */}

  {/* Extraordinary Section Start */}
  <Extraordinary/>
  {/* Extraordinary Section End */}

  {/* Products Section Start */}
   <Products/>
  {/* Products Section End */}

  {/* Testimonials Section Start */}
   <Testimonials/>
  {/* Testimonials Section End */}

  {/* Blog Section Start */}
   <Blog/>
  {/* Blog Section End */}

  {/* Footer Section Start */}
   <Footer/>
  {/* Footer Section End */}

</div>
  )
}
