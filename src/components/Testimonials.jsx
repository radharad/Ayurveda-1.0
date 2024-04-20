import React from 'react'
import './CSS/style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
    const settings = { 
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true
       }
  return (
    <div className=' overflow-hidden'>
        <div className='testimonial-outer'>
         <div className='md:w-[1170px] mx-auto'>
           <div className="testimonial-inner">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
             <div>
              <div className='offers'>
               <div className="offers-bg">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-0">
                    <div className='offer-content text-left'>
                      <div className="offer-heading-title">FREE DELIVERY</div>
                        <div className="offer-heading-title-text">WINTER</div>
                        <div className='offer-subheading-title-text'>VACATION</div>
                        <div className='text-[18px] mb-[30px]'>Special Offers 50% Discount</div>
                        <div className='offer-btn'>
                           <a href=''>Buy Now</a> 
                        </div>
                    </div>
                    <div className='px-[15px]'>
                      <figure>
                        <img src='images/offer-img1.jpg' alt='offer-img1'/>
                      </figure>
                    </div>
                </div>
               </div>
               </div>
               <div className='offers'>
               <div className="offers-bg">
                <div className="grid md:grid-cols-[60%_auto] grid-cols-1 items-center gap-0">
                <div className='px-[15px]'>
                      <figure>
                        <img src='images/offer-img2.jpg' alt='offer-img2'/>
                      </figure>
                    </div>
                    <div className='offer-content offer-content-two text-left'>
                      <div className="offer-heading-title">FREE DELIVERY</div>
                        <div className="offer-heading-title-text">SUMMER</div>
                        <div className='offer-subheading-title-text'>VACATION</div>
                        <div className='text-[18px] mb-[30px]'>Special Offers 50% Discount</div>
                        <div className='offer-btn offer-btn-two'>
                           <a href=''>Buy Now</a> 
                        </div>
                    </div>
                </div>
               </div>
              </div>
             </div>
             <div>
             <div className='text-left my-[20px] '>
            <h2 className='smallhead'>TESTIMONIALS</h2>
            <h1 className='mainhead pl'>
            Don’t take our word for it hear what our customers are saying
            </h1>
           </div>


      <Slider {...settings}>
      <div className='bg-[#4d8f84] text-[#ffffff] rounded-md md:p-20 p-7 pb-16'>
       <figure>
        <img src='images/quote-icon.png' alt='quote-icon'/>
       </figure>
       <h2 className='testimonial-content'>Qosuere tellus imperdiet facilisi urabtur faucibuy tellus eusemper nunc finibusy placer Suspen potenti kellus ousemper lunc minibus alacer tuspen yotenti any praesent vel sem in semv.</h2>
       <div className='flex flex-wrap items-center gap-5'>
       <div>
        <img src='images/person3.jpg' alt='person3' className='rounded-[500px]'/>
       </div>
       <div>
        <h3>John Doe</h3>
        <h4>Happy Customer</h4>
       </div>
      </div>

      </div> 
      <div className='bg-[#4d8f84] text-[#ffffff] rounded-md md:p-20 p-7 pb-16'>
       <figure>
        <img src='images/quote-icon.png' alt='quote-icon'/>
       </figure>
       <h2 className='testimonial-content'>Qosuere tellus imperdiet facilisi urabtur faucibuy tellus eusemper nunc finibusy placer Suspen potenti kellus ousemper lunc minibus alacer tuspen yotenti any praesent vel sem in semv.</h2>
       <div className='flex flex-wrap items-center gap-5'>
       <div>
        <img src='images/person4.jpg' alt='person4' className='rounded-[500px]'/>
       </div>
       <div>
        <h3>Jane Doe</h3>
        <h4>Happy Customer</h4>
       </div>
      </div>
      </div> 

      <div className='bg-[#4d8f84] text-[#ffffff] rounded-md md:p-20 p-7 pb-16'>
       <figure>
        <img src='images/quote-icon.png' alt='quote-icon'/>
       </figure>
       <h2 className='testimonial-content'>Qosuere tellus imperdiet facilisi urabtur faucibuy tellus eusemper nunc finibusy placer Suspen potenti kellus ousemper lunc minibus alacer tuspen yotenti any praesent vel sem in semv.</h2>
       <div className='flex flex-wrap items-center gap-5'>
       <div>
        <img src='images/person5.jpg' alt='person5' className='rounded-[500px]'/>
       </div>
       <div>
        <h3>Chris Doe</h3>
        <h4>Happy Customer</h4>
       </div>
      </div>
      </div> 

</Slider>
</div>

</div>
</div>
             </div>
            </div>
           </div>
       
  )
}
