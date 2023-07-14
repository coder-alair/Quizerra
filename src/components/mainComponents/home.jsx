import React, { useEffect } from 'react';
import Navbar from '../subComponents/navbar';
import Heroimage from '../subComponents/heroimage';
import Features from '../subComponents/features';
import About from '../subComponents/about';
import Contactus from '../subComponents/contactus';
import Footer from '../subComponents/footer';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>

            <Navbar />
            <Heroimage />
            <Features />
            <About />
            <Contactus />
            <Footer />
        </div>
    );
};

export default Home;