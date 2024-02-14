import React from 'react';
import ClientV1Data from '../../jsonData/client/ClientV1Data.json'
import SingleClientV1 from './SingleClientV1';
import ReactWOW from 'react-wow';
import { Link } from 'react-router-dom';

const ClientV1 = () => {
    return (
        <>
            <section className="clients-section">
                <div className="anim-icons">
                    <ReactWOW animation='zoomIn'>
                        <span className="icon icon-dots-3"></span>
                    </ReactWOW>
                    <span className="icon icon-circle-blue"></span>
                </div>
                <div className="auto-container">
                    {/* <div className="sec-title">
                        <span className="title">Schools</span>
                        <h2>Participating</h2>
                    </div> */}
                    {/* {ClientV1Data.map(client =>
                        <SingleClientV1 key={client.id} client={client} />
                    )} */}
                    <div className="sponsors-outer">
                    <h3>Schools Participating</h3>
                        <div className="row">
                            <div className="client-block col-lg-3 col-md-6 col-sm-12">
                                <figure className="image-box1"><Link to={void (0)}><img src='images/school_logo/GE-Logo2.png' alt="image" /></Link></figure>
                             </div>
                            <div className="client-block col-lg-3 col-md-6 col-sm-12">
                                <figure className="image-box2"><Link to={void (0)}><img src='images/school_logo/HRM-Logo.png' alt="image" /></Link></figure>
                            </div>
                            <div className="client-block col-lg-3 col-md-6 col-sm-12">
                                <figure className="image-box3"><Link to={void (0)}><img src='images/school_logo/mbs_school.png' alt="image" /></Link></figure>
                            </div>
                            <div className="client-block col-lg-3 col-md-6 col-sm-12">
                                <figure className="image-box4"><Link to={void (0)}><img src='images/school_logo/sps.jpeg' alt="image" /></Link></figure>
                            </div>
                        </div>
                    </div>
                    <div className="sponsors-outer">
                    {/* <h3>Gold Sponsors</h3> */}
                        <div className="row" style={{textAlign:'center'}}>
                            <div className="client-block col-lg-3 col-md-6 col-sm-12">
                                <figure className="image-box5"><Link to={void (0)}><img src='images/school_logo/gd_logo.png' alt="image" /></Link></figure>
                             </div>
                            {/* <div className="client-block col-lg-3 col-md-6 col-sm-12">
                                <figure className="image-box6"><Link to={void (0)}><img src='images/school_logo/SAJS.jpg' alt="image" /></Link></figure>
                            </div> */}
                            <div className="client-block col-lg-3 col-md-6 col-sm-12">
                                <figure className="image-box7"><Link to={void (0)}><img src='images/school_logo/sparsh_logo.png' alt="image" /></Link></figure>
                            </div>
                            {/* <div className="client-block col-lg-3 col-md-6 col-sm-12">
                                <figure className="image-box8"><Link to={void (0)}><img src='images/school_logo/Tuli.jpg' alt="image" /></Link></figure>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClientV1;