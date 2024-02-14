import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SocialShare = () => {
    return (
        <>
            <li>
                <Link to="https://www.facebook.com/memoriesmakertrip" target='_blank'><i className="fab fa-facebook-f"></i></Link>
            </li>
            <li>
                <Link to="https://twitter.com/memoriesmaker_" target='_blank'><i className="fab fa-twitter"></i></Link>
            </li>
            <li>
                <Link to="https://www.pinterest.com/memoriesmakeredu/?invite_code=f6e0ee8115ba4902b0fbce23bea083d8&sender=923097392281066420" target='_blank'><i className="fab fa-pinterest"></i></Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/company/memoriesmaker-edu/about/" target='_blank'><i class="fab fa-linkedin"></i></Link>
            </li>
            <li>
                <Link to="https://www.instagram.com/memoriesmaker2016/" target='_blank'><i class="fab fa-instagram"></i></Link>
            </li>
        </>
    );
};

export default SocialShare;