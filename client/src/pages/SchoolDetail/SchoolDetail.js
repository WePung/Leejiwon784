import React from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import { Link, useParams } from 'react-router-dom';
import SchoolInfos from '../../components/SchoolInfos/SchoolInfos';

const SchoolDetail = () => {
    let {schoolUniqueId} = useParams();
    console.log(schoolUniqueId);

    return (
        <div className='SchoolDetail'>
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

export default SchoolDetail;