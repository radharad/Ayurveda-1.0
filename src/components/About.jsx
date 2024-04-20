import React from 'react'
import Combination from './Combination'
import Choose from './Choose'
import Service from './Service'
import Footer from './Footer'
import Nav from './Nav'
import './CSS/style.css'

export default function About() {
  return (
    <div className='overflow-hidden'>
        <Nav/>
        <div className="header">
            <h1 className='md:text-[50px] text-[30px] text-[#ffffff] text-center'>About Us</h1>
        </div>
        <Combination/>
        <Choose/>
        <Service/>
        <Footer/>
    </div>
  )
}
