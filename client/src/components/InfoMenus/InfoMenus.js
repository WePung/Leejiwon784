import React from 'react';

const InfoMenus = ({infosMenu, reviewsMenu, trafficMenu, educationMenu, qnaMenu}) => {
    return (
        <div className="InfoMenus">
            <ul>
                <div className="infosMenu">{infosMenu}</div>
               <div className="reviewsMenu">{reviewsMenu}</div>
               <div className=" trafficMenu">{trafficMenu}</div>
               <div className='educationMenu'>{educationMenu}</div>
               <div className='qnaMenu'>{qnaMenu}</div>
            </ul>
        </div>
    );
};

export default InfoMenus;