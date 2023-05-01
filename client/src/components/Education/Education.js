import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import SchoolInfos from '../SchoolInfos/SchoolInfos';

const Education = () => {
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
            <h1>학교 상세 페이지</h1>
            <h2>학교 이미지</h2>
            <h2>학교 로고</h2>
            <h2>학교 이름</h2>
            <h2>학교 간결화된 정보</h2>
            <SchoolInfos />
            <h3>정보내용</h3>
        </div>
    );
};

export default Education;