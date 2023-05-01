import React from 'react';
import { useNavigate } from 'react-router-dom';


const SchoolItem = ({filterValue, schoolUniqueId, schoolName, schoolDepartment}) => {
    const navigate =useNavigate();
    const onGoDetail = () => {
        alert("안녕")
        // navigate(`/schooldetail/${schoolUniqueId}`)
    }

    const filtedSchoolInfo = () =>{
        // 배열에 filterValue의 값이 포함 되기만 해도 ture반환
        const trueFalse = schoolDepartment.map(item => item.includes(filterValue));
        // 객체에 true가 포함되있으면 반환
        if(trueFalse.includes(true)){
            return(
                <div>
                    {schoolName}
                    {schoolDepartment}
                </div>
                )
        }
    }
    return (
        <div className='SchoolItem' onClick={onGoDetail}>
            {filtedSchoolInfo()}    
        </div>
    );
};

export default SchoolItem;