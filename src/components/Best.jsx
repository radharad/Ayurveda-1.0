import React from 'react'
import './CSS/style.css'
import { NavLink } from 'react-router-dom'

export default function Best() {
  return (
    <div className='md:w-[1170px] mx-auto md:m-[100px] overflow-hidden'>
        <div className="grid md:grid-cols-[62%_auto] grid-cols-1 gap-8">
          <div className='bestservice grid md:grid-cols-3 grid-cols-1 p-10'>
           <div>
            <img src='images/service-icon1.png' alt='service-icon1' className='rounded-[50%]'/>
            <h3>Herbal</h3>
           </div>
           <div>
            <img src='images/service-icon2.png' alt='service-icon2' className='rounded-[50%]'/>
            <h3>Herb Products</h3>
           </div>
           <div>
            <img src='images/service-icon3.png' alt='service-icon3' className='rounded-[50%]'/>
            <h3>Medicine</h3>
           </div>
           <div>
            <img src='images/service-icon4.png' alt='service-icon4' className='rounded-[50%]'/>
            <h3>Ayurvedic</h3>
           </div>
           <div>
            <img src='images/service-icon5.png' alt='service-icon5' className='rounded-[50%]'/>
            <h3>Theta Healing</h3>
           </div>
           <div>
            <img src='images/service-icon6.png' alt='service-icon6' className='rounded-[50%]'/>
            <h3>Consultations</h3>
           </div>
          </div>
          <div className='md:p-10 md:px-0 px-5'>
            <h2 className='smallhead'>BEST FOR YOU</h2>
            <h1 className='mainhead pl'>Benefit From Choosing The Best</h1>
            <p className='para'>Duis variurna id convallis elementu exerat tincidunt magna, sepharetra est purus aceleo.</p>
            <button className='btn'><NavLink to={'/service'}>VIEW ALL SERVICES</NavLink></button>
          </div>
        </div>
    </div>
  )
}
