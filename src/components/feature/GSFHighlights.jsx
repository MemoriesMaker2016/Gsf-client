import React from 'react'
// import featureV3Data from '../../jsonData/feature/featureV3Data.json'
// import SingleFeatureV3 from './SingleFeatureV3';
import { IoIosInformationCircle, IoIosPaper } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";
import { FaAddressBook } from "react-icons/fa6";
import { AiFillInteraction } from "react-icons/ai";
import { MdAppRegistration } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const GSFHighlights = () => {
  return (
    <>
    <div className="sec-title text-center">
        <span className="title">GLOBAL SCHOLARS FORUM</span> <h2>Highlights</h2>
    </div>
    <section className="features-section-three no-pd-top">
        <div className="auto-container">
            <div className="row">
                <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-box">
                        <div className="icon-box"><span className='icon'><IoIosInformationCircle /></span></div>
                        <h4>One-Stop Information Hub</h4>
                             <div className="link-box">
                            <Link to={void (0)} className="theme-btn">
                                <span className='fa fa-angle-right'></span>
                            </Link>
                            </div>
                    </div>
                </div>
                <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-box">
                        <div className="icon-box"><span className='icon'><AiFillInteraction /></span></div>
                        <h4>Face-to-face Interaction</h4>
                             <div className="link-box">
                            <Link to={void (0)} className="theme-btn">
                                <span className='fa fa-angle-right'></span>
                            </Link>
                            </div>
                    </div>
                </div>
                <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-box">
                        <div className="icon-box"><span className='icon'><SiGooglescholar /></span></div>
                        <h4>Information on Scholarships</h4>
                             <div className="link-box">
                            <Link to={void (0)} className="theme-btn">
                                <span className='fa fa-angle-right'></span>
                            </Link>
                            </div>
                    </div>
                </div>
                <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-box">
                        <div className="icon-box"><span className='icon'><MdAppRegistration /></span></div>
                        <h4>No Registration Fee</h4>
                             <div className="link-box">
                            <Link to={void (0)} className="theme-btn">
                                <span className='fa fa-angle-right'></span>
                            </Link>
                            </div>
                    </div>
                </div>
                <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-box">
                        <div className="icon-box"><span className='icon'><FaAddressBook /></span></div>
                        <h4>Visa and application Guidance</h4>
                             <div className="link-box">
                            <Link to={void (0)} className="theme-btn">
                                <span className='fa fa-angle-right'></span>
                            </Link>
                            </div>
                    </div>
                </div>
                <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-box">
                        <div className="icon-box"><span className='icon'><RiCustomerService2Line /></span></div>
                        <h4>No Service Charges</h4>
                             <div className="link-box">
                            <Link to={void (0)} className="theme-btn">
                                <span className='fa fa-angle-right'></span>
                            </Link>
                            </div>
                    </div>
                    </div>
                {/* {featureV3Data.map(feature =>
                    <div className="feature-block-three col-lg-6 col-md-12 col-sm-12" key={feature.id}>
                        <SingleFeatureV3 feature={feature} />
                    </div>
                )} */}
            <div/>
            </div>
        </div>
    </section>
    </>
  )
}

export default GSFHighlights;