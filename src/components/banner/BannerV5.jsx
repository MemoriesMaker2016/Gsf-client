import React, { useEffect, useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import BannerV2Data from '../../jsonData/banner/BannerV2Data.json'
import Parallax from 'parallax-js';
import TimeV1 from '../counter/TimeV1';
import emailjs from '@emailjs/browser';
import Apiurl from '../../config';
import { useSearchParams } from 'react-router-dom';


const BannerV5 = () => {

    const [user, setUser] = useState({
        name:'',
        number:'',
        email:'',
        city:'',
        grade:''
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const postData = async (e) => {
        e.preventDefault();
    
        const { name, number, email, city, grade } = user;
    
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('number', number);
        formData.append('email', email);
        formData.append('city', city);
        formData.append('grade', grade);
    
        const res = await fetch(`${Apiurl}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData
        });
    
        const data = await res.json();
    
        if (data.status === 422 || !data) {
            window.alert("Failed to Registered");
        } else {
            window.alert("Congrats your Registration has been Successfully Completed");
            e.target.reset();
        }
    }
    

    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_cwt2e6c', 'template_fi9meku', form.current, 'FOhh7s-N2Db9kx0qL')
    //     .then((result) => {
    //         console.log(result.text);
    //         e.target.reset();
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };

    const time = new Date("Apr 28 2024")

    const sceneRef = useRef(null);

    useEffect(() => {
        if (sceneRef.current) {
            // eslint-disable-next-line no-unused-vars
            const parallaxInstance = new Parallax(sceneRef.current);
        }
    }, []);

    return (
        <>
        <div className='container-fluid'>
            <section className="banner-conference-two" style={{ backgroundImage: "url(images/background/6.jpg)", width:'108%', left:'-12px' }}>
                <div className='row'>
                    <div className='col-md-5'>
                    <div className="images-outer">
                    <div className='form'>
                        <span className='title'>Register Now - For Students</span>
                            <form action='POST'>
                            <div className='input-field'>
                                <input type='text' name='name' value={user.name} onChange={handleInputs} placeholder='Full Name' required className='form-control' />
                            </div>
                            <div className='input-field'>
                                <input type='number' name='number' value={user.number} onChange={handleInputs} placeholder='Phone Number' required className='form-control' />
                            </div>
                            <div className='input-field'>
                                <input type='email' name='email' value={user.email} onChange={handleInputs} placeholder='Email Address' required className='form-control' />
                            </div>
                            <div className='input-field'>
                                <input type='text' name='city' value={user.city} onChange={handleInputs} placeholder='City' required className='form-control' />
                            </div>
                            <div className='input-field'>
                                <input type='text' name='grade' value={user.grade} onChange={handleInputs} placeholder='Grade' required className='form-control' />
                            </div>
                            
                            <p style={{fontSize:'10px', lineHeight:'16px', paddingTop:'10px'}}>By submitting my phone number, I agree to receive automated and non-automated transactional and marketing calls/texts from GSF!. Consent not required; text STOP to 24006 to opt out. Opt out instructions subject to change. Message and data rates may apply. <strong style={{color:'#f20487'}}>Mobile Terms</strong> apply.</p>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label style={{fontSize:'10px', lineHeight:'16px'}} class="form-check-label" for="exampleCheck1">I agree to GSF!'s <Link to='https://memoriesmakeredu.com/privacy_policy' target='blank'><strong style={{color:'#f20487'}}>Terms</strong></Link> (including a <Link to='https://memoriesmakeredu.com/privacy_policy' target='blank'><strong style={{color:'#f20487'}}>mutual arbitration clause</strong></Link>) and <Link to='https://memoriesmakeredu.com/privacy_policy' target='blank'><strong style={{color:'#f20487'}}>Privacy Policy</strong></Link>.</label>
                            </div>
                            <input type='submit' value='Register Now' onClick={postData} className='theme-btn btn-style-nine'/>
                            </form>
                        </div>
                    </div>
                    </div>
                    
                    <div className='col-lg-8 col-md-7'>
                    <div className="auto-container">
                        <div className="content-box" style={{left:'75px'}}>
                            <span className="title">28th April 2024, Pragati Maidan, New Delhi, India</span>
                            <h2>Global Scholars <br />Forum 2024</h2>
                            <div className="time-counter">
                                <TimeV1 expiryTimestamp={time} />
                            </div>
                            <div className="btn-box"><Link to={void (0)} className="theme-btn btn-style-two"><span className="btn-title">Booking Now</span></Link></div>
                        </div>
                    </div>
                    <div className="icons parallax-scene-1" ref={sceneRef}>
                        {BannerV2Data.map(bannerIcon =>
                            <div
                                data-depth={bannerIcon.dataDepth}
                                className={`parallax-layer ${bannerIcon.iconClass}`}
                                style={{ backgroundImage: `url(../images/icons/${bannerIcon.icon})` }}
                                key={bannerIcon.id}>
                            </div>
                        )}
                    </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default BannerV5;