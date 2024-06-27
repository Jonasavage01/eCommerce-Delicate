import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Zoom from 'react-medium-image-zoom';
import LazyLoad from 'react-lazyload';
import 'react-medium-image-zoom/dist/styles.css';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ProductDetail.css';

import strawberryImg from '../assets/images/products/img-1.png';
import berryImg from '../assets/images/products/berry.jpg';
import lemonImg from '../assets/images/products/lemon.jpg';
import appleImg from '../assets/images/products/apple.jpg';
import bananaImg from '../assets/images/products/avena.png';
import orangeImg from '../assets/images/products/orange.png';
import grapesImg from '../assets/images/products/grapes.jpg';
import kiwiImg from '../assets/images/products/kiwi.jpg';

import Footer from '../components/Footer'; 

const products = [
  { id: 1, title: 'Strawberry', price: '85$', imgSrc: strawberryImg, description: 'Strawberry description...' },
  { id: 2, title: 'Berry', price: '70$', imgSrc: berryImg, description: 'Berry description...' },
  { id: 3, title: 'Lemon', price: '35$', imgSrc: lemonImg, description: 'Lemon description...' },
  { id: 4, title: 'Apple', price: '50$', imgSrc: appleImg, description: 'Apple description...' },
  { id: 5, title: 'Banana', price: '25$', imgSrc: bananaImg, description: 'Banana description...' },
  { id: 6, title: 'Orange', price: '40$', imgSrc: orangeImg, description: 'Orange description...' },
  { id: 7, title: 'Grapes', price: '65$', imgSrc: grapesImg, description: 'Grapes description...' },
  { id: 8, title: 'Kiwi', price: '90$', imgSrc: kiwiImg, description: 'Kiwi description...' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <Container className="product-detail mt-9">
      <Row className="mt-4 align-items-center">
        <Col md={6}>
          <Zoom>
            <LazyLoad height={400} offset={100} once>
              <img src={product.imgSrc} alt={product.title} className="product-image" />
            </LazyLoad>
          </Zoom>
        </Col>
        <Col md={6} className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="text-success stock-status">In Stock</p>
          <div className="product-price">
            <span className="original-price">$48.00</span>
            <span className="discounted-price">{product.price}</span>
            <span className="discount-percentage">64% Off</span>
          </div>
          <p className="product-description">{product.description}</p>
          <InputGroup className="quantity-selector">
            <Button variant="outline-secondary">-</Button>
            <FormControl aria-label="Quantity" value="1" readOnly className="text-center" />
            <Button variant="outline-secondary">+</Button>
          </InputGroup>
          <div className="action-buttons">
            <Button variant="success" className="add-to-cart-button">Add to Cart</Button>
            <Button variant="outline-secondary" className="wishlist-button">
              <FontAwesomeIcon icon={faHeart} className="wishlist-icon" />
            </Button>
          </div>
          <div className="share-item">
            <span>Share item: </span>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faPinterest} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Tabs className="product-tabs">
            <TabList>
              <Tab>Descriptions</Tab>
              <Tab>Reviews</Tab>
              <Tab>Additional Information</Tab>
            </TabList>
            <TabPanel>
              <p>{product.description}</p>
            </TabPanel>
            <TabPanel>
              <p>Here are the product reviews...</p>
            </TabPanel>
            <TabPanel>
              <p>Here is the additional information...</p>
            </TabPanel>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
