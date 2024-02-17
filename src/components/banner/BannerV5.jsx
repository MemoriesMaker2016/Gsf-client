import React, { useEffect, useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import BannerV2Data from '../../jsonData/banner/BannerV2Data.json';
import Parallax from 'parallax-js';
import TimeV1 from '../counter/TimeV1';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Apiurl from '../../config';

const BannerV5 = () => {
    const [user, setUser] = useState({
        name: '',
        number: '',
        email: '',
        city: '',
        grade: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');


    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();
        
        const formData = new URLSearchParams();
        formData.append('name', user.name);
        formData.append('number', user.number);
        formData.append('email', user.email);
        formData.append('city', user.city);
        formData.append('grade', user.grade);
        
        if (!user.name || !user.number || !user.email || !user.city || !user.grade) {
            setMessage("Please fill all the fields properly.");
            toast('Please fill all the fields properly.')
            return;
        }
        setLoading(true);
    
       

        
        try {
            const res = await fetch(`${Apiurl}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: formData
            });

            const data = await res.json();

            if (data.status === 422 || !data) {
                setMessage("Failed to register");
            } else {
                setMessage("Registration successful");
                toast("Congrats! you have successfully registered")
                setUser({
                    name: '',
                    number: '',
                    email: '',
                    city: '',
                    grade: ''
                });
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("please fill you form properly", error)
 
        }
        
        finally {
            setLoading(false);
        }
    
    };

    const time = new Date("Apr 28 2024");
    const sceneRef = useRef(null);

    useEffect(() => {
        if (sceneRef.current) {
            const parallaxInstance = new Parallax(sceneRef.current);
            return () => {
                parallaxInstance.destroy();
            };
        }
    }, []);






    return (
        <div className='container-fluid'>
            <section className="banner-conference-two" style={{ backgroundImage: "url(images/background/6.jpg)", width: '108%', left: '-12px' }}>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className="images-outer">
                            <div className='form'>
                                <span className='title'>Register Now - For Students</span>
                                <form>
                              
                                    
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
                                    <p style={{ fontSize: '10px', lineHeight: '16px', paddingTop: '10px' }}>By submitting my phone number, I agree to receive automated and non-automated transactional and marketing calls/texts from GSF!. Consent not required; text STOP to 24006 to opt out. Opt out instructions subject to change. Message and data rates may apply. <strong style={{ color: '#f20487' }}>Mobile Terms</strong> apply.</p>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label style={{ fontSize: '10px', lineHeight: '16px' }} className="form-check-label" htmlFor="exampleCheck1">I agree to GSF!'s <Link to='https://memoriesmakeredu.com/privacy_policy' target='blank'><strong style={{ color: '#f20487' }}>Terms</strong></Link> (including a <Link to='https://memoriesmakeredu.com/privacy_policy' target='blank'><strong style={{ color: '#f20487' }}>mutual arbitration clause</strong></Link>) and <Link to='https://memoriesmakeredu.com/privacy_policy' target='blank'><strong style={{ color: '#f20487' }}>Privacy Policy</strong></Link>.</label>
                                    </div>
                                    <input type='submit' value={loading ? 'Registering...' : 'Register Now'} onClick={postData} className='theme-btn btn-style-nine hover:bg-white hover:text-button bg-button'  disabled={loading} />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-7'>
                        <div className="auto-container">
                            <div className="content-box" style={{ left: '75px' }}>
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
    );
};

export default BannerV5;
