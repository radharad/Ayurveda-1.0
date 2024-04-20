import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {NavLink} from "react-router-dom"
import { BsFillTelephoneFill} from "react-icons/bs";
import {BiEnvelope} from 'react-icons/bi'
import './CSS/style.css'

export default function Nav() {
  const [toggle,setToggle] = useState(false)
  const handleToggle = () => {
   setToggle(!toggle)
  }

  return ( 
    <>
     <div className='display white bgTop flex justify-end space-x-6 p-3 text-white'>
    <BsFillTelephoneFill className='text-white mt-2 relative left-5'/>
     <p>9088295002 , 9088295003</p>
     <p>|</p>
     <p className='flex pr-5'><BiEnvelope className='mt-1'/>&nbsp;info@companyname.com</p>   
   </div>
   
     <div className='color bg-[rgba(255,255,255, 1)] text-[#282828] mx-auto overflow-hidden'>
      <div>
         <div className=' text-[#282828] flex justify-around md:px-[70px] px-[30px] p-5 items-center'>
        <div className='w-full text-3xl font-bold decoration-none'>
        <NavLink to={"/"}>
        <p className='logo'><img src='images/logo.png' alt='logo'/></p>
          </NavLink>
        </div>
        <ul className='hidden md:flex gap-10 text-[#282828] pt-3  items-center  font-bold '>
        <li>
          <NavLink className="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/service"}>Business</NavLink>
        </li>
        <li>
          <NavLink to={"/legal"}>Legal</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className='relative'>
        <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li className='relative'>
        <NavLink to={"/register"}>Register</NavLink>
        </li>
        </ul>
        {/* <div className='cont-btn'>
        <NavLink to={""} className='px-5 py-5 contact-btn  w-[200px] pl-5 leading-7 grid grid-cols-[20%_auto] gap-2 items-center bg-[#f5f5f5] ml-[20px] '>
          <div><BsFillTelephonePlusFill/></div>
          <div>
           <p className='call'>Call Us Now</p>
           <p>123 456 7890</p>
          </div>
        </NavLink>
        </div> */}
      
       
        <div onClick={handleToggle} className='block z-10 md:hidden button py-[10px] px-[20px] '>
        {
          toggle ?
          <AiOutlineClose size={30} className='text-[#ffffff]'/>
          :
          <AiOutlineMenu size={30} className=''/>
        }
        </div>

        {/* Responsive menu */}
        <ul className={toggle ? 'z-[1] fixed left-0 top-0 w-[100%] pt-[50px] h-[450px] text-center border-r-gray-900 text-[#ffffff] bg-[#4d8f84] ease-in-out duration-100  z-2' : 'bg-[#4d8f84] text-[#ffffff] fixed ease-in-out duration-100 left-[-100%] z-2'}>
        <li className='p-2'>
          <NavLink className="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/service"}>Business</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/legal"}>Legal</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
        <li className='p-2'>
          <NavLink to={"/register"}>Register</NavLink>
        </li>
        </ul>
      </div> 
      </div>
     </div>
     </>
  )
}
