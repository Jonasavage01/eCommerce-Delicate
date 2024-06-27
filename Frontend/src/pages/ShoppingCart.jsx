import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ShoppingCart.css';
import strawberryImg from '../assets/images/products/img-2.png';
import lemonImg from '../assets/images/products/img-3.png';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Green Capsicum', price: 14.00, quantity: 5, image: strawberryImg },
    { id: 2, name: 'Red Capsicum', price: 14.00, quantity: 1, image: lemonImg },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container my-5 page-content">
      <h2 className="mb-4 page-title text-center">My Shopping Cart</h2>
      <div className="row">
        <div className="col-lg-8 col-md-12 mb-4">
          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="product-img" />
                    {item.name}
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="input-group">
                      <button className="btn btn-outline-secondary" type="button" onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                      <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                      <button className="btn btn-outline-secondary" type="button" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn btn-outline-danger" onClick={() => removeItem(item.id)}>×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/shop" className="btn btn-secondary">Return to shop</Link>
          <button className="btn btn-primary ms-3">Update Cart</button>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cart Total</h5>
              <p className="card-text">Subtotal: ${total.toFixed(2)}</p>
              <p className="card-text">Shipping: Free</p>
              <h5 className="card-text">Total: ${total.toFixed(2)}</h5>
              <Link to="/checkout" className="btn btn-success w-100">Proceed to checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
