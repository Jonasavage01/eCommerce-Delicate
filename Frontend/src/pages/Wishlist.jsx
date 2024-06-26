import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Wishlist.css';

// Importando las imágenes
import strawberryImg from '../assets/images/products/img-2.png';
import lemonImg from '../assets/images/products/img-3.png';
import appleImg from '../assets/images/products/img-4.png';

import Footer from '../components/Footer'

const Wishlist = () => {
    const wishlistItems = [
        {
            id: 1,
            image: strawberryImg,
            name: 'Green Capsicum',
            price: '$14.99',
            originalPrice: '$20.99',
            inStock: true
        },
        {
            id: 2,
            image: lemonImg,
            name: 'Chinese Cabbage',
            price: '$45.00',
            inStock: true
        },
        {
            id: 3,
            image: appleImg,
            name: 'Fresh Sujapuri Mango',
            price: '$09.00',
            inStock: false
        },
    ];

    return (
        <Container className='Wishlist'>
            <h2 className="my-5 text-center page-title">My Wishlist</h2>
            <Table bordered responsive className="wishlist-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {wishlistItems.map(item => (
                        <tr key={item.id}>
                            <td className="d-flex align-items-center">
                                <img src={item.image} alt={item.name} className="wishlist-img" />
                                {item.name}
                            </td>
                            <td>
                                <span className="text-danger">{item.price}</span>
                                {item.originalPrice && (
                                    <span className="text-muted original-price ms-2">{item.originalPrice}</span>
                                )}
                            </td>
                            <td>
                                <span className={`badge ${item.inStock ? 'bg-success' : 'bg-danger'}`}>
                                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </td>
                            <td className="text-center">
                                {item.inStock ? (
                                    <Button variant="success" className="btn-sm">Add to Cart</Button>
                                ) : (
                                    <Button variant="light" className="btn-sm" disabled>Add to Cart</Button>
                                )}
                                <Button variant="light" className="btn-sm ms-2">
                                    <FontAwesomeIcon icon={faTimes} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="text-center my-4">
                <span>Share:</span>
                <a href="#" className="mx-2">
                    <FontAwesomeIcon icon={faFacebook} size="2x" className="text-primary" />
                </a>
                <a href="#" className="mx-2">
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="text-info" />
                </a>
                <a href="#" className="mx-2">
                    <FontAwesomeIcon icon={faPinterest} size="2x" className="text-danger" />
                </a>
                <a href="#" className="mx-2">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="text-warning" />
                </a>
            </div>
        </Container>
    );
};

export default Wishlist;
