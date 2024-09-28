import React from 'react'
import SideBar from '../components/SideBar'
import Filter from '../components/Filter'
import Silver from '../components/Silver'
import {products} from '../data'


const Elegant92 = () => {
  return (
    <div className='box'>
<div>
          <div className="overlay">
      <div className="top-heading d-flex justify-content-start align-items-center gap-2 mt-4 x">
        <i className="fa-solid fa-house" style={{ color: '#c2b5b5' }}></i>
        <span style={{ color: 'hsl(0, 0%, 0%)' }}>&gt;</span>
        <span>92.5 Silver</span>
      </div>
      <div className="heading">
        <h1 className="text-title">92.5 Silver Jewellery</h1>
      </div>
      <div className="info" style={{ color: 'hsl(0, 0%, 0%)' }}>
      <p>Elegant 92.5 Silver Jewellery</p>

      </div>
         </div>
    </div>
        <Filter/>
    
    <div className="main-content-necklace d-flex mt-2 gap-4" > 
          <SideBar/>

     
     

      <div className="row row-card d-flex justify-content-center algin-items-center" >
      {Array.from({ length: 60 }).map((_, index) => (
        <Silver key={index} silverImage={products[index % products.length]} />
      ))}
    </div>


  </div>


    </div>
  )
}

export default Elegant92;