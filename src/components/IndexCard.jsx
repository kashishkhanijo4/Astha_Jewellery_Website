import React from 'react';
import { Link } from 'react-router-dom';

const IndexCard = ({ data }) => {
  let base64Image = '';
  const arrayBufferToBase64 = (buffer) => {
    const binary = [];
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i++) {
      binary.push(String.fromCharCode(bytes[i]));
    }
    return window.btoa(binary.join(''));
  };

  if (data.images && data.images.length > 0 && data.images[0].data.data.length > 0) {
    const base64String = arrayBufferToBase64(data.images[0].data.data);
    base64Image = `data:${data.images[0].contentType};base64,${base64String}`;
  } else {
    base64Image = 'placeholder-image-url'; 
  }

  return (
    <div className="card-image">
      <img src={base64Image} alt="Card" />
      <div className="overlay d-flex gap-1">
        <Link 
          to={`/BuyNow`} 
          state={{ image: base64Image, name: data.name, price: data.price }} 
        >
          <span className="btn buy-now" style={{ backgroundColor: 'rgb(15,66,163)', color: 'white' }}>
            Buy Now
          </span>
        </Link>
        <Link to={`/BuyNow`}><span className='icon-buyNow btn' style={{ backgroundColor: 'rgb(15,66,163)', color: 'white' }}><i class="fa-solid fa-cart-shopping"></i></span></Link>
        {/* &nbsp; &nbsp; */}
        <span className="btn add-cart add-cart-demo" style={{ backgroundColor: 'rgb(15,66,163)', color: 'white', position: 'relative', top: '3px' }}>
          Add Cart
        </span>
      </div>
    </div>
  );
};

export default IndexCard;
