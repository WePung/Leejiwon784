import React, { useState, useContext } from 'react';
import{SchoolInfoContext} from '../../App'

import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import SchoolList from '../../components/SchoolList/SchoolList';

const Schools = () => {
    const schoolInfo = useContext(SchoolInfoContext);
    const [filterValue, setFilterValue] = useState("");

    const onFilterChange = (e) =>{
        setFilterValue(e.target.value)
    }

    return (
        <div>
            <Header 
                leftChild={<a href='/'>로고</a>}
                rightChild={
                    <ul>
                    <li><a href="/login">로그인</a></li>
                    <li><a href="/myprofile">마이 페이지</a></li>
                    </ul>
                }
            />
            <Menu
                leftChild={<a href='/schools'>학교</a>}
                centerChild={<a href='/ranking'>학교 랭킹</a>}
                rightChild={<a href='/promotion'>홍보자료</a>}
            />
            <h1>학교</h1>
            <div className='formWrapper'>
                <input
                    type='text'
                    name = "searchText"
                    onChange={onFilterChange}
                />
                <button>찾기</button>
                <SchoolList
                filterValue={filterValue}
            />
            </div>
        </div>
    );
};

export default Schools;