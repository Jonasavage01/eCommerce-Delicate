import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Navbar.css';

const Navbar = () => {
    const [navbarCollapsed, setNavbarCollapsed] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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

    const pagesWithBlackBg = [
        '/product/',
        '/ShoppingCart',
        '/contact',
        '/about',
        '/blog/',
        '/UserPage',
        '/OrderHistoryPage',
        '/orderdetails/', 
        '/settings',
        '/OrderConfirmation',
        '/Register',
        '/login'
    ];
    const isPageWithBlackBg = pagesWithBlackBg.some((page) => location.pathname.startsWith(page));

    if (location.pathname === '/Checkout', '/Register' , '/login') {
        return null;
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${navbarCollapsed ? '' : 'menu-open'} ${scrolled && !isPageWithBlackBg ? 'scrolled' : ''} ${isPageWithBlackBg ? 'black-bg' : ''}`}>
            <div className="container d-flex justify-content-between">
                <NavLink className="navbar-brand" to="/">
                    <h2 className='logo'>Delicaté</h2>
                </NavLink>
                <div className="d-flex align-items-center">
                    <div className="navbar-icons d-lg-none order-1 d-flex align-items-center">
                        <NavLink className="nav-link position-relative" to="/ShoppingCart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </NavLink>
                        <NavLink className="nav-link position-relative" to="/UserPage">
                            <FontAwesomeIcon icon={faUser} />
                        </NavLink>
                    </div>
                    <button className="navbar-toggler order-2" type="button" onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={navbarCollapsed ? faBars : faTimes} />
                    </button>
                </div>
                <div className={`collapse navbar-collapse ${navbarCollapsed ? '' : 'show'}`}>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shop" activeClassName="active">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog" activeClassName="active">Blog</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-icons d-none d-lg-flex align-items-center">
                    <NavLink className="nav-link position-relative" to="/ShoppingCart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </NavLink>
                    <NavLink className="nav-link position-relative" to="/UserPage">
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                </div>
            </div>
            {!navbarCollapsed && (
                <div className="hamburger-menu d-lg-none">
                    <button className="close-btn" onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <ul className="hamburger-menu-list">
                        <li className="hamburger-menu-item">
                            <NavLink className="hamburger-menu-link" to="/" onClick={toggleNavbar}>Home</NavLink>
                        </li>
                        <li className="hamburger-menu-item">
                            <NavLink className="hamburger-menu-link" to="/shop" onClick={toggleNavbar}>Shop</NavLink>
                        </li>
                        <li className="hamburger-menu-item">
                            <NavLink className="hamburger-menu-link" to="/about" onClick={toggleNavbar}>About</NavLink>
                        </li>
                        <li className="hamburger-menu-item">
                            <NavLink className="hamburger-menu-link" to="/contact" onClick={toggleNavbar}>Contact</NavLink>
                        </li>
                        <li className="hamburger-menu-item">
                            <NavLink className="hamburger-menu-link" to="/blog" onClick={toggleNavbar}>Blog</NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
