import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import { UserDataContext } from '../../App';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyProfile = () => {
    const userInfo = useContext(UserDataContext);
    const {me} = useSelector((state)=>state.userSlice);
    console.log(me)
    return (
        <div className='MyProfilePage'>
            <Header 
                leftChild={<Link to='/'>로고</Link>}
                rightChild={
                    <ul>
                    <li><Link to="/login">로그인</Link></li>
                    <li><Link to="/myprofile">마이 페이지</Link></li>
                    </ul>
                }
            />
            <h1>마이 페이지</h1>
            {me}
        </div>
    );
};

export default MyProfile;