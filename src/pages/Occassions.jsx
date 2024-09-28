import React from 'react'
import SideBar from '../components/SideBar'
import Filter from '../components/Filter'
// import Cards from '../components/Cards'
import Silver from '../components/Silver'
import {products} from '../data'
import occjewe from '../assets/IMG_1146.JPG';

const Occassions = () => {
  return (
    <div className='box'>
    <div>

    <div className="overlay">
      <div className="top-heading d-flex justify-content-start align-items-center gap-2 mt-4 x">
        <i className="fa-solid fa-house" style={{ color: '#c2b5b5' }}></i>
        <span style={{ color: 'hsl(0, 0%, 0%)' }}>&gt;</span>
        <span>Occassions</span>
      </div>
      <div className="heading">
        <h1 className="text-title">Occassions Jewellery</h1>
      </div>
         </div>

         
    <div className="card-jewellery" style={{msOverflowX:"hidden", paddingBottom:"20px"}}>
         {/* <!-- cards  --> */}
            <div className=" cards d-flex  py-2 " >
                
                <div className="col-md-3 card-image-occasion" style={{position: "relative"}}>
                    <img src={occjewe} alt=""/>
                   <div className="text-card" style={{textAlign:"center" , position:"absolute" , top:"62px" ,  left:"192px"}}>
                    <h6 style={{fontSize:" 2rem"}}>Jewellery</h6>
                   </div>
                </div>

                <div className="col-md-3 card-image-occasion" style={{position:" relative"}}>
                    <img src={occjewe} alt=""/>
                   <div className="text-card" style={{textAlign:"center" , position:"absolute" , top:"62px" ,  left:"192px"}}>

                    <h6 style={{fontSize:" 2rem"}}>Jewellery</h6>

                   </div>
                </div>

                <div className="col-md-3 card-image-occasion" style={{position: "relative"}}>

                    <img src={occjewe} alt=""/>
                   <div className="text-card" style={{textAlign:"center" , position:"absolute" , top:"62px" ,  left:"192px"}}>

                    <h6 style={{fontSize:" 2rem"}}>Jewellery</h6>
                   </div>
                </div>

                <div className="col-md-3 card-image-occasion" style={{position: "relative"}}>

                    <img src={occjewe} alt=""/>
                   <div className="text-card" style={{textAlign:"center" , position:"absolute" , top:"62px" ,  left:"192px"}}>

                    <h6 style={{fontSize:" 2rem"}}>Jewellery</h6>
                   </div>
                </div>
                
                
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

export default Occassions;