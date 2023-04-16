import React from 'react';
import Header from '../../components/Header/Header';

const SchoolList = () => {
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
            <h1>학교</h1>
        </div>
    );
};

export default SchoolList;