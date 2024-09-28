// import React, { useState } from 'react';

// const Cart = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [useEmi, setUseEmi] = useState(false);
//   const [useGiftCard, setUseGiftCard] = useState(false);

//   const handleQuantityChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     setQuantity(value >= 1 ? value : 1);
//   };

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     setQuantity(quantity > 1 ? quantity - 1 : 1);
//   };

//   const toggleEmi = () => {
//     setUseEmi(!useEmi);
//   };

//   const toggleGiftCard = () => {
//     setUseGiftCard(!useGiftCard);
//   };

//   const handleRemoveItem = () => {
//     // Add logic to remove the item from the cart
//     console.log('Item removed');
//   };

//   return (
//     <div className="cart-container">
//       <div className="cart-box">
//         <div className="item-image">
//           <img
//             className="cart-image"
//             src="//www.kushals.com/cdn/shop/files/temple-chain-gold-silver-temple-chain-150917-37820522430620_x200.jpg?v=1710989560"
//             alt="Temple Chain Silver Temple Chain 150917"
//           />
//         </div>

//         <div className="item-info">
//           <div className="item-name">
//             <a
//               className="info-name-tag"
//               href="/products/silver-temple-back-chain-150917?variant=43137143701660"
//             >
//               Silver Temple Chain 150917
//             </a>
//             <div className="variant_option">
//               <p>Polish: Gold</p>
//             </div>
//           </div>

//           <div className="ct_cart_dis-main">
//             <p className="item-price cart-item__column cart-item__price">
//               <span className="money info-name-tag">₹ 1,590</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="counter-box d-flex justify-content-start align-items-center ">
//         <div className="item-quantity">
//           <span className="remove-item" onClick={decreaseQuantity}>
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M6 12H18"
//                 stroke="#888888"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></path>
//             </svg>
//           </span>
//           {/* <input
//             className="quantity-input qty"
//             type="number"
//             value={quantity}
//             min="1"
//             onChange={handleQuantityChange}
//           /> */}
//           <span className='value-tag'  style={{fontSize: "14px"}}>1</span>
//           <span className="quantity-plus" onClick={increaseQuantity}>
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M6 12H18"
//                 stroke="#222222"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></path>
//               <path
//                 d="M12 18L12 6"
//                 stroke="#222222"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></path>
//             </svg>
//           </span>
//         </div>
//         <button
//           className="remove-item item-cart"
//           onClick={handleRemoveItem}
//         >
//           <span className="button-content d-flex">
//             <svg viewBox="0 0 16 16" aria-hidden="true" className="icon icon-remove">
//               <path
//                 d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z"
//                 fill="currentColor"
//               ></path>
//               <path
//                 d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z"
//                 fill="currentColor"
//               ></path>
//             </svg>
//             <span className="remove-text">Remove</span>
//           </span>
//         </button>
//       </div>

//       <div className="icon-list__wrapper">
//         <div className="trust-icons__inner">
//           <div className="trust__img">
//             <img
//               className="icon-list-image"
//               src="https://www.kushals.com/cdn/shop/files/return.svg?v=172130302400"
//               alt="Free Exchange"
//             />
//           </div>
//           <div className="icon__heading">15 Days<br />Free Exchange</div>
//         </div>

//         <div className="trust-icons__inner">
//           <div className="trust__img">
//             <img
//               className="icon-list-image"
//               src="https://www.kushals.com/cdn/shop/files/Group_48099251.svg?v=172130305600"
//               alt="Free Shipping"
//             />
//           </div>
//           <div className="icon__heading">Free Shipping<br />Available</div>
//         </div>

//         <div className="trust-icons__inner">
//           <div className="trust__img">
//             <img
//               className="icon-list-image"
//               src="https://cdn.shopify.com/s/files/1/0796/1959/files/Secured_Checkout.svg?v=1721307480"
//               alt="Secured Checkout"
//             />
//           </div>
//           <div className="icon__heading">Secured<br />Checkout</div>
//         </div>
//       </div>

//       <div className="ct_snap_checkbox checkbox-cart">
//         <label className="ct_snap_lab">
//           <input
//             type="checkbox"
//             className="ct_snapmint"
//             checked={useEmi}
//             onChange={toggleEmi}
//           />
//           <span className="pay-para">
//             Buy on EMI
//           </span>
//         </label>

//         <label className="ct_snap_lab_secend">
//           <input
//             type="checkbox"
//             className="ct_via_gift_card"
//             checked={useGiftCard}
//             onChange={toggleGiftCard}
//           />
//           <span className="pay-para">
//             Pay Via Gift Card
//           </span>
//         </label>
//       </div>

//       <div className="mm-ajaxcart-button checkbox-main">
//         <div className="theme-money">
//           <div className="theme-money-text">
//             <span className="theme-money-price">₹ 1,590</span>
//           </div>
//         </div>

