import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import WorkingProcess from '../components/Workprocess';


const Home = () => {
    return (
        <>
            <Hero2 />
            <Intro />
            <WorkingProcess />
            <Services />
            <Footer />
        </>

    )
}

export default Home;

