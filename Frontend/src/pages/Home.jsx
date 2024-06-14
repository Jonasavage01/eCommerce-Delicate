import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/Products';
import MiniAbout from '../components/MiniAbout';
import TestimonialItem from '../components/TestimonialItem';
import NewsSection from '../components/NewsSection';

const Home = () => {
    return (
        <>
            <Hero />
            <FeatureCard />
            <ProductCard />
            <MiniAbout/>
            <TestimonialItem/>
            <NewsSection/>

        </>
    );
};

export default Home;
