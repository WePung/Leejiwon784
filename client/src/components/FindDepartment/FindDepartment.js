import React,{useContext, useEffect, useState} from 'react';
import{SchoolInfoContext} from '../../App'

const FindDepartment = () => {
    const schoolInfo = useContext(SchoolInfoContext);

    const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
    const [filterValue, setFilterValue] = useState("");

    const onFilterChange = (e) =>{
        setFilterValue(e.target.value)
    }

    useEffect(()=>{
        console.log("click btn")
    },[filterValue])



    // includes를 사용해 문자열에 filterValue와 같은 값이 있을 시 true반환
    const test = schoolInfo.map((it)=>{
        const Departments = it.schoolDepartment;
        if(Departments.includes(filterValue)){
            return(
            <div key={it.schoolUniqueId}>
                {it.schoolName}
                {it.schoolDepartment}
            </div>
            )
        }
    })

    // const test2 = schoolInfo.map((it)=>{
    //     const Departments = it.schoolDepartment;
    //     const departmentsFilter = Departments.filter(item => item.includes(filterValue))
    //     console.log(departmentsFilter)
    //     if(departmentsFilter.filter(item => item.includes(filterValue))){
    //         return true
    //         // (
    //         //     <div key={it.schoolUniqueId}>
    //         //         {it.schoolName}
    //         //         {it.schoolDepartment}
    //         //     </div>
    //         //     )
    //     }else{
    //         return false
    //     }
    // })

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
                </div>
            </div>
            {test}
            {/* {test2} */}
        </div>
    );
};

export default FindDepartment;