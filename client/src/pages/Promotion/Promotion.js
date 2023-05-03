import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Promotions from '../../components/Promotions/Promotions';

const Promotion = () => {
    return (
        <div>
            <Header 
                leftChild={<Link to = '/'>로고</Link>}
                rightChild={
                    <ul>
                    <li><Link to = "/login">로그인</Link></li>
                    <li><Link to = "/myprofile">마이 페이지</Link></li>
                    </ul>
                }
            />
            <Menu
                leftChild={<Link to = '/schools'>학교</Link>}
                centerChild={<Link to = '/ranking'>학교 랭킹</Link>}
                rightChild={<Link to = '/promotion'>홍보자료</Link>}
            />
            <h1>홍보 자료</h1>
            <Promotions />
        </div>
    );
};

export default Promotion;