import React from 'react';
import {reviews} from '../data';
const StarRating = ({ stars }) => (
  <ul style={{ display: 'inline-flex', margin: 'unset', padding: 'unset', textIndent: 'unset', listStyleType: 'none', gap: '2px' }}>
    {Array.from({ length: stars }, (_, i) => (
      <li key={i}><i className="fa-solid fa-star"></i></li>
    ))}
  </ul>
);

const ReviewCard = ({ name, date, rating, comment, imgSrc, productName }) => (
  <div className="renuka-review">
    <div className="title d-flex align-items-center gap-3 ">
      <span className="titlespan">{name}</span>
      <i className="fa-solid fa-circle-check"></i>
    </div>
    <div className="time">{date}</div>
    <div className="star-text">
      <div className="stars">
        <StarRating stars={rating} />
      </div>
      <div className="para">
        <p>{comment}</p>
      </div>
    </div>
    <hr />
    <div className="img-review d-flex gap-3">
      <img className="img-re" src={imgSrc} alt={productName} />
      <div className="name">{productName}</div>
    </div>
  </div>
);

const HappyCustomers = () => {
 

  return (
    <div className="main-section">
      <div className="product-section">
        <h3 style={{ textAlign: 'center', padding: '60px' }}>Happy Customers</h3>
      </div>

      <div className="ratings-box">
        <div className="stars" style={{marginLeft:" 24px"}}>
          <StarRating stars={4} />
        </div>
      </div>

      {reviews.map((review, index) => (
        <div className="comment-box1" key={index}>
          <div className="box-review d-flex">
            
            {/* Repeat the component if needed */}
            <ReviewCard
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              imgSrc={review.imgSrc}
              productName={review.productName}
            />

            <ReviewCard
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              imgSrc={review.imgSrc}
              productName={review.productName}
            />
          </div>

          <div className="box-review d-flex">
            
            {/* Repeat the component if needed */}
            <ReviewCard
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              imgSrc={review.imgSrc}
              productName={review.productName}
            />

            <ReviewCard
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              imgSrc={review.imgSrc}
              productName={review.productName}
            />
          </div>

          <div className="box-review d-flex">
            
            {/* Repeat the component if needed */}
            <ReviewCard
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              imgSrc={review.imgSrc}
              productName={review.productName}
            />

            <ReviewCard
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              imgSrc={review.imgSrc}
              productName={review.productName}
            />
          </div>

          <div className="box-review d-flex">
            
            {/* Repeat the component if needed */}
            <ReviewCard
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              imgSrc={review.imgSrc}
              productName={review.productName}
            />

            <ReviewCard
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              imgSrc={review.imgSrc}
              productName={review.productName}
            />
          </div>

          <div className="box-review d-flex">
            
            {/* Repeat the component if needed */}
            <ReviewCard
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              imgSrc={review.imgSrc}
              productName={review.productName}
            />

            <ReviewCard
              name={review.name}
              date={review.date}
              rating={review.rating}
              comment={review.comment}
              imgSrc={review.imgSrc}
              productName={review.productName}
            />
          </div>

          
        </div>
      ))}
    </div>
  );
};

export default HappyCustomers;
