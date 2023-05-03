import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signUpUser } from '../../actions/userAction';

const SignUp = (props) => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const navigator = useNavigate();

    const dispatch = useDispatch();

    const onIdHandler = (e) => {
        setId(e.target.value)
    };

    const onPwHandler = (e) => {
        setPw(e.target.value)
    };

    const onpwCheckHandler = (e) => {
        setPwCheck(e.target.value);
    }

    const onNameHandler = (e) => {
        setName(e.target.value)
    };

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    };

    const onGenderHandler = (e) => {
        setGender(e.target.value)
    };

    const onAgeHandler = (e) => {
        setAge(e.target.value)
    };

    const onBack = () =>{
        navigator(-1);
    }
  // 회원가입
  const signUpTest = (e) =>{
    e.preventDefault();
    let body = {
        userId : id,
        userName : name,
        password : pw,
        email : email,
        gender : gender,
        age : age
    }
    if(id ||  pw || pwCheck || name || email || gender || age){
        if(pw === pwCheck){
            console.log(body)
            dispatch(signUpUser(body))
            navigator("/login");
        }else{
            alert("비밀번호가 일치하지 않습니다.");
        }
    }else{
        alert("빈칸을 확인해주세요.");
    }
    
  }

    return (
        <div className='signUpPage'>
            <div className='userInfoInputWrapper'>
                <form onSubmit={signUpTest}>
                    <div>
                    <p>아이디</p>
                    <input
                        type='text'
                        name='userId'
                        id = "id"
                        placeholder='아이디 조건'
                        onChange={onIdHandler}
                    />
                    </div>
                    <div>
                    <p>비밀번호</p>
                    <input
                        type='password'
                        name='password'
                        id = "password"
                        placeholder='비밀번호 조건'
                        onChange={onPwHandler}
                    />
                    </div>
                    <div>
                    <p>비밀번호 재확인</p>
                    <input
                        type='password'
                        name='passwordCheack'
                        id = "passwordCheack"
                        onChange={onpwCheckHandler}
                    />
                    </div>
                    <div>
                    <p>이름</p>
                    <input
                        type='text'
                        name='userName'
                        id = "userName"
                        placeholder='이름을 적주세요'
                        onChange={onNameHandler}
                    />
                    <p>이메일</p>
                    <input
                        type='text'
                        name='email'
                        id = "email"
                        placeholder='이메일을 적주세요'
                        onChange={onEmailHandler}
                    />
                    <p>성별</p>
                    <input
                        type='text'
                        name='gender'
                        id = "gender"
                        placeholder='성별을 적주세요'
                        onChange={onGenderHandler}
                    />
                    <p>나이</p>
                    <input
                        type='text'
                        name='age'
                        id = "age"
                        placeholder='나이을 적주세요'
                        onChange={onAgeHandler}
                    />
                    </div>
                    <div className='signUpBtnWrapper'>
                    <input type='submit' value="회원가입" />
                    <button
                        onClick={onBack}
                    >뒤로가기
                    </button>
                </div>
                </form>
            </div>
            
        </div>
    );
};

export default SignUp;