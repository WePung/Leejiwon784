import React, { useContext, useEffect, useState } from 'react';


import Header from '../../components/Header/Header';
import style from './Login.module.css'


const Login = ({loginFunc, isLogin}) => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const url = 'http://localhost:4000/api/userInfo';

    useEffect(()=>{},);

    return (
        <div className='loginPage'>
            <Header 
                leftChild={<a href='/'>로고</a>}
            />
            <div className={style.inputwrapper}>
                <div className={style.inputForm}>
                    <div className={style.inputText}>
                        <form
                            onSubmit={loginFunc}
                        >
                        <input
                            type='text'
                            name = 'userId'
                            id = 'id'
                        />
                        <input
                            type='password'
                            name = 'userPassword'
                            id = 'pw'
                        />
                        <div className={style.loginBtn}>
                        <input
                            type='submit'
                            value="로그인"
                        />
                    </div>
                        </form>
                    </div>
                </div>
                <div className={style.inputBtn}>
                    {}
                        <ul>
                            <li><a href='/signup'>회원가입</a></li>
                            <li><a href='#'>아이디/비밀번호 찾기</a></li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Login;