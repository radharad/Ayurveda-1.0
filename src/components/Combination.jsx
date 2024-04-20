import React from 'react'
import './CSS/style.css'
import { NavLink } from 'react-router-dom'

export default function Combination() {
  return (
    <div className='combination relative z-10 overflow-hidden'>
      <div className='md:w-[1170px] mx-auto'>
        <div className='grid md:grid-cols-[36%_auto]  gap-4]'>
          <div>
            <h2 className='combine-head'>The Combination of Nature & Science</h2>
            <p className='para'>Duis variurid convallis elementu exerat tincidun magna, sepharetra estine purus aceleo anfdye element varudios.</p>
            <div className="list">
              <div className="listItem">
                <div className="items md:w-[1170px] mx-auto">
                    <div className='flex flex-wrap items-center gap-4 mb-[12px]'>
                        <img src='images/leaf-icon.png' alt='leaf-icon'/>
                        <h2 className='item'>100% Organic</h2>
                    </div>
                    <div className='flex flex-wrap items-center gap-4 mb-[12px]'>
                        <img src='images/leaf-icon.png' alt='leaf-icon'/>
                        <h2 className='item'>Best Quality</h2>
                    </div>
                    <div className='flex flex-wrap items-center gap-4 mb-[12px]'>
                        <img src='images/leaf-icon.png' alt='leaf-icon'/>
                        <h2 className='item'>Hygienic Product</h2>
                    </div>
                    <div className='flex flex-wrap items-center gap-4 mb-[12px]'>
                        <img src='images/leaf-icon.png' alt='leaf-icon'/>
                        <h2 className='item'>Quality Tested</h2>
                    </div>
                    <div className='flex flex-wrap items-center gap-4 mb-[12px]'>
                        <img src='images/leaf-icon.png' alt='leaf-icon'/>
                        <h2 className='item'>Health Care</h2>
                    </div>
                    <div className='flex flex-wrap items-center gap-4 mb-[12px]'>
                        <img src='images/leaf-icon.png' alt='leaf-icon'/>
                        <h2 className='item'>Organic Herbal</h2>
                    </div>
                  <div className="bg-[#4d8f84] hover:bg-[#282828] my-[20px] w-[16%] py-[19px] px-[32px] rounded-[50px] btncombination text-white">
                    <button className='text-[17px]'><NavLink to={'/about'}>View Products</NavLink></button>
                    </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className='combinefigure z-20'></div>
       
        </div>
      </div>
    </div>
  )
}
