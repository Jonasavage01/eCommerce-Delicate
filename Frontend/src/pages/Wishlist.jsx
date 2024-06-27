import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Wishlist.css';


// Importando las imágenes
import strawberryImg from '../assets/images/products/img-2.png';
import lemonImg from '../assets/images/products/img-3.png';
import appleImg from '../assets/images/products/img-4.png';

const Wishlist = () => {
  const items = [
    { id: 1, name: 'Strawberry', price: 85, image: lemonImg },
    { id: 2, name: 'Berry', price: 70, image: appleImg },
  ];

  return (
    <Container className="wishlist-page my-5">
      <h2 className="page-title text-center">My Wishlist</h2>
      <Table bordered className="wishlist-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} className="product-img" />
                {item.name}
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <Button variant="outline-danger">
                  <FontAwesomeIcon icon={faTimes} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="text-center mt-4">
        <Link to="/cart" className="btn btn-success">Add all to cart</Link>
      </div>
      <div className="share-item text-center mt-4">
        <span>Share item: </span>
        <FontAwesomeIcon icon={faFacebook} size="2x" className="mx-2" />
        <FontAwesomeIcon icon={faTwitter} size="2x" className="mx-2" />
        <FontAwesomeIcon icon={faPinterest} size="2x" className="mx-2" />
        <FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2" />
      </div>
    </Container>
  );
};

export default Wishlist;
