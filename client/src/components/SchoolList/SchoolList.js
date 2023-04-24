import React,{useContext, useEffect} from 'react';
import{SchoolInfoContext} from '../../App'
import { useNavigate } from 'react-router-dom';
import SchoolItem from '../SchoolItem/SchoolItem';

const SchoolList = ({filterValue}) => {
    const schoolInfo = useContext(SchoolInfoContext);
    const navigate =useNavigate();

    return (
        <div className='schoolList'>
            {schoolInfo.map((it)=>(
                <SchoolItem
                filterValue = {filterValue}
                key={it.schoolUniqueId} {...it}
                />
            ))}
        </div>
    );
};

export default SchoolList;