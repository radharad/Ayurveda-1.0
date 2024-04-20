import React from 'react'

export default function Choose() {
  return (
    <div className='choosesection overflow-hidden'>
        <div className="choosehead">Why Choose Pure Ayurveda</div>
        <div className="md:w-[1100px] mx-auto grid md:grid-cols-4 grid-cols-1 pb-[90px] gap-8">
         <div className='choose hover:scale-110 duration-500'>
            <div className="choose-img-div">
                <img src='images/feature-icon1.png' alt='feature-icon1'/>
            </div>
            <div className="choose-title">100% Organic</div>
            <p className="choose-para">Duis variu convls eleme exera tincid magna.</p>
         </div>
         <div className='choose hover:scale-110 duration-500'>
            <div className="choose-img-div">
                <img src='images/feature-icon2.png' alt='feature-icon2'/>
            </div>
            <div className="choose-title">Chemical Less</div>
            <p className="choose-para">Duis variu convls eleme exera tincid magna.</p>
         </div>
         <div className='choose hover:scale-110 duration-500'>
            <div className="choose-img-div">
                <img src='images/feature-icon3.png' alt='feature-icon3'/>
            </div>
            <div className="choose-title">Tested Product</div>
            <p className="choose-para">Duis variu convls eleme exera tincid magna.</p>
         </div>
         <div className='choose hover:scale-110 duration-500'>
            <div className="choose-img-div">
                <img src='images/feature-icon4.png' alt='feature-icon4'/>
            </div>
            <div className="choose-title">Pure Ayurveda</div>
            <p className="choose-para">Duis variu convls eleme exera tincid magna.</p>
         </div>
        </div>
    </div>
  )
}
