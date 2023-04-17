import React,{useContext, useState} from 'react';
import{SchoolInfoContext} from '../../App'

const FindDepartment = () => {
    const schoolInfo = useContext(SchoolInfoContext);

    const [department, setDepartment] = useState("");
    const [filterValue, setFilterValue] = useState("");


    const onFilterChange = (e) =>{
        setFilterValue(e.target.value)
    }
    return (
        <div className='findDepartment'>
            <div className='searchWrapper'>
                <div className='searchBar'>
                <input
                    type="text"
                    name = "searchBar"
                />
                </div>
                <div className='btns'>
                <button name = "디자인" value="Design" onClick={onFilterChange}>디자인</button>
                <button name = "자동차" value="Automotive" onClick={onFilterChange}>자동차</button>
                </div>
            </div>
            {schoolInfo.filter((it)=>{schoolInfo.schoolDepartment.filterValue})}
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

export default FindDepartment;