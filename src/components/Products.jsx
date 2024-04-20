import React from 'react'

export default function Products() {
  return (
    <div className=' overflow-hidden'>
        <div className='relative'>
          <div className='product-cover'>
            <div className='md:w-[1170px] mx-auto z-[1]'>
            <div className='text-center'>
            <h2 className='smallhead'>PRODUCTS</h2>
            <h1 className='mainhead'>
                <p>We Are Here To Give You The</p>
                <p>Best Ayurvedic Products</p>
            </h1>
           </div>
           <div className="commerse">
            <ul className='products grid md:grid-cols-4 grid-cols-1 gap-5'>
              <li className='product mb-[30px] relative text-center'>
                <a href='/control-sugar'className='loop-product' >
                 <img src='images/product-img1.jpg' alt='product-img1' height={195}/>
                 <h2 className='loop-product-title'>Ayurvedic Controls Blood Sugar</h2>
                 <div>$22.00</div>
                </a>
                <a className='add-to-cart-button'>Add to cart</a>
              </li>
              <li className='product mb-[30px] relative text-center'>
                <a href='/control-sugar'className='loop-product' >
                 <img src='images/product-img2.jpg' height={195} alt='product-img2'/>
                 <h2 className='loop-product-title'>Power of Triphala and Wheatgrass</h2>
                 <div>$21.00</div>
                </a>
                <a className='add-to-cart-button'>Add to cart</a>
              </li>
              <li className='product mb-[30px] relative text-center'>
                <a href='/control-sugar'className='loop-product' >
                 <img src='images/product-img3.jpg' height={195} alt='product-img3'/>
                 <h2 className='loop-product-title'>Ayurvedic Controls Blood Pressure</h2>
                 <div>$26.00</div>
                </a>
                <a className='add-to-cart-button'>Add to cart</a>
              </li>
              <li className='product mb-[30px] relative text-center'>
                <a href='/control-sugar'className='loop-product' >
                 <img src='images/product-img4.jpg' height={195} alt='product-img4'/>
                 <h2 className='loop-product-title'>Relieves Constipation & Improves Digestion</h2>
                 <div>$18.00</div>
                </a>
                <a className='add-to-cart-button'>Add to cart</a>
              </li>
              <li className='product mb-[30px] relative text-center'>
                <a href='/control-sugar'className='loop-product' >
                 <img src='images/product-img5.jpg' height={195} alt='product-img5'/>
                 <h2 className='loop-product-title'>Ayurvedic Capsules for Muscle Gain</h2>
                 <div>$17.00</div>
                </a>
                <a className='add-to-cart-button'>Add to cart</a>
              </li>
              <li className='product mb-[30px] relative text-center'>
                <a href='/control-sugar'className='loop-product' >
                 <img src='images/product-img6.jpg' height={195} alt='product-img6'/>
                 <h2 className='loop-product-title'>Ayurvedic Immunity Booster for Kids</h2>
                 <div>$13.00</div>
                </a>
                <a className='add-to-cart-button'>Add to cart</a>
              </li>
              <li className='product mb-[30px] relative text-center'>
                <a href='/control-sugar'className='loop-product' >
                 <img src='images/product-img7.jpg' height={195} alt='product-img7'/>
                 <h2 className='loop-product-title'>Herbal Green Tea with Lemon Extract</h2>
                 <div>$10.00</div>
                </a>
                <a className='add-to-cart-button'>Add to cart</a>
              </li>
              <li className='product mb-[30px] relative text-center'>
                <a href='/control-sugar'className='loop-product' >
                 <img src='images/product-img8.jpg' height={195} alt='product-img8'/>
                 <h2 className='loop-product-title'>Ayurvedic Herbal Healthy Green Tea</h2>
                 <div>$7.00</div>
                </a>
                <a className='add-to-cart-button'>Add to cart</a>
              </li>
            </ul>
           </div>
            </div>
          </div>
        </div>
    </div>
  )
}

