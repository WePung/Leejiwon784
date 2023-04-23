import React, { useState, useContext } from 'react';
import{SchoolInfoContext} from '../../App';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import SchoolList from '../../components/SchoolList/SchoolList';

const Ranking = () => {

    const schoolInfo = useContext(SchoolInfoContext);
    const [filterValue, setFilterValue] = useState("");
    const navigate = useNavigate();

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
            <h1>학교 랭킹</h1>
            <select
                onChange={onFilterChange}
            >
                <option value="Accounting">회계</option>
                <option value="Automotive">자동차</option>
                <option value="Design">디자인</option>
            </select>
            <SchoolList
                filterValue={filterValue}
            />
        </div>
    );
};

export default Ranking;