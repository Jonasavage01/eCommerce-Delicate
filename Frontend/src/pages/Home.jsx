import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/Products';
import MiniAbout from '../components/MiniAbout';
import TestimonialItem from '../components/TestimonialItem';

const Home = () => {
    return (
        <>
            <Hero />
            <FeatureCard />
            <ProductCard />
            <MiniAbout/>
            <TestimonialItem/>

        </>
    );
};

export default Home;
