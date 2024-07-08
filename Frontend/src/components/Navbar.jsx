import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
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

    // Actualiza la ruta para que coincida con la estructura real de tu aplicación
    const pagesWithBlackBg = [
        '/product/',
        '/ShoppingCart',
        '/contact',
        '/about',
        '/blog/',
        '/UserPage',
        '/OrderHistoryPage',
        '/orderdetails/', 
        '/settings'
      ];
    const isPageWithBlackBg = pagesWithBlackBg.some((page) => location.pathname.startsWith(page));

    console.log('Current Path:', location.pathname); // Añadido para depuración

    // No mostrar Navbar en la página de checkout
    if (location.pathname === '/Checkout' ) {
        return null;
    }

    return (
        <>
            {/* Header */}
            <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${navbarCollapsed ? '' : 'menu-open'} ${scrolled && !isPageWithBlackBg ? 'scrolled' : ''} ${isPageWithBlackBg ? 'black-bg' : ''}`}>
                <div className="container d-flex justify-content-between">
                    <Link className="navbar-brand" to="/">
                        <h2 className='logo'>Delicaté</h2>
                    </Link>
                    <div className="d-flex align-items-center">
                        <div className="navbar-icons d-lg-none order-1 d-flex align-items-center">
                            <Link className="nav-link position-relative" to="/ShoppingCart">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>
                            <Link className="nav-link position-relative" to="/UserPage">
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </div>
                        <button className="navbar-toggler order-2" type="button" onClick={toggleNavbar}>
                            <FontAwesomeIcon icon={navbarCollapsed ? faBars : faTimes} />
                        </button>
                    </div>
                    <div className={`collapse navbar-collapse ${navbarCollapsed ? '' : 'show'}`}>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-icons d-none d-lg-flex align-items-center">
                        <Link className="nav-link position-relative" to="/ShoppingCart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                        <Link className="nav-link position-relative" to="/UserPage">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
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
                            <Link className="hamburger-menu-link" to="/">Home</Link>
                        </li>
                        <li className="hamburger-menu-item">
                            <Link className="hamburger-menu-link" to="/about">About</Link>
                        </li>
                        <li className="hamburger-menu-item">
                            <Link className="hamburger-menu-link" to="/shop">Shop</Link>
                        </li>
                        <li className="hamburger-menu-item">
                            <Link className="hamburger-menu-link" to="/news">News</Link>
                        </li>
                        <li className="hamburger-menu-item">
                            <Link className="hamburger-menu-link" to="/contact">Contact</Link>
                        </li>
                        <li className="hamburger-menu-item">
                            <Link className="hamburger-menu-link" to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            )}
            {/* End Hamburger Menu */}
        </>
    );
};

export default Navbar;
