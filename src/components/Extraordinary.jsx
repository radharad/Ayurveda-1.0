import React from 'react'
import './CSS/style.css'

export default function Extraordinary() {
  return (
    <div className='overflow-hidden'>
        <div className='extraordinary  mx-auto text-[#ffffff] text-center'>
          <div className="grid md:grid-cols-2 grid-cols-1">
           <div className='content'>

             <div className='md:max-w-[470px] mx-auto py-[25px]'>
               <div className='card-extraordinary'>
                 <div className="container-extraordinary">
                   <div className="flex flex-wrap items-center gap-10">
                    <img src='images/feature-image3.jpg' alt='feature-image3' className='img1'/>
                    <div className='md:text-left text-center'>
                        <h3 className='extraordinary-head'>Consultations</h3>
                        <div className='extraordinary-para'>
                            <p>Duis variurid convallis element</p> 
                            <p>exerat tincidun magna.</p>
                        </div>
                    </div>
                    </div> 
                 </div>
               </div>
             </div>

             <div className='md:w-[470px] mx-auto py-[25px]'>
               <div className='card-extraordinary'>
                 <div className="container-extraordinary">
                   <div className="flex flex-wrap items-center gap-10">
                    <img src='images/feature-image2.jpg' alt='feature-image2' className='img1'/>
                    <div className='md:text-left text-center'>
                        <h3 className='extraordinary-head'>Treatments</h3>
                        <div className='extraordinary-para'>
                            <p>Duis variurid convallis element</p> 
                            <p>exerat tincidun magna.</p>
                        </div>
                    </div>
                    </div> 
                 </div>
               </div>
             </div>

                <div className='md:w-[470px]  mx-auto py-[25px]'>
               <div className='card-extraordinary'>
                 <div className="container-extraordinary">
                   <div className="flex flex-wrap items-center gap-10">
                    <img src='images/feature-image1.jpg' alt='feature-image1' className='img1'/>
                    <div className='md:text-left text-center'>
                        <h3 className='extraordinary-head'>Consultations</h3>
                        <div className='extraordinary-para'>
                            <p>Ayurvedic Store</p> 
                            <p>exerat tincidun magna.</p>
                        </div>
                    </div>
                    </div> 
                 </div>
               </div>
             </div>

           </div>
            {/* <div className='extraordinary-background'>
             <div className='md:w-[600px] mx-auto'>
               <div className="extraordinary-inner">
                <h5 className='watch'>WATCH VIDEO</h5>
                <h1 className='extraordinary-heading'>EXTRAORDINARY</h1>
                <h3 className='extraordinary-video-heading'>MEDICINE</h3>
                <div className='video-wrapper'>
                <iframe class="wp-video-popup-video is-hosted is-landscape is-resizable" src="" data-wp-video-popup-url="https://youtube.com/embed/YlUKcNNmywk?autoplay=1" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="autoplay" style={{height: "0px"}}> </iframe>  
              <figure className='extraordinary-figure'>
                <img src='images/play-icon.png' alt='play-icon'/>
                </figure>
                
                </div>
               </div>
             </div>
           </div>   */}
           <div className='content'>

<div className='md:max-w-[470px] mx-auto py-[25px]'>
  <div className='card-extraordinary'>
    <div className="container-extraordinary">
      <div className="flex flex-wrap items-center gap-10">
       <img src='images/feature-image5.jpg' alt='feature-image3' className='img'/>
       <div className='md:text-left text-center'>
           <h3 className='extraordinary-head'>Pain management</h3>
           <div className='extraordinary-para'>
               <p>Duis variurid convallis element</p> 
               <p>exerat tincidun magna.</p>
           </div>
       </div>
       </div> 
    </div>
  </div>
</div>

<div className='md:w-[470px] mx-auto py-[25px]'>
  <div className='card-extraordinary'>
    <div className="container-extraordinary">
      <div className="flex flex-wrap items-center gap-10">
       <img src='images/feature-image6.jpg' alt='feature-image2' className='img'/>
       <div className='md:text-left text-center'>
           <h3 className='extraordinary-head'>Natural Tips</h3>
           <div className='extraordinary-para'>
               <p>Duis variurid convallis element</p> 
               <p>exerat tincidun magna.</p>
           </div>
       </div>
       </div> 
    </div>
  </div>
</div>

   <div className='md:w-[470px]  mx-auto py-[25px]'>
  <div className='card-extraordinary'>
    <div className="container-extraordinary">
      <div className="flex flex-wrap items-center gap-10">
       <img src='images/feature-image7.jpg' alt='feature-image1' className='img'/>
       <div className='md:text-left text-center'>
           <h3 className='extraordinary-head'>Care</h3>
           <div className='extraordinary-para'>
               <p>Ayurvedic Store</p> 
               <p>exerat tincidun magna.</p>
           </div>
       </div>
       </div> 
    </div>
  </div>
</div>

</div>
          </div>
        </div>
        
    </div>
  )
}
