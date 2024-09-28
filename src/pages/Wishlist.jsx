import React from 'react';
import { Link } from 'react-router-dom';
const WishlistLogin = () => {
  return (
    
    <div className="wishlist-login">
      <div className="container d-flex justify-content-center align-items-center">
        <Link to="/login">Please login to save, share & manage your Wishlist</Link>
      </div>

      <div className="addproducts px-5">
        <p>Please add products in your wishlist to see them here.</p>
      </div>
    </div>
  );
};

export default WishlistLogin;

