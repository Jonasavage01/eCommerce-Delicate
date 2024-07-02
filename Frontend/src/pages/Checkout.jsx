import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Checkout.css';
import { Link } from 'react-router-dom';
import strawberryImg from '../assets/images/products/img-2.png';
import lemonImg from '../assets/images/products/img-3.png';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    email: '',
    country: '',
    state: '',
    zip: '',
    phone: '',
    shipDifferent: false,
    notes: '',
    paymentMethod: '',
  });
  const [cartItems] = useState([
    { id: 1, name: 'Green Capsicum', price: 14.00, quantity: 5, image: strawberryImg },
    { id: 2, name: 'Red Capsicum', price: 14.00, quantity: 1, image: lemonImg },
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePaymentChange = (method) => {
    setFormData({ ...formData, paymentMethod: method });
  };

  return (
    <div className="container my-3">
      <h2 className="mb-4 page-title text-center">Checkout</h2>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <BillingInfo formData={formData} handleInputChange={handleInputChange} />
          <AdditionalInfo formData={formData} handleInputChange={handleInputChange} />
        </div>
        <div className="col-lg-4 col-md-12">
          <OrderSummary cartItems={cartItems} total={total} formData={formData} handlePaymentChange={handlePaymentChange} />
        </div>
      </div>
    </div>
  );
};

const BillingInfo = ({ formData, handleInputChange }) => (
  <>
    <h5>Billing Information</h5>
    <div className="form-group">
      <input type="text" name="firstName" className="form-control" placeholder="Your first name" onChange={handleInputChange} value={formData.firstName} />
      <input type="text" name="lastName" className="form-control mt-2" placeholder="Your last name" onChange={handleInputChange} value={formData.lastName} />
      <input type="text" name="company" className="form-control mt-2" placeholder="Company name (optional)" onChange={handleInputChange} value={formData.company} />
      <input type="text" name="address" className="form-control mt-2" placeholder="Street Address" onChange={handleInputChange} value={formData.address} />
      <input type="email" name="email" className="form-control mt-2" placeholder="Email" onChange={handleInputChange} value={formData.email} />
      <select name="country" className="form-control mt-2" onChange={handleInputChange} value={formData.country}>
        <option value="">Country / Region</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        {/* Add more countries here */}
      </select>
      <input type="text" name="state" className="form-control mt-2" placeholder="State" onChange={handleInputChange} value={formData.state} />
      <input type="text" name="zip" className="form-control mt-2" placeholder="Zip Code" onChange={handleInputChange} value={formData.zip} />
      <input type="text" name="phone" className="form-control mt-2" placeholder="Phone number" onChange={handleInputChange} value={formData.phone} />
      <div className="form-check mt-2">
        <input className="form-check-input" type="checkbox" name="shipDifferent" id="shipDifferent" onChange={handleInputChange} checked={formData.shipDifferent} />
        <label className="form-check-label" htmlFor="shipDifferent">Ship to a different address</label>
      </div>
    </div>
  </>
);

const AdditionalInfo = ({ formData, handleInputChange }) => (
  <>
    <h5 className="mt-4">Additional Info</h5>
    <div className="form-group">
      <textarea className="form-control" rows="3" name="notes" placeholder="Notes about your order, e.g. special notes for delivery" onChange={handleInputChange} value={formData.notes}></textarea>
    </div>
  </>
);

const OrderSummary = ({ cartItems, total, formData, handlePaymentChange }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Order Summary</h5>
      {cartItems.map(item => (
        <div className="d-flex justify-content-between" key={item.id}>
          <div>
            <img src={item.image} alt={item.name} className="product-img" />
            {item.name} x{item.quantity}
          </div>
          <div>${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      ))}
      <hr />
      <p className="card-text">Subtotal: ${total.toFixed(2)}</p>
      <p className="card-text">Shipping: Free</p>
      <h5 className="card-text">Total: ${total.toFixed(2)}</h5>

      <h5 className="mt-4">Payment Method</h5>
      <div className="payment-methods">
        <button
          className={`btn ${formData.paymentMethod === 'credit' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => handlePaymentChange('credit')}
        >
          <i className="fa fa-credit-card"></i> Add Credit/Debit Card
        </button>
        <p className="text-center my-2">OR</p>
        <button
          className={`btn ${formData.paymentMethod === 'paypal' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => handlePaymentChange('paypal')}
        >
          <i className="fa fa-paypal"></i> PayPal
        </button>
      </div>
      <div className="accepted-cards mt-2">
        <p>WE ACCEPT:</p>
        <img src="visa.png" alt="Visa" />
        <img src="mastercard.png" alt="MasterCard" />
        <img src="paypal.png" alt="PayPal" />
        <img src="amex.png" alt="American Express" />
        <img src="visa-electron.png" alt="Visa Electron" />
      </div>
      <Link to="/OrderConfirmation" state={{ orderDetails: { ...formData, items: cartItems, total } }}>
        <button className="btn btn-success w-100 mt-3">Confirm Order</button>
      </Link>
      <button className="btn btn-secondary w-100 mt-2">Save for later</button>
    </div>
  </div>
);

export default Checkout;
