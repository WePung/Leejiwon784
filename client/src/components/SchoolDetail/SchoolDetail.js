import React, { useContext } from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const SchoolDetail = () => {
    const schoolInfo = useContext(SchoolInfoContext);
    return (
        <div className='SchoolDetail'>
            <Header />
            <Menu />
        </div>
    );
};

export default SchoolDetail;