import React from 'react'
import SideBar from '../components/SideBar'
import Filter from '../components/Filter'
import Silver from '../components/Silver'
import {products} from '../data'


const Necklaces = () => {
  return (
    <div className='box'>

        <div>
          <div className="overlay">
      <div className="top-heading d-flex justify-content-start align-items-center gap-2 mt-4 x">
        <i className="fa-solid fa-house" style={{ color: '#c2b5b5' }}></i>
        <span style={{ color: 'hsl(0, 0%, 0%)' }}>&gt;</span>
        <span>Necklaces</span>
      </div>
      <div className="heading">
        <h1 className="text-title">Necklaces</h1>
      </div>
      <div className="info" style={{ color: 'hsl(0, 0%, 0%)' }}>
        <p>Designer Necklace Sets</p>
      </div>
         </div>
    </div>

        <Filter/>
    
    <div className="main-content-necklace d-flex mt-2 gap-4" > 
          <SideBar/>

          {/* <div className="cards-section">
      <div className="row" style={{ marginTop: '40px' }}>
        {products.map(product => (
          <Silver key={product.id} product={product} />
        ))}
      </div>
        </div> */}

     

      <div className="row row-card d-flex justify-content-center algin-items-center" >
      {Array.from({ length: 60 }).map((_, index) => (
        <Silver key={index} silverImage={products[index % products.length]} />
      ))}
    </div>


  </div>


    </div>
  )
}

export default Necklaces