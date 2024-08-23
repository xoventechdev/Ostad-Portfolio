import React from 'react';
import Header from '../../components/frontEnd/masterLayout/Header';
import HeroSection from '../../components/frontEnd/heroSection/HeroSection';

const HomePage = () => {
    return (
        <>
        <Header/>
        <main class="site-content" id="content">
            <HeroSection/>
</main>
            
        </>
    );
};

export default HomePage;