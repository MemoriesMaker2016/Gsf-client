import React from 'react';
import SpeakerV1Data from '../../jsonData/speaker/SpeakerV1Data.json'
import SingleSpeakerV3 from './SingleSpeakerV3';

const SpeakerV3 = () => {
    return (
        <>
            <section className="speakers-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="title">Education Fair Highlights</span>
                    </div>
                    <div className="row">
                    <div className='col-md-3' style={{border:'1px solid black', alignItems:'center'}}>
                        <img src='images/Hightlights_icon/no-money.png' style={{width:'50%'}}/>
                        <h4>No Registration Fee</h4>
                    </div>
                    <div className='col-md-3' style={{border:'1px solid black'}}>
                        <img src='images/Hightlights_icon/no-money.png' style={{width:'50%'}}/>
                    </div>
                    <div className='col-md-3' style={{border:'1px solid black'}}>
                        <img src='images/Hightlights_icon/no-service.png' style={{width:'50%'}}/>
                        <h4>No Service Charges</h4>
                    </div>
                    <div className='col-md-3' style={{border:'1px solid black'}}>
                        <img src='images/Hightlights_icon/no-money.png' style={{width:'50%'}}/>
                    </div>
                        {/* {SpeakerV1Data.map(speaker =>
                            <div className="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12" key={speaker.id}>
                                <SingleSpeakerV3 speaker={speaker} />
                            </div>
                        )} */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpeakerV3;