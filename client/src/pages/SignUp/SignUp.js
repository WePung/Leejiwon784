import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigator = useNavigate();

    const onBack = () =>{
        navigator(-1);
    }
    return (
        <div className='signUpPage'>
            <div className='userInfoInputWrapper'>
                <form>
                    <div>
                    <p>아이디</p>
                    <input
                        type='text'
                        name='userId'
                        placeholder='아이디 조건'
                    />
                    </div>
                    <div>
                    <p>비밀번호</p>
                    <input
                        type='password'
                        name='password'
                        placeholder='비밀번호 조건'
                    />
                    </div>
                    <div>
                    <p>비밀번호 재확인</p>
                    <input
                        type='password'
                        name='passwordCheack'
                    />
                    </div>
                    <div>
                    <p>이름</p>
                    <input
                        type='text'
                        name='userName'
                        placeholder='이름을 적주세요'
                    />
                    </div>
                </form>
            </div>
            <div className='signUpBtnWrapper'>
                    <button>회원가입</button>
                    <button
                        onClick={onBack}
                    >뒤로가기
                    </button>
                </div>
        </div>
    );
};

export default SignUp;