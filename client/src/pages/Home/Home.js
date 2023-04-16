import React from 'react';
import style from './Home.module.css';

import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Banner from '../../components/Banner/Banner';
import FindDepartment from '../../components/FindDepartment/FindDepartment';

const Home = () => {
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
            <Menu />
            <Banner />
            <FindDepartment />
        </div>
    );
};

export default Home;