import React from 'react';
import Header from '../../components/frontEnd/masterLayout/Header';
import HeroSection from '../../components/frontEnd/heroSection/HeroSection';
import AboutSection from '../../components/frontEnd/aboutSection/AboutSection';

const HomePage = () => {
    return (
        <>
        <Header/>
        <main>
            <HeroSection/>
            <AboutSection/>
        </main>

            
        </>
    );
};

export default HomePage;