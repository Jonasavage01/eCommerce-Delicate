import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Navbar.css';

const Navbar = () => {
    const [searchModalVisible, setSearchModalVisible] = useState(false);
    const [navbarCollapsed, setNavbarCollapsed] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    const toggleSearchModal = () => {
        setSearchModalVisible(!searchModalVisible);
    };

    const toggleNavbar = () => {
        setNavbarCollapsed(!navbarCollapsed);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Header */}
            <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${navbarCollapsed ? '' : 'menu-open'} ${scrolled ? 'scrolled' : ''}`}>
                <div className="container d-flex justify-content-between">
                    <a className="navbar-brand" href="index.html">
                        <h2 className='logo'>Delicaté</h2>
                    </a>
                    <div className="d-flex align-items-center">
                        <div className="navbar-icons d-lg-none order-1 d-flex align-items-center">
                            <a className="nav-link position-relative" href="#">
                                <FontAwesomeIcon icon={faHeart} />
                                <span className="icon-badge">0</span>
                            </a>
                            <a className="nav-link position-relative" href="cart.html">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="icon-badge">0</span>
                            </a>
                        </div>
                        <button className="navbar-toggler order-2" type="button" onClick={toggleNavbar}>
                            <FontAwesomeIcon icon={navbarCollapsed ? faBars : faTimes} />
                        </button>
                    </div>
                    <div className={`collapse navbar-collapse ${navbarCollapsed ? '' : 'show'}`}>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="news.html">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-icons d-none d-lg-flex align-items-center">
                        <a className="nav-link position-relative" href="#">
                            <FontAwesomeIcon icon={faHeart} />
                            <span className="icon-badge">0</span>
                        </a>
                        <a className="nav-link position-relative" href="cart.html">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="icon-badge">0</span>
                        </a>
                    </div>
                </div>
            </nav>
            {/* End Header */}

            {/* Hamburger Menu */}
            {!navbarCollapsed && (
                <div className="hamburger-menu">
                    <span className="close-btn" onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <ul className="hamburger-menu-list">
                        <li className="hamburger-menu-item">
                            <a className="hamburger-menu-link" href="#">Home</a>
                        </li>
                        <li className="hamburger-menu-item">
                            <a className="hamburger-menu-link" href="about.html">About</a>
                        </li>
                        <li className="hamburger-menu-item">
                            <a className="hamburger-menu-link" href="#">Pages</a>
                        </li>
                        <li className="hamburger-menu-item">
                            <a className="hamburger-menu-link" href="news.html">News</a>
                        </li>
                        <li className="hamburger-menu-item">
                            <a className="hamburger-menu-link" href="contact.html">Contact</a>
                        </li>
                        <li className="hamburger-menu-item">
                            <a className="hamburger-menu-link" href="shop.html">Shop</a>
                        </li>
                    </ul>
                </div>
            )}
            {/* End Hamburger Menu */}

           
            
          
        </>
    );
};

export default Navbar;
