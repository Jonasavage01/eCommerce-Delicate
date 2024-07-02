import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/User.css';

const Navigation = () => {
  return (
    <div className="user-navigation p-3">
      <ul className="list-unstyled">
        <li className="mb-3"><a href="#">Dashboard</a></li>
        <li className="mb-3"><a href="#">Order History</a></li>
        <li className="mb-3"><a href="#">Wishlist</a></li>
        <li className="mb-3"><a href="#">Shopping Cart</a></li>
        <li className="mb-3"><a href="#">Settings</a></li>
        <li><a href="#">Log-out</a></li>
      </ul>
    </div>
  );
};

export default Navigation;
