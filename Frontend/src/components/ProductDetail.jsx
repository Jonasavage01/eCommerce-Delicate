import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactImageMagnify from 'react-image-magnify';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ProductDetail.css';


const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    return (
        <Container className="product-detail">
            <Row className="mt-4">
                <Col md={6}>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Product',
                            isFluidWidth: true,
                            src: '../assets/images/products/img-1.png'
                        },
                        largeImage: {
                            src: '../assets/images/products/img-1.png',
                            width: 1200,
                            height: 1800
                        },
                        enlargedImageContainerDimensions: {
                            width: '200%',
                            height: '200%'
                        },
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false,
                    }} />
                </Col>
                <Col md={6}>
                    <h1>Chinese Cabbage</h1>
                    <p className="text-success">In Stock</p>
                    <div className="product-price">
                        <span className="original-price">$48.00</span>
                        <span className="discounted-price">$17.28</span>
                        <span className="discount-percentage">64% Off</span>
                    </div>
                    <p className="product-description">
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam nibh diam, blandit vel consequat nec, ultrices et ipsum.
                    </p>
                    <InputGroup className="quantity-selector">
                        <Button variant="outline-secondary" onClick={() => handleQuantityChange(-1)}>-</Button>
                        <FormControl
                            aria-label="Quantity"
                            value={quantity}
                            readOnly
                            className="text-center"
                        />
                        <Button variant="outline-secondary" onClick={() => handleQuantityChange(1)}>+</Button>
                    </InputGroup>
                    <Button variant="success" className="add-to-cart-button">Add to Cart</Button>
                    <Button variant="outline-secondary" className="wishlist-button">
                        <FontAwesomeIcon icon={faHeart} />
                    </Button>
                    <div className="share-item">
                        <span>Share item: </span>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faPinterest} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Tabs>
                        <TabList>
                            <Tab>Descriptions</Tab>
                            <Tab>Reviews</Tab>
                            <Tab>Additional Information</Tab>
                        </TabList>

                        <TabPanel>
                            <p>Here is the product description...</p>
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
