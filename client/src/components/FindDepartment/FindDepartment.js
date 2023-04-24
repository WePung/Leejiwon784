import React,{useContext, useEffect, useState} from 'react';
import{SchoolInfoContext} from '../../App'
import SchoolList from '../SchoolList/SchoolList';

const FindDepartment = () => {
    const schoolInfo = useContext(SchoolInfoContext);
    const [filterValue, setFilterValue] = useState("");

    const onFilterChange = (e) =>{
        setFilterValue(e.target.value)
    }

    useEffect(()=>{
        console.log("click btn")
    },[filterValue])

    // 위와 같은 동작을 하지만 배열에 filterValue의 값이 포함 되기만 해도 ture반환
    // const filtedSchoolList = schoolInfo.map((it)=>{
    //     const Departments = it.schoolDepartment;
    // Departments객체를 다시 map으로 돌려 true와 false를 구분
    //     const trueFalse = Departments.map(item => item.includes(filterValue));
    //     if(trueFalse.includes(true)){
    //         return(
    //             <div
    //                 key={it.schoolUniqueId}
    //                 onClick={onGoDetail}
    //             >
    //                 {it.schoolName}
    //                 {it.schoolDepartment}
    //             </div>
    //             )
    //     }
    // }
    // )


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
                <button name = "회계" value="Accounting" onClick={onFilterChange}>회계</button>
                <button name = "자동차" value="Automotive" onClick={onFilterChange}>자동차</button>
                <button name = "디자인" value="Design" onClick={onFilterChange}>디자인</button>
                </div>
            </div>
            <SchoolList
                filterValue={filterValue}
            />
        </div>
    );
};

export default FindDepartment;