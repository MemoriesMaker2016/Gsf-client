import React from 'react';
import ScheduleListV1Data from '../../jsonData/schedule/ScheduleListV1Data.json'
import ScheduleV1Data from '../../jsonData/schedule/ScheduleV1Data.json'
import ScheduleList from './ScheduleList';
import ReactWOW from 'react-wow';
import { HashLink as Link } from 'react-router-hash-link'

const ScheduleV1 = () => {
    return (
        <>
            <section className="schedule-section">
                <div className="anim-icons">
                    <ReactWOW animation='zoomIn'>
                        <span className="icon icon-circle-4"></span>
                    </ReactWOW>
                    <ReactWOW animation='zoomIn'>
                        <span className="icon icon-circle-3"></span>
                    </ReactWOW>
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        {/* <span className="title">Tentative Itinerary</span> */}
                        <h2>Schedule Plan</h2>
                    </div>
                    <div className="schedule-tabs tabs-box ">
                        <div className="btns-box">
                            <ul className="tab-buttons clearfix nav nav-tabs">
                                <Link to='#tab-1'>
                                <li className='tab-btn active del'>
                                    <span className="day">Day 01 - Delhi</span>
                                    <span className="date">28</span>
                                    <span className="month">Apr</span> 2024
                                </li>
                                </Link>
                                <Link to='#tab-1'>
                                <li className='tab-btn guru'>
                                    <span className="day">Day 02 - Gurugram</span>
                                    <span className="date">29</span>
                                    <span className="month">Apr</span> 2024
                                </li>
                                </Link>
                                <Link to='#tab-2'>
                                <li className='tab-btn soni'>
                                    <span className="day">Day 03 - Sonipat</span>
                                    <span className="date">30</span>
                                    <span className="month">Apr</span> 2024
                                </li>
                                </Link>
                                <Link to='#tab-3'>
                                <li className='tab-btn chandi'>
                                    <span className="day">Day 04 - Punjab</span>
                                    <span className="date">01</span>
                                    <span className="month">May</span> 2024
                                </li>
                                </Link>
                                <Link to='#tab-4'>
                                <li className='tab-btn jai'>
                                    <span className="day">Day 05 - Jaipur</span>
                                    <span className="date">02</span>
                                    <span className="month">May</span> 2024
                                </li>
                                </Link>
                                {/* {ScheduleListV1Data.map(list =>
                                    <ScheduleList list={list} key={list.id} />
                                )} */}
                            </ul>
                        </div>

                        {/* mobile view */}{/* mobile view */}{/* mobile view */}{/* mobile view */}

                        <div className="btns-box btn_mobile_view" style={{display:'none'}}>
                            <ul className="tab-buttons clearfix nav nav-tabs">
                                <Link to='#tab-6'>
                                <li className='tab-btn active del'>
                                    <span className="day">Day 012 - Delhi</span>
                                    <span className="date">28</span>
                                    <span className="month">Apr</span> 2024
                                </li>
                                </Link>
                                <Link to='#tab-6'>
                                <li className='tab-btn guru'>
                                    <span className="day">Day 02 - Gurugram</span>
                                    <span className="date">29</span>
                                    <span className="month">Apr</span> 2024
                                </li>
                                </Link>
                                <Link to='#tab-7'>
                                <li className='tab-btn soni'>
                                    <span className="day">Day 03 - Sonipat</span>
                                    <span className="date">30</span>
                                    <span className="month">Apr</span> 2024
                                </li>
                                </Link>
                                <Link to='#tab-8'>
                                <li className='tab-btn chandi'>
                                    <span className="day">Day 04 - Punjab</span>
                                    <span className="date">01</span>
                                    <span className="month">May</span> 2024
                                </li>
                                </Link>
                                <Link to='#tab-9'>
                                <li className='tab-btn jai'>
                                    <span className="day">Day 05 - Jaipur</span>
                                    <span className="date">02</span>
                                    <span className="month">May</span> 2024
                                </li>
                                </Link>
                                {/* {ScheduleListV1Data.map(list =>
                                    <ScheduleList list={list} key={list.id} />
                                )} */}
                            </ul>
                        </div>


                        <div className="tabs-content mainView">
                            <div className='tab fade show active' id='tab-1'>
                                <div className="schedule-timeline">
                                    <div className='schedule-block'>
                                        <div className="inner-box">
                                            <div className="inner del1">
                                                <div className="date date1">Delhi <br /> </div>
                                                    <div className="speaker-info">
                                                        <figure className="thumb"><img src='../images/resource/thumb-1.jpg' alt="image" /></figure>
                                                        <h5 className="name">Global Scholars Forum</h5>
                                                        <span className="designation">2024</span>
                                                    </div>
                                                    {/* <h4><Link to={`/event-detail/${schedule.id}/${block.id}#`}>{block.title}</Link></h4> */}
                                                    <div className="text" style={{color:'#000',}}><strong>Venue:</strong> Pragati Maidan, New Delhi - Invitation to Delhi, Noida, and Ghaziabad Schools</div>
                                                    <div className="text" style={{color:'#000'}}><strong>Timing:</strong> 09:30 Am - 06:30 Pm</div>
                                                    {/* <div className="btn-box">
                                                         <Link to={`/event-detail/${schedule.id}/${block.id}#`} className="theme-btn">{block.btnText}</Link>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab fade show active' id='tab-2'>
                                <div className="schedule-timeline">
                                    <div className='schedule-block even'>
                                        <div className="inner-box">
                                            <div className="inner guru2">
                                                <div className="date date2">Gurugram</div>
                                                    <div className="speaker-info">
                                                        <figure className="thumb"><img src='../images/resource/thumb-2.jpg' alt="image" /></figure>
                                                        <h5 className="name">Global Scholars Forum</h5>
                                                        <span className="designation">2024</span>
                                                    </div>
                                                    {/* <h4><Link to={`/event-detail/${schedule.id}/${block.id}#`}>{block.title}</Link></h4> */}
                                                    <div className="text" style={{color:'#000',}}><strong>Venue:</strong> Invitation to Gurugram and Faridabad Schools</div>
                                                    <div className="text" style={{color:'#000'}}><strong>Timing:</strong> 09:00 Am - 11:00 Am</div>
                                                    {/* <div className="btn-box">
                                                         <Link to={`/event-detail/${schedule.id}/${block.id}#`} className="theme-btn">{block.btnText}</Link>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab fade show active' id='tab-3'>
                                <div className="schedule-timeline">
                                    <div className='schedule-block'>
                                        <div className="inner-box">
                                            <div className="inner soni2">
                                                <div className="date date3">Sonipat <br /> </div>
                                                    <div className="speaker-info">
                                                        <figure className="thumb"><img src='../images/resource/thumb-3.jpg' alt="image" /></figure>
                                                        <h5 className="name">Global Scholars Forum</h5>
                                                        <span className="designation">2024</span>
                                                    </div>
                                                    {/* <h4><Link to={`/event-detail/${schedule.id}/${block.id}#`}>{block.title}</Link></h4> */}
                                                    <div className="text" style={{color:'#000',}}><strong>Venue:</strong> Sonipat (Swarnprastha Public School)</div>
                                                    <div className="text" style={{color:'#000'}}><strong>Timing:</strong> 09:00 Am - 03:00 Pm</div>
                                                    {/* <div className="btn-box">
                                                         <Link to={`/event-detail/${schedule.id}/${block.id}#`} className="theme-btn">{block.btnText}</Link>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab fade show active' id='tab-4'>
                                <div className="schedule-timeline">
                                    <div className='schedule-block even'>
                                        <div className="inner-box">
                                            <div className="inner chandi2">
                                                <div className="date date4">Punjab</div>
                                                    <div className="speaker-info">
                                                        <figure className="thumb"><img src='../images/resource/thumb-4.jpg' alt="image" /></figure>
                                                        <h5 className="name">Global Scholars Forum</h5>
                                                        <span className="designation">2024</span>
                                                    </div>
                                                    {/* <h4><Link to={`/event-detail/${schedule.id}/${block.id}#`}>{block.title}</Link></h4> */}
                                                    <div className="text" style={{color:'#000',}}><strong>Venue:</strong> Punjab Hotel (TBA)</div>
                                                    <div className="text" style={{color:'#000'}}><strong>Timing:</strong> 09:00 Am - 05:00 Pm</div>
                                                    {/* <div className="btn-box">
                                                         <Link to={`/event-detail/${schedule.id}/${block.id}#`} className="theme-btn">{block.btnText}</Link>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab fade show active' id='tab-5'>
                                <div className="schedule-timeline">
                                    <div className='schedule-block'>
                                        <div className="inner-box">
                                            <div className="inner jai2">
                                                <div className="date date5">Jaipur <br /> </div>
                                                    <div className="speaker-info">
                                                        <figure className="thumb"><img src='../images/resource/thumb-5.jpg' alt="image" /></figure>
                                                        <h5 className="name">Global Scholars Forum</h5>
                                                        <span className="designation">2024</span>
                                                    </div>
                                                    {/* <h4><Link to={`/event-detail/${schedule.id}/${block.id}#`}>{block.title}</Link></h4> */}
                                                    <div className="text" style={{color:'#000',}}><strong>Venue:</strong> Jaipur Hotel (TBA)</div>
                                                    <div className="text" style={{color:'#000'}}><strong>Timing:</strong> 09:30 Am - 05:00 Pm</div>
                                                    {/* <div className="btn-box">
                                                         <Link to={`/event-detail/${schedule.id}/${block.id}#`} className="theme-btn">{block.btnText}</Link>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* mobile view */}{/* mobile view */}{/* mobile view */}{/* mobile view */}{/* mobile view */}{/* mobile view */}

                        <div className="tabs-content mobile_View" style={{display:'none'}}>
                            <div className='tab fade show active' id='tab-6'>
                                <div className="schedule-timeline">
                                    <div className='schedule-block'>
                                        <div className="inner-box">
                                            <div className="inner del1">
                                                <div className="date date1">Delhi <br /> </div>
                                                <h5 className="name">Global Scholars Forum</h5>
                                                        <span className="designation">2024</span>
                                                    <div className="speaker-info">
                                                    
                                                        <figure className="thumb"><img src='../images/resource/thumb-1.jpg' alt="image" /></figure>
                                                        
                                                    </div>
                                                    {/* <h4><Link to={`/event-detail/${schedule.id}/${block.id}#`}>{block.title}</Link></h4> */}
                                                    <div className="text text1" style={{color:'#000',}}><strong>Venue:</strong> Pragati Maidan, New Delhi - Invitation to Delhi, Noida, and Ghaziabad Schools</div>
                                                    <div className="text text1" style={{color:'#000'}}><strong>Timing:</strong> 09:30 Am - 06:30 Pm</div>
                                                    {/* <div className="btn-box">
                                                         <Link to={`/event-detail/${schedule.id}/${block.id}#`} className="theme-btn">{block.btnText}</Link>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab fade show active' id='tab-7'>
                                <div className="schedule-timeline">
                                    <div className='schedule-block even'>
                                        <div className="inner-box">
                                            <div className="inner guru2">
                                                <div className="date date2">Gurugram</div>
                                                <h5 className="name">Global Scholars Forum</h5>
                                                        <span className="designation">2024</span>
                                                    <div className="speaker-info">
                                                        <figure className="thumb"><img src='../images/resource/thumb-2.jpg' alt="image" /></figure>
                                                        
                                                    </div>
                                                    {/* <h4><Link to={`/event-detail/${schedule.id}/${block.id}#`}>{block.title}</Link></h4> */}
                                                    <div className="text text1" style={{color:'#000',}}><strong>Venue:</strong> Invitation to Gurugram and Faridabad Schools</div>
                                                    <div className="text text1" style={{color:'#000'}}><strong>Timing:</strong> 09:00 Am - 11:00 Am</div>
                                                    {/* <div className="btn-box">
                                                         <Link to={`/event-detail/${schedule.id}/${block.id}#`} className="theme-btn">{block.btnText}</Link>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab fade show active' id='tab-8'>
                                <div className="schedule-timeline">
                                    <div className='schedule-block'>
                                        <div className="inner-box">
                                            <div className="inner soni2">
                                                <div className="date date3">Sonipat <br /> </div>
                                                <h5 className="name">Global Scholars Forum</h5>
                                                        <span className="designation">2024</span>
                                                    <div className="speaker-info">
                                                        <figure className="thumb"><img src='../images/resource/thumb-3.jpg' alt="image" /></figure>
                                                        
                                                    </div>
                                                    {/* <h4><Link to={`/event-detail/${schedule.id}/${block.id}#`}>{block.title}</Link></h4> */}
                                                    <div className="text text1" style={{color:'#000',}}><strong>Venue:</strong> Sonipat (Swarnprastha Public School)</div>
                                                    <div className="text text1" style={{color:'#000'}}><strong>Timing:</strong> 09:00 Am - 03:00 Pm</div>
                                                    {/* <div className="btn-box">
                                                         <Link to={`/event-detail/${schedule.id}/${block.id}#`} className="theme-btn">{block.btnText}</Link>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab fade show active' id='tab-9'>
                                <div className="schedule-timeline">
                                    <div className='schedule-block even'>
                                        <div className="inner-box">
                                            <div className="inner chandi2">
                                                <div className="date date4">Punjab</div>
                                                <h5 className="name">Global Scholars Forum</h5>
                                                        <span className="designation">2024</span>
                                                    <div className="speaker-info">
                                                        <figure className="thumb"><img src='../images/resource/thumb-4.jpg' alt="image" /></figure>
                                                        
                                                    </div>
                                                    {/* <h4><Link to={`/event-detail/${schedule.id}/${block.id}#`}>{block.title}</Link></h4> */}
                                                    <div className="text text1" style={{color:'#000',}}><strong>Venue:</strong> Punjab Hotel (TBA)</div>
                                                    <div className="text text1" style={{color:'#000'}}><strong>Timing:</strong> 09:00 Am - 05:00 Pm</div>
                                                    {/* <div className="btn-box">
                                                         <Link to={`/event-detail/${schedule.id}/${block.id}#`} className="theme-btn">{block.btnText}</Link>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='tab fade show active' id='tab-10'>
                                <div className="schedule-timeline">
                                    <div className='schedule-block'>
                                        <div className="inner-box">
                                            <div className="inner jai2">
                                                <div className="date date5">Jaipur <br /> </div>
                                                <h5 className="name">Global Scholars Forum</h5>
                                                        <span className="designation">2024</span>
                                                    <div className="speaker-info">
                                                        <figure className="thumb"><img src='../images/resource/thumb-5.jpg' alt="image" /></figure>
                                                        
                                                    </div>
                                                    {/* <h4><Link to={`/event-detail/${schedule.id}/${block.id}#`}>{block.title}</Link></h4> */}
                                                    <div className="text text1" style={{color:'#000',}}><strong>Venue:</strong> Jaipur Hotel (TBA)</div>
                                                    <div className="text text1" style={{color:'#000'}}><strong>Timing:</strong> 09:30 Am - 05:00 Pm</div>
                                                    {/* <div className="btn-box">
                                                         <Link to={`/event-detail/${schedule.id}/${block.id}#`} className="theme-btn">{block.btnText}</Link>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ScheduleV1;