import React from 'react';
// import Header from '../../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner1 from '../../../images/banner-1.jpg'
import Banner2 from '../../../images/banner-2.jpg'
import Banner3 from '../../../images/banner-3.jpg'

// Import Swiper styles
import 'swiper/css';
import Header from '../Header/Header';

const Banner = () => {
    return (
        <section className="banner-section  text-white">


            {/* <Header></Header> */}



            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                autoplay={true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >

                <SwiperSlide> <div className="item c" style={{ background: `url(${Banner2})  center / cover` }}>
                    <div className="container">


                        <div className="row">
                            <div className="col-md-7 ">
                                <div className="banner-single container ">
                                    <h5 className="banner_subtitle">our team are here to help</h5>
                                    <h2 className="banner-title">Malcolm Parnham since 2002</h2>
                                    <p className="banner__para">Are you a homeowner with an ever-growing to-do list of projects
                                        around the house? Do you
                                        require expert contractors to help with your </p>
                                    <div className="custom__btn">
                                        <a href="contact.html" className=" ">Start Project</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className="item c" style={{ background: `url(${Banner1})  center / cover` }}>
                    <div className="container">


                        <div className="row">
                            <div className="col-md-7 ">
                                <div className="banner-single container ">
                                    <h5 className="banner_subtitle">our team are here to help</h5>
                                    <h2 className="banner-title">Malcolm Parnham since 2002</h2>
                                    <p className="banner__para">Are you a homeowner with an ever-growing to-do list of projects
                                        around the house? Do you
                                        require expert contractors to help with your </p>
                                    <div className="custom__btn">
                                        <a href="contact.html" className=" ">Start Project</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className="item c" style={{ background: `url(${Banner3})  center / cover` }}>
                    <div className="container">


                        <div className="row">
                            <div className="col-md-7 ">
                                <div className="banner-single container ">
                                    <h5 className="banner_subtitle">our team are here to help</h5>
                                    <h2 className="banner-title">Malcolm Parnham since 2002</h2>
                                    <p className="banner__para">Are you a homeowner with an ever-growing to-do list of projects
                                        around the house? Do you
                                        require expert contractors to help with your </p>
                                    <div className="custom__btn">
                                        <a href="contact.html" className=" ">Start Project</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>


            </Swiper>

        </section>
    );
};

export default Banner;