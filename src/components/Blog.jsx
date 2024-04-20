import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Blog() {
  return (
    <div className=' overflow-hidden'>
        <div className='bg-[#F8FAFA] md:pt-[60px] pb-[30px]  px-[20px]'>
            <div className='md:w-[1220px] mx-auto grid md:grid-cols-[28%_auto_auto] grid-cols-1 gap-5'>
             <div className='text-left'>
             <div className='pt-10 pb-2 px-10'>
            <h2 className='smallhead'>FROM THE BLOG</h2>
            <h1 className='mainhead pl'>Stay Up To Date With Our Fresh News</h1>
            <p className='para para-blog'>Nunc condimentum purus conse quat antvehicula, a porttitor nibh facilisis. Etiam id sagittielt sceleri sque urna. Mauris vitae felis eleif enante venena volutpa.</p>
            <button className='btn'><NavLink to={'/'}>VIEW ALL POSTS</NavLink></button>
            </div>
             </div>
             <div className='posts text-left bg-[#ffffff] mx-[30px]'>
                <img src='images/post-img1.jpg' alt='post1'/>
                <div className='p-[30px]'>
                  <h2 className='text-[20px] mb-[20px] text-[#393939] hover:text-[#4d8f84]'>Highest Quality Herbal and Ayurveda Product</h2>
                  <h4 className='text-[#4d8f84] text-[15px]'>SEPTEMBER 19, 2022</h4>
                  <p className='text-[17px] text-[#282828] my-[20px]'>Aendrerit eu ipsumunc eleifend nulla tortoridie vehicul quamac ulis at. Morbi auctor …</p>
                </div>
             </div>
             <div className='posts text-leftt bg-[#ffffff] mx-[30px]'>
                <img src='images/post-img2.jpg' alt='post2'/>
                <div className='p-[30px]'>
                  <h2 className='text-[20px] mb-[20px] text-[#393939] hover:text-[#4d8f84]'>Easy Step and Get the World Best Treatment</h2>
                  <h4 className='text-[#4d8f84] text-[15px]'>SEPTEMBER 19, 2022</h4>
                  <p className='text-[17px] text-[#282828] my-[20px]'>Aendrerit eu ipsumunc eleifend nulla tortoridie vehicul quamac ulis at. Morbi auctor…</p>
                </div>
             </div>
            
            </div>
        </div>
    </div>
  )
}
