import React,{useContext, useEffect} from 'react';
import{SchoolInfoContext} from '../../App'
import { useNavigate } from 'react-router-dom';

const SchoolList = ({filterValue}) => {
    const schoolInfo = useContext(SchoolInfoContext);
    const navigate =useNavigate();

    const onGoDetail = () => {
        navigate(`/schooldetail/${schoolInfo.schoolUniqueId}`)
    }

    return (
        <div className='schoolList'>
            {
                schoolInfo.map((it)=>{
                    const Departments = it.schoolDepartment;
                    const id = it.schoolUniqueId
                    const trueFalse = Departments.map(item => item.includes(filterValue));
                    if(trueFalse.includes(true)){
                        return(
                            <div
                                key={it.schoolUniqueId}
                                onClick={onGoDetail}
                            >
                                {it.schoolName}
                                {it.schoolDepartment}
                            </div>
                            )
                    }
                }
                )
            }
        </div>
    );
};

export default SchoolList;