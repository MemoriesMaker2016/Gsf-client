import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const SingleClientV1 = ({ client }) => {
    const { title } = client

    return (
        <>
            <div className="sponsors-outer">
                <h3>{title}</h3>
                <div className="row">
                    {/* {client.clientData.map(thumb =>
                        <div className="client-block col-lg-3 col-md-6 col-sm-12" key={thumb.id}>
                            <figure className="image-box"><Link to={void (0)}><img src={`images/school_logo/${thumb.clientThumb}`} alt="image" /></Link></figure>
                        </div>
                    )} */}
                    <div className="client-block col-lg-3 col-md-6 col-sm-12">
                        <figure className="image-box"><Link to={void (0)}><img src='images/school_logo/GE-Logo2.png' alt="image" /></Link></figure>
                    </div>
                    <div className="client-block col-lg-3 col-md-6 col-sm-12">
                            <figure className="image-box"><Link to={void (0)}><img src='images/school_logo/HRM-Logo.png' alt="image" /></Link></figure>
                        </div>
                        <div className="client-block col-lg-3 col-md-6 col-sm-12">
                            <figure className="image-box"><Link to={void (0)}><img src='images/school_logo/mbs_school.png' alt="image" /></Link></figure>
                        </div>
                        <div className="client-block col-lg-3 col-md-6 col-sm-12">
                            <figure className="image-box"><Link to={void (0)}><img src='images/school_logo/sps.jpeg' alt="image" /></Link></figure>
                        </div>
                </div>
            </div>
        </>
    );
};

export default SingleClientV1;