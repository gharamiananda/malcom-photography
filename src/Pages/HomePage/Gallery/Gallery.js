import React from 'react';
import img1 from '../../../images/IMG.jpg'
import img2 from '../../../images/IMG1.jpg'
import img3 from '../../../images/IMG2.jpg'
import img4 from '../../../images/IMG3.jpg'
import img5 from '../../../images/IMG4.jpg'
import img6 from '../../../images/IMG5.jpg'

const Gallery = () => {
    return (
        <section className="gallery__section pt-120 pb-90">
            <div className="container">
                <div className="row pb-30">
                    {/* <!-- Theme Heading --> */}
                    <div className="theme-heading text-center ">
                        <div className="text-uppercase "> GALLERY</div>
                        <h3><span className="heading-shape"> PORTFOLIO</span></h3>


                    </div>
                    <p className="text-center">What Some People Say About Us....</p>
                    {/* <!-- Theme Heading --> */}
                </div>

                <div className=" g-4 project__grid row ">

                    <div className="col-md-6 col-lg-4">
                        <div className=" project-grid-item photography web gallery__item__two">
                            <div className="project-item">
                                <img className="img-fluid" src={img1} alt="" />
                                <a className="image-popup" data-fancybox="gallery" href={img1}><i
                                    className="fa fa-arrow-right"></i></a>
                                <div className="project-item-inner">
                                    <h4> Fridge repair service</h4>
                                </div>
                            </div>
                        </div>
                        <div className="project-grid-item brand app gallery__item__one ">
                            <div className="project-item">
                                <img className="img-fluid" src={img2} alt="" />
                                <a className="image-popup" data-fancybox="gallery" href={img2}><i
                                    className="fa fa-arrow-right"></i></a>
                                <div className="project-item-inner">
                                    <h4> Fridge repair service</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className=" project-grid-item web brand gallery__item__three">
                            <div className="project-item">
                                <img className="img-fluid" src={img3} alt="" />
                                <a className="image-popup" data-fancybox="gallery" href={img3}><i
                                    className="fa fa-arrow-right"></i></a>
                                <div className="project-item-inner">
                                    <h4> Fridge repair service</h4>
                                </div>
                            </div>
                        </div>
                        <div className=" project-grid-item photography brand gallery__item__five">
                            <div className="project-item">
                                <img className="img-fluid" src={img4} alt="" />
                                <a className="image-popup" data-fancybox="gallery" href={img4}><i
                                    className="fa fa-arrow-right"></i></a>
                                <div className="project-item-inner">
                                    <h4> Fridge repair service</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-4 gy-lg-4 gy-0">

                        <div className="row">
                            <div className="col-lg-12 col-md-6">
                                <div className=" project-grid-item brand web gallery__item__six">
                                    <div className="project-item ">
                                        <img className="img-fluid" src={img5} alt="" />
                                        <a className="image-popup" data-fancybox="gallery" href={img5}><i
                                            className="fa fa-arrow-right"></i></a>
                                        <div className="project-item-inner">
                                            <h4> Fridge repair service</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="project-grid-item app photography gallery__item__four">
                                    <div className="project-item">
                                        <img className="img-fluid" src={img6} alt="" />
                                        <a className="image-popup" data-fancybox="gallery" href={img6}><i
                                            className="fa fa-arrow-right"></i></a>
                                        <div className="project-item-inner">
                                            <h4> Fridge repair service</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;