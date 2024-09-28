import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import asthaLogo from '../assets/astha-web-logo.png'
import Cart from '../components/Cart';

const Header = (props) => {
    const setLogin = props.setLogin;
    const isLogin = props.isLogin;
    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };
    const toggleCart = () => {
        setIsOpen(prev => !prev);
    };
    const [isNavVisible, setIsNavVisible] = useState(false);
    

    const toggleNav = () => {
        setIsNavVisible((prev) => !prev);
    };
    return (
        <div>
            {/* information Section */}
            <div className="info-secton d-flex justify-content-between align-items-center px-5">
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <div className="info-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className="info-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="info-icon rounded-circle d-flex justify-content-center align-items-center">
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    Free Shipping Anywhere in India for orders above Rs 499
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <i className="fa-solid fa-location-dot"></i>
                    <Link to="/Location" style={{ textDecoration: 'none', color: 'white' }}>Locate Stores</Link>
                    <div className="info-section-line"></div>
                    {/* <div className="toggle-btn d-flex justify-content-center align-items-center">
                        <input type="checkbox" id="checkbox" onChange={handleToggle} checked={darkMode} />
                        <label htmlFor="checkbox" className="toggle-label">
                            <span className="toggle-ball"></span>
                        </label>
                    </div> */}
                </div>
            </div>
            {/* Nav-bar section */}
            <nav className="nav-bar px-4 d-flex justify-content-between align-items-center ">
                <Link to="/"><img src={asthaLogo} alt="logo" style={{ width: "150px", height: "65px" }} loading="lazy" className='nav-logo-image' /></Link>
                <div>
                    <div className="d-flex position-relative" style={{ gap: '15px' }}>
                        <input type="text" placeholder="Search For" className="nav-search" id="search-input" />
                        <div className="position-absolute nav-search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-4 mx-4 nav-icons">
                            <Link to="./wishlist" style={{ textDecoration: 'none', color: 'black' }}><i className="fa-regular fa-heart"></i></Link>
                            <div className="bar-icon" onClick={toggleNav}><i class="fa-solid fa-bars"></i></div>
                            <div>
                                {
                                    !isLogin &&
                                    <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}><i className="fa-regular fa-user"></i></Link>
                                }
                                {
                                    isLogin &&
                                    <Link to="/Dashboard" style={{ textDecoration: 'none', color: 'black' }} >
                                        <i class="fa-solid fa-user-check" onClick={() => setLogin(true)}></i>
                                    </Link>
                                }
                            </div>
                            {/* cart-start */}
                            <div className="icon-cart">
                                <i id="cartIcon" className="fa-solid fa-cart-shopping" onClick={toggleCart}></i>
                                <span id="cartCounter" className="cart-counter">0</span>

                                <div id="cartModal" className={`position ${isOpen ? "open" : ""}`}>
                                    <div className="cart-content">
                                        <div className="h2" style={{ fontSize: '20px', letterSpacing: '1px' }}>
                                            Cart
                                            <span>(<span id="cartCountText">0</span>)</span>
                                            <svg
                                                id="closePopup"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-x"
                                                onClick={toggleCart}
                                            >
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                            <hr style={{ border: 'none', height: '1px', backgroundColor: '#d3d3d3' }} />

                                            <Cart />
                                        </div>
                                        <div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* cart-done */}
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </nav>
            {/* nav-option */}
            <div className={`nav-option hide-option d-flex justify-content-start align-items-center px-5 gap-5`}>
                <Link to="Necklaces">Necklaces</Link>

                <Link to="Earrings" className="dropdown">Earrings</Link>
                <Link to="Bangles" className="dropdown">Bangles</Link>
                <Link to="Accessories" className="dropdown">Accessories</Link>
                <Link to="92.5Silver" className="dropdown">92.5 Silver</Link>
                <Link to="Occassions" className="dropdown">Occasions</Link>
                <Link to="Collection" className="dropdown">Collection</Link>
                <Link to="/HappyCustomers" className="dropdown">HappyCustomer</Link>
                <Link to="CelebCorner" className="dropdown">Celeb Corner</Link>
            </div>
            <div className={`Nav-responsive ${isNavVisible ? 'visible' : ''}`}>
                <div className='nav-option nav-opt d-flex justify-content-start align-items-center flex-column gap-4'>
                    <Link to="Necklaces">Necklaces</Link>
                    <Link to="Earrings" className="dropdown">Earrings</Link>
                    <Link to="Bangles" className="dropdown">Bangles</Link>
                    <Link to="Accessories" className="dropdown">Accessories</Link>
                    <Link to="92.5Silver" className="dropdown">92.5 Silver</Link>
                    <Link to="Occassions" className="dropdown">Occasions</Link>
                    <Link to="Collection" className="dropdown">Collection</Link>
                    <Link to="/HappyCustomers" className="dropdown">HappyCustomer</Link>
                    <Link to="CelebCorner" className="dropdown">Celeb Corner</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
