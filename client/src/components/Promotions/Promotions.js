import React,{useContext} from 'react';
import { SchoolInfoContext } from '../../App';

const Promotions = () => {
    const schoolInfo = useContext(SchoolInfoContext)
    return (
        <div>
            {schoolInfo.map((item)=>(
                    <div
                        key = {item.schoolUniqueId}
                    >
                        <iframe width="560" height="315" src={`${item.youtubeLink}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
                    </div>
            ))}
        </div>
    );
};

export default Promotions;