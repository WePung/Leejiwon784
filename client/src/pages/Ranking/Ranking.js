import React, { useState, useContext } from 'react';
import{SchoolInfoContext} from '../../App';
import { Link, useNavigate } from 'react-router-dom';

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
                leftChild={<Link to='/'>로고</Link>}
                rightChild={
                    <ul>
                    <li><Link to="/login">로그인</Link></li>
                    <li><Link to="/myprofile">마이 페이지</Link></li>
                    </ul>
                }
            />
            <Menu
                leftChild={<Link to='/schools'>학교</Link>}
                centerChild={<Link to='/ranking'>학교 랭킹</Link>}
                rightChild={<Link to='/promotion'>홍보자료</Link>}
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