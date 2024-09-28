
import React, { useState } from "react";
import { products } from '../data';
import Silver from '../components/Silver';
import {reviewsbuynow} from '../data';
import CommentList from '../pages/CommentList';
import { comment } from "../data";
import Review from '../molecule/Review';
import { useLocation } from 'react-router-dom';

  const BuyNow = ({ }) => {
  const location = useLocation();
  const { image } = location.state || {};

  const [itemQuantity, setItemQuantity] = useState(1);
  const [showDescription, setShowDescription] = useState(false);

  const increaseItemQuantity = () => setItemQuantity((prev) => prev + 1);
  const decreaseItemQuantity = () => setItemQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <div className="container-buynow">

      <div>
      <div className="top-heading d-flex justify-content-start align-items-center gap-2 mt-2">
        <i className="fa-solid fa-house" style={{ color: "#c2b5b5" }}></i>
        <span style={{ color: "#c2b5b5" }}>&gt;</span>
        <span>Necklaces</span>
        <span style={{ color: "#c2b5b5" }}>&gt;</span>
        <span>Antique Necklace 139137</span>
      </div>
      <div className="image-details-field d-flex gap-5 mt-4">
        <div className="all-images">
          <img src={image} alt="" width="706px" height="706px" />
          <div className="d-flex justify-content-between align-items-center mt-2">
            <img src={image} alt="" width="132px" height="132px" />
            <img src={image} alt="" width="132px" height="132px" />
            <img src={image} alt="" width="132px" height="132px" />
            <img src={image} alt="" width="132px" height="132px" />
            <img src={image} alt="" width="132px" height="132px" />
          </div>
        </div>

        <div className="all-content d-flex flex-column gap-3">
          <div className="rating-star d-flex align-items-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.76589 1.04645L8.93122 3.37306C9.09012 3.69693 9.51388 4.00759 9.87142 4.06708L11.9836 4.41739C13.3343 4.64212 13.6521 5.62035 12.6788 6.58537L11.0367 8.22457C10.7586 8.50218 10.6064 9.03756 10.6924 9.42092L11.1625 11.4501C11.5333 13.0563 10.6792 13.6776 9.25565 12.8381L7.27593 11.6682C6.91839 11.4567 6.32911 11.4567 5.96494 11.6682L3.98522 12.8381C2.5683 13.6776 1.70755 13.0496 2.07833 11.4501L2.54843 9.42092C2.63451 9.03756 2.48222 8.50218 2.20413 8.22457L0.56209 6.58537C-0.404597 5.62035 -0.0934026 4.64212 1.25731 4.41739L3.36945 4.06708C3.72038 4.00759 4.14413 3.69693 4.30304 3.37306L5.46836 1.04645C6.10399 -0.216003 7.13688 -0.216003 7.76589 1.04645Z"
                fill="#EDB61A"
                fillOpacity="0.7"
              ></path>
            </svg>
            <span>4.7</span>
          </div>

          <h1 style={{ fontSize: "29px" }}>Antique Necklace 139137</h1>
          <div className="d-flex flex-column">
            <span style={{ fontSize: "10px" }}>MRP</span>
            <span style={{ fontSize: "23px" }}>₹16,500</span>
            <span style={{ fontSize: "10px", color: "#777777" }}>(Incl. of all taxes)</span>
          </div>

          <div className="d-flex">
            <div className="hurry d-flex justify-content-center align-items-center gap-1">
              <i className="fa-solid fa-clock"></i>
              <span style={{ fontSize: "14px" }}>Hurry, Only 10 left</span>
            </div>
            <div className="hurry d-flex justify-content-center align-items-center gap-1 m-0">
              <i className="fa-solid fa-truck"></i>
              <span style={{ fontSize: "14px" }}>Free Delivery</span>
            </div>
          </div>

          <div className="color">
            <span style={{ fontSize: "14px", margin: "0px 0px 15px", color: "#454545", fontWeight: "bold" }}>Stone Color: Red</span>
            <div className="d-flex gap-2 align-items-center justify-content-start">
              <div className="red-circle rounded-circle"></div>
              <div className="red-green rounded-circle"></div>
            </div>
          </div>

          <div className="color">
            <span style={{ fontSize: "14px", margin: "0px 0px 15px", color: "#454545" }}>Polish: color</span>
            <div className="d-flex gap-2">
              <div className="golden-circle rounded-circle"></div>
            </div>
          </div>

          <div className="d-flex gap-2">
            <div className="count d-flex justify-content-around align-items-center">
              <div
                className="black-circle rounded-circle d-flex justify-content-around align-items-center"
                style={{ fontSize: "14px", color: "white" }}
                onClick={decreaseItemQuantity}
              >
                -
              </div>
              <div style={{ fontSize: "25px" }}>{itemQuantity}</div>
              <div
                className="black-circle rounded-circle d-flex justify-content-around align-items-center"
                style={{ fontSize: "14px", color: "white" }}
                onClick={increaseItemQuantity}
              >
                +
              </div>
            </div>
            <div className="Cart">
              <div style={{ color: "rgb(15, 66, 163)", fontSize: "18px", width: "100%", height: "100%" }} className="d-flex justify-content-center align-items-center">
                Go to Cart
              </div>
            </div>
          </div>

          <div className="mt-2">
            <span>Delivery & Shipping</span>
            <div className="position-relative">
              <input type="text" placeholder="Enter Your PinCode" className="checkPin" />
              <span className="position-absolute" style={{ right: "20px", top: "14px" }}>
                Check
              </span>
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-between align-items-center px-4">
              <span style={{ fontSize: "18px", color: "#454545" }}>Product Description</span>
              <i
                id="toggle-icon"
                className={`fa-solid fa-${showDescription ? "minus" : "plus"}`}
                style={{ cursor: "pointer" }}
                onClick={() => setShowDescription((prev) => !prev)}
              ></i>
            </div>
            {showDescription && (
              <div id="content" className="content">
                <h5>Ruby Antique Necklace Set Embellished with stones</h5>
                <p>
                  This grand necklace set comes with an opera-style short necklace and stud earrings that have an antique
                  aura. This magnificent ornament set is intricately embellished with intense ruby red stones set in exquisite
                  floral motifs. Do this exotic jewellery set justice by pairing it with an equally stunning Paithani or
                  Kanjeevaram saree.
                </p>
              </div>
            )}
          </div>

          <div className="heart-icon rounded-circle d-flex justify-content-center align-items-center position-relative">
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
        <hr />
      </div>
      </div>

      <div className="feature-card row d-flex justify-content-center align-items-center mt-4 gap-3 p-0 m-0">
      <h1 className='feature-title-buynow m-0'>Shop Similar Styles</h1>
      <div className="d-flex justify-content-center align-items-center gap-3" >
        {products.map((d, index) => (
          <Silver key={index} silverImage={d} />
        ))}
      </div>

    </div>

    <div className="feature-card row d-flex justify-content-center align-items-center mt-4 gap-3 p-0 m-0">
      <h1 className='feature-title-buynow '>Recent View </h1>
      <div className="d-flex justify-content-center align-items-center gap-3" >
        {products.map((d, index) => (
          <Silver key={index} silverImage={d} />
        ))}
      </div>
    </div>


            {/* reviewsbuynow  */}
      <div>
    <div className="d-flex flex-column justify-content-center align-items-center flex-column gap-2" style={{marginTop:"47px"}}>
      <h3 style={{ fontSize: '21px' }}>Customer reviews</h3>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ gap: '30px' }}>
        <div>
          <div className="d-flex  justify-content-center align-items-center gap-1">
            <div className="star">
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.76589 1.04645L8.93122 3.37306C9.09012 3.69693 9.51388 4.00759 9.87142 4.06708L11.9836 4.41739C13.3343 4.64212 13.6521 5.62035 12.6788 6.58537L11.0367 8.22457C10.7586 8.50218 10.6064 9.03756 10.6924 9.42092L11.1625 11.4501C11.5333 13.0563 10.6792 13.6776 9.25565 12.8381L7.27593 11.6682C6.91839 11.4567 6.32911 11.4567 5.96494 11.6682L3.98522 12.8381C2.5683 13.6776 1.70755 13.0496 2.07833 11.4501L2.54843 9.42092C2.63451 9.03756 2.48222 8.50218 2.20413 8.22457L0.56209 6.58537C-0.404597 5.62035 -0.0934026 4.64212 1.25731 4.41739L3.36945 4.06708C3.72038 4.00759 4.14413 3.69693 4.30304 3.37306L5.46836 1.04645C6.10399 -0.216003 7.13688 -0.216003 7.76589 1.04645Z"
                    fill="#EDB61A"
                    fillOpacity="0.7"
                  ></path>
                </svg>
              ))}
            </div>
            <a href="#" style={{ fontSize: '14px', color: 'black', marginTop: '6px' }}>
              {reviewsbuynow[0].rating} out of 5
            </a>
          </div>
          <span style={{ fontSize: '14px' }}>Based on {reviewsbuynow[0].totalreviewsbuynow} reviews</span>
        </div>
        <div className="review d-flex flex-column justify-content-center align-items-center">

          <Review/>
        </div>
      </div>
    </div>

      <div className="line-buy"></div>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2 mt-3">
        <span>Customer photos & videos</span>
        <div className="d-flex justify-content-center align-items-center gap-1">
          {reviewsbuynow[0].photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Customer photo ${index + 1}`}
              height="80px"
              width="80px"
              style={{ padding: '4px' }}
            />
          ))}
          <a href="#">See More</a>
        </div>
       </div>
      <div className="line-buy"></div>
      <div className="select-option position-relative">
                <select style={{paddingLeft: "-50px" ,
                  marginLeft: "-50px",
                  fontSize: "17px"}}>
                    <option value="#">Most Recent</option>
                    <option value="#">Highest Rating</option>
                    <option value="#">Lowest Rating</option>
                    <option value="#">Only Pictures</option>
                    <option value="#">Details</option>
                </select>
            </div>
      <div className="line-buy"></div>
        {
            comment.map((D)=>{
              return <CommentList data={D} key={D.id}/>
            })
        }


     </div>
    </div>
  );
};

export default BuyNow;
