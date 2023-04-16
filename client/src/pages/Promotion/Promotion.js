import React from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Promotions from '../../components/Promotions/Promotions';

const Promotion = () => {
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
                leftChild={<a href='/schoollist'>학교</a>}
                centerChild={<a href='/ranking'>학교 랭킹</a>}
                rightChild={<a href='/promotion'>홍보자료</a>}
            />
            <h1>홍보 자료</h1>
            <Promotions />
        </div>
    );
};

export default Promotion;