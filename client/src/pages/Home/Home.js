import React, { useContext } from 'react';
import style from './Home.module.css';

import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Banner from '../../components/Banner/Banner';
import FindDepartment from '../../components/FindDepartment/FindDepartment';
import { SchoolInfoContext } from '../../App';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Home = () => {
    const schoolInfo = useContext(SchoolInfoContext);
    const {me} = useSelector((state)=>state.userSlice);
    console.log(me);
    return (
        <div className={style.homePage}>
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
            <Banner />
            <FindDepartment />
        </div>
    );
};

export default Home;