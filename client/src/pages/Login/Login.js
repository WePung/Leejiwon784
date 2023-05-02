import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import style from './Login.module.css'
import { logIn } from '../../actions/userAction';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const dispatch = useDispatch();

    const navigator = useNavigate();

    const onIdChange = (e) =>{
        setId(e.target.value);
    }
    
    const onPwChange = (e) =>{
        setPw(e.target.value);
    }

    async function loginFunc(e){
        e.preventDefault();
        let body = {
            userId : id,
            password: pw
        }
        if(!id){
          alert("ID를 확인해주세요");
        }else if(!pw){
          alert("PW를 확인해주세요");
        }else{
            console.log(body);
            dispatch(logIn(body))
            // navigator("/");
        }
      }

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
                            onChange={onIdChange}
                        />
                        <input
                            type='password'
                            name = 'userPassword'
                            id = 'pw'
                            onChange={onPwChange}
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