//         <div className="wrap-bottom">
//           <a href="/checkout" className="mm-checkout-button">Proceed to Checkout</a>
//           {useEmi && <button className="ct_snapmint_checkout">Proceed to Checkout</button>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useState } from 'react';
import image1 from '../assets/WhatsApp Image 2024-02-04 at 00.12.10_61fa4ce2.jpg'
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [useEmi, setUseEmi] = useState(false);
  const [useGiftCard, setUseGiftCard] = useState(false);
  const [isCartEmpty, setIsCartEmpty] = useState(false); // Track if the cart is empty

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const toggleEmi = () => {
    setUseEmi(!useEmi);
  };

  const toggleGiftCard = () => {
    setUseGiftCard(!useGiftCard);
  };

  const handleRemoveItem = () => {
    // Simulate item removal by setting the cart as empty
    setIsCartEmpty(true);
  };

  return (
    <div className="cart-container">
      {isCartEmpty ? ( // Check if the cart is empty
        <div className="empty-cart-message">
          <h6>Your cart is empty</h6>
        </div>
      ) : (
        <>
          <div className="cart-box">
            <div className="item-image">
              <img
                className="cart-image"
                src={image1}
                alt="Temple Chain Silver Temple Chain 150917"
              />
            </div>

            <div className="item-info">
              <div className="item-name">
                <a
                  className="info-name-tag"
                  href="/products/silver-temple-back-chain-150917?variant=43137143701660"
                >
                  Silver Temple Chain 150917
                </a>
                <div className="variant_option">
                  <p>Polish: Gold</p>
                </div>
              </div>

              <div className="ct_cart_dis-main">
                <p className="item-price cart-item__column cart-item__price">
                  <span className="money info-name-tag">₹ 1,590</span>
                </p>
              </div>
            </div>
          </div>

          <div className="counter-box d-flex justify-content-start align-items-center ">
            <div className="item-quantity">
              <span className="remove-item" onClick={decreaseQuantity}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 12H18"
                    stroke="#888888"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="value-tag" style={{ fontSize: '14px' }}>{quantity}</span>
              <span className="quantity-plus" onClick={increaseQuantity}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 12H18"
                    stroke="#222222"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 18L12 6"
                    stroke="#222222"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
            <button
              className="remove-item item-cart"
              onClick={handleRemoveItem} // Set cart as empty on remove
            >
              <span className="button-content d-flex">
                <svg viewBox="0 0 16 16" aria-hidden="true" className="icon icon-remove">
                  <path
                    d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="remove-text">Remove</span>
              </span>
            </button>
          </div>

          <div className="icon-list__wrapper">
            <div className="trust-icons__inner">
              <div className="trust__img">
                <img
                  className="icon-list-image"
                  src="https://www.kushals.com/cdn/shop/files/return.svg?v=172130302400"
                  alt="Free Exchange"
                />
              </div>
              <div className="icon__heading">15 Days<br />Free Exchange</div>
            </div>

            <div className="trust-icons__inner">
              <div className="trust__img">
                <img
                  className="icon-list-image"
                  src="https://www.kushals.com/cdn/shop/files/Group_48099251.svg?v=172130305600"
                  alt="Free Shipping"
                />
              </div>
              <div className="icon__heading">Free Shipping<br />Available</div>
            </div>

            <div className="trust-icons__inner">
              <div className="trust__img">
                <img
                  className="icon-list-image"
                  src="https://cdn.shopify.com/s/files/1/0796/1959/files/Secured_Checkout.svg?v=1721307480"
                  alt="Secured Checkout"
                />
              </div>
              <div className="icon__heading">Secured<br />Checkout</div>
            </div>
          </div>

          <div className="ct_snap_checkbox checkbox-cart">
            <label className="ct_snap_lab">
              <input
                type="checkbox"
                className="ct_snapmint"
                checked={useEmi}
                onChange={toggleEmi}
              />
              <span className="pay-para">
                Buy on EMI
              </span>
            </label>

            <label className="ct_snap_lab_secend">
              <input
                type="checkbox"
                className="ct_via_gift_card"
                checked={useGiftCard}
                onChange={toggleGiftCard}
              />
              <span className="pay-para">
                Pay Via Gift Card
              </span>
            </label>
          </div>

          <div className="mm-ajaxcart-button checkbox-main">
            <div className="theme-money">
              <div className="theme-money-text">
                <span className="theme-money-price">₹ 1,590</span>
              </div>
            </div>

            <div className="wrap-bottom">
              <a href="/checkout" className="mm-checkout-button">Proceed to Checkout</a>
              {useEmi && <button className="ct_snapmint_checkout">Proceed to Checkout</button>}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
