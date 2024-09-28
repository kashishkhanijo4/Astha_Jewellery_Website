import React from 'react'
import sort from "../assets/Sort_By.svg";
import IndexCard from '../components/IndexCard';
import { indexCard } from '../data';

const Collection = () => {
  return (
    <div>
           {/* <!-- main-content --> */}

                <div className="heading">
                 <h4 style={{textAlign: "center" , margin:"40px"}}>Products</h4>
                </div>

                <div className="utility d-flex align-items-center mt-2">
                    
    
                    {/* <!-- sort-by 2638 --> */}
                    <div className="product d-flex justify-content-start align-items-center">
                        <span style={{fontSize:" 17px", paddingLeft:"17px"}}>8404 Products found</span>
                    </div>
    
    
                    {/* <!-- dropdown and sort by  --> */}
    
                    <div className="d-flex justify-content-center align-items-center gap-3" style={{marginLeft:"600px", paddingLeft:"26px"}}>
                        {/* <!-- sort-by-icon  --> */}
                        <div className="sort-by">
                            <div className="bar-right d-flex align-items-center gap-2">
                                <img loading="lazy" src={sort}/>
                                <span style={{fontSize:"16px"}}>Sort by</span>
                            </div>
                        </div>


                        <div className="select-wrapper">
                            <select name="" className="btn-list">
                                <option value="">Recommended</option>
                                <option value="">Price, Low to High</option>
                                <option value="">Price, High to Low</option>
                            </select>
                        </div>
    
                    </div>

                    </div>

                    <div className="feature-card row d-flex justify-content-center align-items-center mt-4 gap-3 p-0 m-0">
        {indexCard.map((d) => (
          <div className="col-md-3 d-flex card-image mt-5" key={d.id}>
            <IndexCard data={d} />
          </div>
        ))}
      </div>


    </div>


  )
}

export default Collection;



// collection page pending