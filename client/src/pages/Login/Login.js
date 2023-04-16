import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import style from './Login.module.css'


const Login = () => {

    const url = 'http://localhost:4000/api/userInfo';

    return (
        <div className='loginPage'>
            <Header 
                leftChild={<a href='/'>로고</a>}
            />
            <div className={style.inputwrapper}>
                <div className={style.inputForm}>
                    <div className={style.inputText}>
                        <form
                            onSubmit={""}
                        >
                        <input
                            type='text'
                            name = 'userId'
                        />
                        <input
                            type='password'
                            name = 'userPassword'
                        />
                        </form>
                    </div>
                    <div className={style.loginBtn}>
                        <input
                            type='submit'
                            value={"로그인"}
                        />
                    </div>
                </div>
                <div className={style.inputBtn}>
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