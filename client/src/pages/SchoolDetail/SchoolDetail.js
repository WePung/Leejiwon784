import React, { useContext } from 'react';
import { SchoolInfoContext } from '../../App';

const SchoolDetail = () => {
    const schoolInfo = useContext(SchoolInfoContext);
    return (
        <div className='SchoolDetail'>
            <h1>학교 상세 페이지</h1>
        </div>
    );
};

export default SchoolDetail;