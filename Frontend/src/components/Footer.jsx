import React from 'react';
import '../assets/css/Footer.css';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Agregar los iconos a la biblioteca
library.add(faInstagram, faWhatsapp);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
          <h2 className='Logo'>Delicaté</h2>
          </div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-newsletter">
            <h4>Subscribe to our Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
         
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Delicaté. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
