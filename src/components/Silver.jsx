import React from 'react';
import {products} from '../data'
const Silver = ({ silverImage = {} }) => {
  return (
    <div
      className="col-6 col-md-4 col-lg-4 scroll-image-content d-flex flex-column gap-4 mt-4 px-2"
    >

    
      <div className="image-container position-relative d-flex justify-content-center align-items-center">
        <img src={silverImage.pic} alt="Main" className="main-image img-fluid" />
        <img src={silverImage.hoverImage} alt="Hover" className="hover-image img-fluid position-absolute" />
        <button className="add-to-cart-btn add-cart btn btn-primary">Add Cart</button>
        <div
          className="position-absolute d-flex justify-content-center align-items-center rounded-circle"
          style={{
            top: '10px',
            right: '15px',
            width: '25px',
            height: '25px',
            backgroundColor: 'white',
          }}
        >
          <i className="fa-regular fa-heart"></i>
        </div>
      </div>
      <div className="d-flex flex-column  ml-2">
      <h5 style={{ fontSize: "16px", margin: 0 }}>{silverImage.title}</h5>
        <h5 className="mb-0" style={{ fontSize: '16px' }}>{silverImage.name}</h5>
        <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>{silverImage.price}</p>
        <div className="silver-button d-flex justify-content-center align-items-center">92.5 Silver</div>
      </div>
    </div>
  );
};

export default Silver;