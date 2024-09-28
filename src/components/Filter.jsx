import React from 'react'
import sort from "../assets/Sort_By.svg";
const Filter = () => {
  return (
    <div>

    <div className="utility d-flex align-items-center mt-2">
            <div className="filter position-relative">
                <div className="istbox d-flex justify-content-center align-items-center gap-2" style={{maxWidth:'250px'}}>
                    <i className="fa-solid fa-filter" style={{ width: '20px', height: '20px' }}></i>
                    <span className="filter" style={{ fontSize: '17px' }}>Filter</span>
                    <span style={{ fontSize: '17px' }}>0</span>
                    <span style={{ fontSize: '17px' }}>Applied</span>
                </div>
                <div className="icon-arrow position-absolute">&gt;</div>
            </div>

            <div className="product d-flex justify-content-start align-items-center">
                <span style={{ fontSize: '17px', paddingLeft: '36px' }}>2638 Products found</span>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3" style={{ marginLeft: '280px', paddingLeft: '26px' }}>
                <div className="sort-by">
                    <div className="bar-right d-flex align-items-center gap-2">
                        <img loading="lazy" src={sort} alt="Sort By Icon" />
                        <span style={{ fontSize: '16px' }}>Sort by</span>
                    </div>
                </div>

                <div className="select-wrapper">
                    <select name="sortOptions" className="btn-list">
                        <option value="best-sellings">Best Sellings</option>
                        <option value="price-low-high">Price, Low to High</option>
                        <option value="price-high-low">Price, High to Low</option>
                    </select>
                </div>
            </div>
        </div>    
    

    </div>
  )
}

export default Filter;