import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import { UserDataContext } from '../../App';

const MyProfile = () => {
    const userInfo = useContext(UserDataContext);
    return (
        <div className='MyProfilePage'>
            <Header 
                leftChild={<a href='/'>로고</a>}
                rightChild={
                    <ul>
                    <li><a href="/login">로그인</a></li>
                    <li><a href="/myprofile">마이 페이지</a></li>
                    </ul>
                }
            />
            <h1>마이 페이지</h1>
            {userInfo[0].userName}
        </div>
    );
};

export default MyProfile;