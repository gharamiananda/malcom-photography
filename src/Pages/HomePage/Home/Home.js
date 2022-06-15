import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Services from '../Services/Services';
// import Footer from '../Footer/Footer ';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Gallery></Gallery>
            <Footer></Footer>
        </>
    );
};

export default Home;