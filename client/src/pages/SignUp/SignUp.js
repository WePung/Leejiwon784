import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({signUpTest}) => {
    const navigator = useNavigate();

    const onBack = () =>{
        navigator(-1);
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
                    />
                    </div>
                    <div>
                    <p>비밀번호</p>
                    <input
                        type='password'
                        name='password'
                        id = "password"
                        placeholder='비밀번호 조건'
                    />
                    </div>
                    <div>
                    <p>비밀번호 재확인</p>
                    <input
                        type='password'
                        name='passwordCheack'
                        id = "passwordCheack"
                    />
                    </div>
                    <div>
                    <p>이름</p>
                    <input
                        type='text'
                        name='userName'
                        id = "userName"
                        placeholder='이름을 적주세요'
                    />
                    <p>이메일</p>
                    <input
                        type='text'
                        name='email'
                        id = "email"
                        placeholder='이메일을 적주세요'
                    />
                    <p>성별</p>
                    <input
                        type='text'
                        name='gender'
                        id = "gender"
                        placeholder='성별을 적주세요'
                    />
                    <p>나이</p>
                    <input
                        type='text'
                        name='age'
                        id = "age"
                        placeholder='나이을 적주세요'
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