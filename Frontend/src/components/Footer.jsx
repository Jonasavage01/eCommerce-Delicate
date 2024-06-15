import React from 'react';
import '../assets/css/Footer.css';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
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
          <p>&copy; 2024 Your Brand. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
