import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import strawberryImg from '../assets/images/products/img-2.png';
import lemonImg from '../assets/images/products/img-3.png';

// Estilos con styled-components
const Container = styled.div`
  padding-top: 5%;
  font-family: 'Poppins-Regular', sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 4rem;
  font-size: 3rem;
  font-family: 'Pro-text', sans-serif;
  text-align: center;
  color: #333;
  font-weight: bold;
  padding-top: 10%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    overflow-x: auto;
    display: block;
  }

  th, td {
    padding: 1rem;
    border: 1px solid #ddd;
  }
`;

const ProductImg = styled.img`
  width: 60px;
  margin-right: 10px;

  @media (max-width: 1200px) {
    width: 50px;
  }
  @media (max-width: 800px) {
    width: 45px;
  }
  @media (max-width: 600px) {
    width: 40px;
  }
  @media (max-width: 400px) {
    width: 35px;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const CircleButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: #f28123;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #1a1919;
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  border: none;
  color: #f28123;
  background-color: #333;
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 1rem;

  &:hover {
    background-color: #1b1b1b;
  }

  &.danger {
    color:#f28123;
    background-color: transparent;

    &:hover {
      color: white;
      background-color: #f28123;
    }
  }

  &.outline {
    color: #f28123;
    background-color: transparent;
    border: 1px solid #f28123;

    &:hover {
      color: white;
      background-color: #f28123;
    }
  }
`;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const CardBody = styled.div`
  padding: 1rem;
  text-align: center;

  h5 {
    font-size: 1.5rem;
    font-family: 'Poppins-SemiBold', sans-serif;
    color: #333;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #555;
  }
`;

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
    <Container className="container my-5 page-content">
      <Title className="mb-4 page-title">My Shopping Cart</Title>
      <div className="row">
        <div className="col-lg-8 col-md-12 mb-4">
          <Table className="table table-bordered table-responsive">
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
                    <ProductImg src={item.image} alt={item.name} className="product-img" />
                    {item.name}
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <QuantityControl>
                      <CircleButton onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</CircleButton>
                      <input type="text" className="form-control text-center" value={item.quantity} readOnly style={{border: 'none', textAlign: 'center', width: '50px'}} />
                      <CircleButton onClick={() => updateQuantity(item.id, 1)}>+</CircleButton>
                    </QuantityControl>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button className="btn btn-outline-danger danger" onClick={() => removeItem(item.id)}>×</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link to="/shop">
            <Button className="btn btn-secondary outline">Return to shop</Button>
          </Link>
          <Button className="btn btn-primary ms-3">Update Cart</Button>
        </div>
        <div className="col-lg-4 col-md-12">
          <Card>
            <CardBody>
              <h5 className="card-title">Cart Total</h5>
              <p className="card-text">Subtotal: ${total.toFixed(2)}</p>
              <p className="card-text">Shipping: Free</p>
              <h5 className="card-text">Total: ${total.toFixed(2)}</h5>
              <Link to="/Checkout">
                <Button className="btn btn-success w-100 mb-2">Member Check Out</Button>
              </Link>
              <Link to="/guest-checkout">
                <Button className="btn btn-outline-success w-100 outline">Guest Check Out</Button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default ShoppingCart;
