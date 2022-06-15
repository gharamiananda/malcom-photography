import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import service__bg from '../../../images/service__bg.jpg'

// Import Swiper styles
import 'swiper/css';
import Service from '../../../components/ServiceDetail';
import { Link } from 'react-router-dom';
import useDetails from '../../../hook/useDetails';
import useService from '../../../hook/useService';

const Services = () => {



    const [services] = useService();

    console.log(services);

    return (

        <section className="position-relative service__section text-white pb-90">
            <div className=" service___bg">
                <img src={service__bg} alt="" className="img-fluid" />
            </div>
            <div className="service__full__content">
                <div className="container">
                    <div className="row pb-30">
                        {/* <!-- Theme Heading --> */}
                        <div className="theme-heading text-center ">
                            <div className="text-uppercase ">Our services</div>
                            <h3><span className="heading-shape">our services</span></h3>

                        </div>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor
                            incididunt ut labore
                            et dolore magna aliqua.</p>
                        {/* <!-- Theme Heading --> */}
                    </div>


                    <div className="services theme-effet">

                        <div className="row">




                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}

                            >


                                {
                                    services.map(service => <SwiperSlide key={service._id}>


                                        <div className="sevice__box__single theme-hover">


                                            <figure>
                                                <img src={service.picture} className="img-fluid w-100" alt="" />

                                                <figcaption>
                                                    <div className="content">
                                                        <div className="service__content__box">
                                                            <span>{service.name}</span>
                                                            <h3>{service.price}</h3>
                                                            <p>{service.desc}</p>
                                                            <div className="custom__btn">
                                                                <Link to={`service-detail/${service._id}`}

                                                                >Start Project</Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>

                                    </SwiperSlide>
                                    )
                                }


                            </Swiper>







                        </div>
                    </div>
                </div>
            </div>

        </section>


    );
};

export default Services;