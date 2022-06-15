import React from 'react';
import about from '../../../images/about.jpg'

const About = () => {
    return (
        <section className="about__section pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-6">
                        <div className="about-drone-three pb-30">
                            <div className="about-drone-three-media"><img src={about} className="img-fluid" /></div>
                            <div className="about-drone-three-info"><span>HD 4K</span><strong>since 2002</strong></div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 ps-3 ">
                        <div className="about-section-one-right pb-30">
                            {/* <!-- TITLE START--> */}
                            <div className="left wt-small-separator-outer">


                                <div className="theme-heading hidden-xs text-uppercase">
                                    <div>About Us</div>
                                    <h3><span className="heading-shape">About Us</span></h3>
                                </div>


                                <h2 className="section__title">Welcome to <span>Malcolm <br /> Parnham</span> Photography</h2>
                                <p>My aim is to make quality, professional photography accessible to everyone, so I offer
                                    tailored packages to suit all budgets and needs.

                                    I love photographing people and increasingly specialise in this area. As well as
                                    shooting families and groups of friends, I take individual portraits of people of all
                                    ages including babies, children and adults in black and white or colour and in many
                                    different styles.
                                </p>


                            </div>
                            {/* <!-- TITLE END--> */}

                            <ul className="site-list-style-one icon-style">
                                <li><img src="images/people.png" alt="" /> <span> Work to the desires of the individual
                                    customer</span> </li>
                                <li><img src="images/camera.png" alt="" /> <span> We have portable studio equipment that can
                                    be
                                    set up where it is desirable</span> </li>
                                <li><img src="images/think-different.png" alt="" /> <span> Coming up with unique ideas and
                                    techniques.</span> </li>
                            </ul>


                            <div className="custom__btn">
                                <a href="contact.html" className=" ">Start Project</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;