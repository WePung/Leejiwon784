import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
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