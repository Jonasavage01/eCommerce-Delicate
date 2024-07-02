import React, { lazy, Suspense, useMemo, useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import Feature from '../components/Feature';
import FAQ from '../components/FAQ';
import Information from '../components/Information';
import Services from '../components/Services';

const TestimonialItem = lazy(() => import('../components/TestimonialItem'));
const InstagramSection = lazy(() => import('../components/Instagram'));
const Footer = lazy(() => import('../components/Footer'));

// Memoize the components that are unlikely to change to prevent unnecessary re-renders
const MemoizedAboutHero = React.memo(AboutHero);
const MemoizedFeature = React.memo(Feature);
const MemoizedFAQ = React.memo(FAQ);
const MemoizedInformation = React.memo(Information);
const MemoizedServices = React.memo(Services);

const About = () => {
    // Using useMemo to memoize any expensive calculations or data transformations
    const memoizedValue = useMemo(() => {
        // Assume some expensive calculation here
        return "Some memoized value";
    }, []);

    // Using useEffect for side effects
    useEffect(() => {
        // Assume some side effect here
        console.log("Component mounted or updated");
    }, []);

    return (
        <div>
            <MemoizedAboutHero />
            <MemoizedFeature />
            <MemoizedInformation />
            <MemoizedServices />
            <MemoizedFAQ />
            <Suspense fallback={<div>Loading testimonials...</div>}>
                <TestimonialItem />
            </Suspense>
            <Suspense fallback={<div>Loading Instagram section...</div>}>
                <InstagramSection />
            </Suspense>
            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default About;
