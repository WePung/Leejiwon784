import React, { useContext } from 'react';
import style from './Home.module.css';

import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Banner from '../../components/Banner/Banner';
import FindDepartment from '../../components/FindDepartment/FindDepartment';
import { SchoolInfoContext } from '../../App';


const Home = () => {
    const schoolInfo = useContext(SchoolInfoContext);
    
    return (
        <div className={style.homePage}>
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
                leftChild={<a href='/schoollist'>학교</a>}
                centerChild={<a href='/ranking'>학교 랭킹</a>}
                rightChild={<a href='/promotion'>홍보자료</a>}
            />
            <Banner />
            <FindDepartment />
            {schoolInfo[0].schoolName}
        </div>
    );
};

export default Home;