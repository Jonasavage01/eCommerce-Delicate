import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/AuthContext';
import '../assets/css/Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
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
    '/login',
    '/Register'
  ];

  const pagesWithoutNavbar = ['/Checkout'];

  const isPageWithBlackBg = pagesWithBlackBg.some(page => location.pathname.startsWith(page));
  const isPageWithoutNavbar = pagesWithoutNavbar.includes(location.pathname);

  if (isPageWithoutNavbar) {
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
            <div 
              className="nav-link position-relative user-icon" 
              onMouseEnter={() => setShowDropdown(true)} 
              onMouseLeave={() => setShowDropdown(false)}
            >
              <FontAwesomeIcon icon={faUser} />
              {showDropdown && (
                <div className="dropdown-menu dropdown-menu-right show custom-dropdown">
                  {user ? (
                    <>
                      <NavLink className="dropdown-item" to="/OrderHistoryPage">
                        <i className="fas fa-history"></i> Order History
                      </NavLink>
                      <NavLink className="dropdown-item" to="/settings">
                        <i className="fas fa-cog"></i> Settings
                      </NavLink>
                      <NavLink className="dropdown-item" to="#" onClick={logout}>
                        <i className="fas fa-sign-out-alt"></i> Log out
                      </NavLink>
                    </>
                  ) : (
                    <NavLink className="dropdown-item" to="/login">
                      <i className="fas fa-sign-in-alt"></i> Login
                    </NavLink>
                  )}
                </div>
              )}
            </div>
          </div>
          <button className="navbar-toggler order-2" type="button" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={navbarCollapsed ? faBars : faTimes} />
          </button>
        </div>
        <div className={`collapse navbar-collapse ${navbarCollapsed ? '' : 'show'}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/blog">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-icons d-none d-lg-flex align-items-center">
          <NavLink className="nav-link position-relative" to="/ShoppingCart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
          <div 
            className="nav-link position-relative user-icon" 
            onMouseEnter={() => setShowDropdown(true)} 
            onMouseLeave={() => setShowDropdown(false)}
          >
            <FontAwesomeIcon icon={faUser} />
            {showDropdown && (
              <div className="dropdown-menu dropdown-menu-right show custom-dropdown">
                {user ? (
                  <>
                    <NavLink className="dropdown-item" to="/OrderHistoryPage">
                      <i className="fas fa-history"></i> Order History
                    </NavLink>
                    <NavLink className="dropdown-item" to="/settings">
                      <i className="fas fa-cog"></i> Settings
                    </NavLink>
                    <NavLink className="dropdown-item" to="#" onClick={logout}>
                      <i className="fas fa-sign-out-alt"></i> Log out
                    </NavLink>
                  </>
                ) : (
                  <NavLink className="dropdown-item" to="/login">
                    <i className="fas fa-sign-in-alt"></i> Login
                  </NavLink>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
