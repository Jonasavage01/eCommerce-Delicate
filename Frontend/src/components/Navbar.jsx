import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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
                        <img src={logo} alt="logo" className="logo"/>
                    </a>
                    <div className="d-flex">
                        <div className="navbar-icons d-lg-none order-1">
                            <a className="nav-link" href="cart.html">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                            <a className="nav-link" href="#" onClick={toggleSearchModal}>
                                <FontAwesomeIcon icon={faSearch} />
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
                                <a className="nav-link" href="about.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="news.html">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="shop.html">Shop</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-icons d-none d-lg-flex">
                        <a className="nav-link" href="cart.html">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </a>
                        <a className="nav-link" href="#" onClick={toggleSearchModal}>
                            <FontAwesomeIcon icon={faSearch} />
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

            {/* Search Modal */}
            {searchModalVisible && (
                <div className="search-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                                <span className="close-btn" onClick={toggleSearchModal}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                                <div className="search-bar">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" className="form-control" />
                                    <button type="submit" className="btn btn-primary mt-3">
                                        Search <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* End Search Modal */}
        </>
    );
};

export default Navbar;
