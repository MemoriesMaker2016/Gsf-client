import React from 'react';
import { Link } from 'react-router-dom';

const SingleEventTabV1 = ({ event }) => {
    const { tabId, tabClass, icon, title, text, icon1, icon2, icon3, list1, list2, list3, infoList } = event

    return (
        <>
            <div className={`tab tab-pane fade ${tabClass}`} id={tabId}>
                <h4><span className={icon}></span>{title}</h4>
                <div className="text">{text}</div>
                <ul className={`info-list ${infoList}`}>
                    <li><span className={icon1}></span>{list1}</li>
                    <li><span className={icon2}></span> <Link to='tel:+91 9991225544'>+91 99912 25544</Link>, <Link to='tel:+91 8447649809'>+91 84476 49809</Link></li>
                    <li><span className={icon3}></span> <a href={`mailto:${list3}`}>{list3}</a></li>
                </ul>
            </div>
        </>
    );
};

export default SingleEventTabV1;