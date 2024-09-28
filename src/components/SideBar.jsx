import React, { useState } from "react";
import '../Css/Slider.css'

const FilterComponent = () => {
 const colors = [
    'rgb(201, 20, 237)', 'rgb(255, 0, 8)', 'brown', 'rgb(0, 255, 106)', 'rgb(222, 235, 175)', 'green',
    'gray', 'rgb(36, 0, 128)', 'rgb(12, 165, 230)', 'rgb(0, 0, 0)', 'rgba(0, 94, 255, 0.333)',
    'rgba(242, 70, 13, 0.902)', 'yellow', 'rgb(235, 175, 231)', 'rgb(128, 0, 11)', 'rgb(242, 5, 171)',
    'rgb(20, 198, 222)', 'rgb(81, 255, 0)', '#ff8000', 'rgb(13, 63, 215)', 'rgb(222, 235, 175)', 
    'rgb(36, 0, 128)', 'rgb(12, 165, 230)', 'rgb(36, 0, 128)', 'rgb(12, 165, 230)'
  ];


  // Split the colors array into groups of 9
  const rows = [];
  for (let i = 0; i < colors.length; i += 7) {
    rows.push(colors.slice(i, i + 7));
  }

  const [minValue, setMinValue] = useState(0);  // State for the minimum value
  const [maxValue, setMaxValue] = useState(68000);  // State for the maximum value
  const maxPrice = 68000;  // Max price constant

  // Function to handle the change in the minimum range input
  const handleMinRangeChange = (e) => {
    const value = e.target.value;
    setMinValue(Math.round(maxPrice * (value / 100)));  // Update min value based on range input
  };

  // // Function to handle the change in the maximum range input
  // const handleMaxRangeChange = (e) => {
  //   const value = e.target.value;
  //   setMaxValue(Math.round(maxPrice * (value / 100)));  // Update max value based on range input
  // };
  return (
    <div className="form-details d-flex flex-column gap-4 mt-4" style={{maxWidth:'250px'}}>

      {/* Out of Stock Toggle */}
      <div className="d-flex justify-content-between align-items-center">
        <span>Out of Stock</span>
        <div className="show-hide d-flex justify-content-center align-items-center gap-2">
          <div id="showBtn" className="show d-flex justify-content-center align-items-center">Show</div>
          <div id="hideBtn" className="hide d-flex justify-content-center align-items-center">Hide</div>
        </div>
      </div>

      {/* Price Slider */}
      {/* <div>
        <div className="price d-flex justify-content-between align-items-center">
          <span>Price</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down chevron-icon">
              <title>Down</title>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <div className="input-rupee d-flex justify-content-between align-items-center">
          <div className="input-value">₹0</div>
          <div className="input-value">₹68000</div>
        </div>

        <div id="slider-distance">
          <div>
            <div className="inverse-left" style={{ width: '70%' }}></div>
            <div className="inverse-right" style={{ width: '70%' }}></div>
            <div className="range" style={{ left: '30%', right: '40%' }}></div>
            <span className="thumb" style={{ left: '30%' }}></span>
            <span className="thumb" style={{ left: '60%' }}></span>
          </div>
          <input type="range" value="30" max="100" min="0" step="1" onInput={handleRangeChange} />
          <input type="range" value="60" max="100" min="0" step="1" onInput={handleRangeChange} />
        </div>
        
      </div> */}
      <div>
      {/* Price Header */}
      <div className="price d-flex justify-content-between align-items-center">
        <span>Price</span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down chevron-icon"
          >
            <title>Down</title>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      {/* Price Inputs */}
      <div className="input-rupee d-flex justify-content-between align-items-center">
        <div className="input-value">₹{minValue}</div>
        <div className="input-value">₹{maxValue}</div>
      </div>

      {/* Price Slider */}
      <div id="slider-distance" slider>
        <div>
          <div inverse-left style={{ width: '70%' }}></div>
          <div inverse-right style={{ width: '70%' }}></div>
          <div range style={{ left: '30%', right: '40%' }}></div>
          <span className="thumb" style={{ left: '30%' }}></span>
          <span className="thumb" style={{ left: '60%' }}></span>
        </div>

        {/* Range Inputs */}
        <input
          type="range"
          value={(minValue / maxPrice) * 100}
          onInput={handleMinRangeChange}
          style={{width:'100%'}}
          className="mt-4"
        />
      </div>
    </div>

      {/* Colors */}
      <div>
        <div className="price d-flex justify-content-between align-items-center">
          <span>Colors</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
              <title>Down</title>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <div className="color-container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="color-box1 d-flex justify-content-start align-items-center gap-3">
          {row.map((color, colorIndex) => (
            <div key={colorIndex} className="color-red" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      ))}
        </div>


      </div>

      {/* Product Type */}
      <div>
        <div className="price d-flex justify-content-between align-items-center">
          <span>Product Type</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
              <title>Down</title>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <div className="check-options d-flex flex-column gap-2">
          {[...Array(16)].map((_, index) => (
            <div key={index} className="label1 d-flex justify-content-between align-items-center">
              <label className="d-flex justify-content-start align-items-center gap-2">
                <input type="checkbox" style={{ width: '20px', height: '20px' }} />
                <span style={{ fontSize: '16px' }}>Antique Chain</span>
              </label>
              <span style={{ fontSize: '16px' }}>63</span>
            </div>
          ))}
        </div>
      </div>

      {/* Polish */}
      <div>
        <div className="price d-flex justify-content-between align-items-center">
          <span>Polish</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
              <title>Down</title>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <div className="color-box1 d-flex justify-content-between align-items-center">
          {['rgb(20, 198, 222)', 'rgb(81, 255, 0)', 'rgb(36, 0, 128)', 'rgb(12, 165, 230)', 'rgb(215, 13, 158)', '#ff8000', 'rgb(222, 235, 175)'].map((color, index) => (
            <div key={index} className="color-red" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <div className="price d-flex justify-content-between align-items-center">
          <span>Material</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
              <title>Down</title>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <div className="d-flex flex-column gap-2">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="label1 d-flex justify-content-between align-items-center">
              <label className="d-flex justify-content-start align-items-center gap-2">
                <input type="checkbox" style={{ width: '20px', height: '20px' }} />
                <span style={{ fontSize: '16px' }}>Antique Chain</span>
              </label>
              <span style={{ fontSize: '16px' }}>63</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
