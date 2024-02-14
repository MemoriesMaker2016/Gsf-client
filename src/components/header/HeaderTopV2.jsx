import React from 'react';
import SocialShare from '../others/SocialShare';

const HeaderTopV2 = () => {
    return (
        <>
            <div className="header-top-two">
                <div className="auto-container">
                    <div className="clearfix">
                        <div className="top-left clearfix">
                            <ul className="links clearfix">
                                <li className='num'><a href="tel:+91 99912 25544"><span className="icon fa fa-phone"></span>Call : +91 99912 25544</a></li>
                                <li className='contact'><a href="mailto:contact@globalscholarsforum.com"><span className="icon fa fa-envelope"></span>contact@globalscholarsforum.com</a></li>
                                <li className='time'><span className="icon fa fa-clock me-2"></span>Open Hours 09:00 am - 06:00 pm</li>
                            </ul>
                        </div>
                        <div className="top-right clearfix d-none d-lg-block">
                            <ul className="social-icons">
                                <SocialShare />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV2;