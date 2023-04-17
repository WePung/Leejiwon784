import React,{useContext} from 'react';
import { SchoolInfoContext } from '../../App';

const Schools = () => {
    const schoolInfo = useContext(SchoolInfoContext)
    return (
        <div>
            {schoolInfo.map((item)=>(
                    <div
                        key = {item.schoolUniqueId}
                    >
                        {item.schoolName}
                        <img src={`${item.image}`}/>
                    </div>
            ))}
        </div>
    );
};

export default Schools;