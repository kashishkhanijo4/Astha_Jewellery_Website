import React from 'react'
import SideBar from '../components/SideBar'
import Filter from '../components/Filter'
import Silver from '../components/Silver'
import {products} from '../data'


const CelebCorner = () => {
  return (
    <div className='box'>
         <div class="overlay">
                <h4 style={{margin:"20px" , textAlign:"center" , fontWeight:" 600px"}}>Celebrities Dazzle in Astha Jewellery</h4>
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

export default CelebCorner;