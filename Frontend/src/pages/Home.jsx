import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/Products';

const Home = () => {
    return (
        <>
            <Hero />
            <FeatureCard />
            <ProductCard />
        </>
    );
};

export default Home;
