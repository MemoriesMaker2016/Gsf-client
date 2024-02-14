import React from 'react';
import ReactWOW from 'react-wow';
import { HashLink as Link } from 'react-router-hash-link'

const AboutV2 = () => {
    return (
        <>
            <section className="about-section-two">
                <div className="anim-icons full-width">
                    <span className="icon icon-circle-blue wow fadeIn"></span>
                    <span className="icon icon-dots wow fadeInleft"></span>
                    <ReactWOW animation='zoomIn'>
                        <span className="icon icon-circle-1 wow "></span>
                    </ReactWOW>
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="title">ABOUT FORUM</span>
                                    <h2>Welcome to the <br />Global Scholars Forum 2024</h2>
                                    <div className="text">The Global Scholars Forum, also known as GSF, is a platform for the Universities and Educational Institutions to come together and showcase their programs, courses, and campus facilities to prospective students. It is organized to provide the students with an opportunity to explore different educational options, gather various information about Universities, and interact directly with the representatives. GSF provides an extensive approach for the students to take that valuable step in the college decision-making process, helping them gather comprehensive information and make more informed choices about their higher education journey.</div>
                                </div>
                                <div className="row">
                                    <div className="about-block col-lg-6 col-md-6 col-sm-6">
                                        <div className="inner-box">
                                            <h4><span className="icon fa fa-map-marker-alt"></span> Where</h4>
                                            <div className="text" style={{paddingLeft:'40px'}}>India</div>
                                        </div>
                                    </div>
                                    <div className="about-block col-lg-6 col-md-6 col-sm-6">
                                        <div className="inner-box">
                                            <h4><span className="icon fa fa-clock"></span> When</h4>
                                            <div className="text">April 28, 2024 Onwards</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="btn-box"><Link to={void (0)} className="theme-btn btn-style-three"><span className="btn-title">Register Now</span></Link></div> */}
                            </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="image-box">
                                <figure className="image wow fadeIn"><img src="../images/resource/students_in_class.jpg" alt="image" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV2;