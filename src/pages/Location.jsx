import React from 'react';
import bengaluruImage from '../assets/Bengaluru_new.png'; // Import image
import stores from "../assets/Store-Locator.webp";

const StoreLocator = () => {
  const popularCities = Array(9).fill({
    name: 'Bengalaru',
    stores: 23,
    image: bengaluruImage // Use imported image
  });

  const otherCities = Array(9).fill({
    name: 'Andhra Pardesh',
    cities: 9
  });

  return (
    <div className="store-locator">
      <div className="image-wrapper">
        <img src={stores} alt="Store Locator" />
      </div>

      <div className="home-city">
        <div className="stores px-3">
          <div className="bread d-flex gap-2 px-2">
            <a href="/">Home
              <svg className="breadcrumbs_svg" width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.697266 0.943359L6.00539 6.25149L0.697266 11.5596" stroke="black" strokeWidth="1.32703" strokeLinecap="round"></path>
              </svg>
            </a>
            <p> Stores</p>
          </div>

          <div className="popular-city">Popular Cities</div> 
        </div>

        <div className="city-location d-flex gap-4">
          {popularCities.map((city, index) => (
            <div className="city-list" style={{ textAlign: 'center' }} key={index}>
              <div className="city-box">
                <img className="beng-img" src={city.image} alt={city.name} />
              </div>
              <div className="content" style={{ fontWeight: 700, textAlign: 'center' }}>
                <div className="name">{city.name}</div>
                <div className="pc-store">{city.stores} Stores</div>
              </div>
            </div>
          ))}
        </div>

        <div className="other-cities">
          <div className="city-heading">Other Cities</div>
          {otherCities.map((city, index) => (
            <div className="city-box" key={index}>
              <div className="other-city-inner">
                <div className="other-city-box">
                  <div className="text">
                    <span>{city.name}</span>
                    <svg className="plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="12" height="12" fill="white"></rect>
                      <rect x="5" width="2" height="12" rx="1" fill="#454545" fillOpacity="0.6"></rect>
                      <rect x="12" y="5" width="2" height="12" rx="1" transform="rotate(90 12 5)" fill="#454545" fillOpacity="0.6"></rect>
                    </svg>
                  </div>
                  <div className="city_count">{city.cities} Cities</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
