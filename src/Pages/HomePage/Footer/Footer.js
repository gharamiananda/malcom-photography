import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-section pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="brand"> <img src="images/logo-removebg-preview (1).png" className="logo img-fluid" alt="" />
                            <p>I love photographing people and increasingly specialise in this area. As well as shooting
                                families and groups of friends, I take individual portraits of people of all ages including
                                babies, children and adults in black and white or colour and in many different styles.</p>
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-1">
                        <p><b>Get in touch</b> <i className="fa-solid fa-envelope"></i> picsformer@msn.com
                            <br /> <i className="fa-solid fa-phone-volume"></i> 07776 158133
                            <br /> <i className="fa-solid fa-location-dot"></i> Malcolm Parnham
                        </p>
                    </div>
                    <div className="col-md-3">
                        <p className="mb-0"><b>Follow Us</b></p>
                        <p>You can follow us on our social media accounts for up-to-date photos.</p>
                        <ul className="footer-social-link">
                            <li><a
                                href="http://www.facebook.com/pages/Malcolm-Parnham-Photography/225564280814319"><i
                                    className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a
                                href="http://www.facebook.com/pages/Malcolm-Parnham-Photography/225564280814319"><i
                                    className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a
                                href="http://www.facebook.com/pages/Malcolm-Parnham-Photography/225564280814319"><i
                                    className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a
                                href="http://www.facebook.com/pages/Malcolm-Parnham-Photography/225564280814319"><i
                                    className="fa-brands fa-facebook-f"></i></a></li>


                        </ul>
                    </div>
                </div>
            </div>
            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="text-left">
                                <p>© 2022 All right reserved.Design by <a href="https://www.uniteldirect.co.uk/"> Unitel
                                    Direct</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-right-left">
                                <p><a href="#">Terms of use</a> <span>|</span> <a href="#">Privacy Policy</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;