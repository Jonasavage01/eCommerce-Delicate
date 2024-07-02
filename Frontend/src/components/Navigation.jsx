// Navigation.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/User.css';

const Navigation = () => {
  return (
    <div className="user-navigation p-4">
      <ul className="list-unstyled">
        <li className="mb-3"><a href="#"><i className="fas fa-tachometer-alt me-2"></i> Dashboard</a></li>
        <li className="mb-3"><a href="#"><i className="fas fa-history me-2"></i> Order History</a></li>
        <li className="mb-3"><a href="#"><i className="fas fa-heart me-2"></i> Wishlist</a></li>
        <li className="mb-3"><a href="#"><i className="fas fa-shopping-cart me-2"></i> Shopping Cart</a></li>
        <li className="mb-3"><a href="#"><i className="fas fa-cog me-2"></i> Settings</a></li>
        <li><a href="#"><i className="fas fa-sign-out-alt me-2"></i> Log-out</a></li>
      </ul>
    </div>
  );
};

export default Navigation;
