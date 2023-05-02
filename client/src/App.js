import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { legacy_createStore as createStore} from 'redux';
import {logIn} from "./reducer/loginSlice";

import Login from "./pages/Login/Login";
import MyProfile from "./pages/MyProfile.js/MyProfile";
import SignUp from "./pages/SignUp/SignUp";
import Ranking from "./pages/Ranking/Ranking";
import Promotion from "./pages/Promotion/Promotion";
import SchoolDetail from "./pages/SchoolDetail/SchoolDetail";
import Schools from "./pages/Schools/Schools";
import SchoolInfos from "./components/SchoolInfos/SchoolInfos";
import Review from "./components/Review/Review";
import Traffic from "./components/Traffic/Traffic";
import Education from "./components/Education/Education";
import QnA from "./components/QnA/QnA";
import { useDispatch } from "react-redux";

export const UserDataContext = React.createContext(); //User 데이터 context
export const SchoolInfoContext = React.createContext(); //School 데이터 context

function App() {
  // 데이터 값
  const [userInfo, setuserInfo] = useState([]);
  const [schoolInfo ,setSchoolInfo] = useState([]);
  //새로운 아이디 고유 번호(임시)
  var nId = 3;
  // 로그인시 필요

  const dispatch = useDispatch();

  const fetchUserData = async() => {
    const res = await axios.get('http://localhost:4000/api/userInfo')
    setuserInfo(res.data);
  }

  const fetchSchooleInfo = async() => {
    const res = await axios.get('http://localhost:4000/api/schoolInfo')
    setSchoolInfo(res.data);
  }

  // 로그인
  async function LoginTest(e){
    e.preventDefault();
    const _id = document.getElementById('id').value
    const _pw = document.getElementById('pw').value
    if(!_id){
      alert("ID를 확인해주세요");
    }else if(!_pw){
      alert("PW를 확인해주세요");
    }else{
      const res = await axios.get('http://localhost:4000/api/userInfo')
      const resData = res.data;
      resData.map((it)=>{
        if(it.userId === _id){
          if(it.password === _pw){
            var action = {type:'LOGIN', data:{userId:_id, userPw:_pw, id:it.id, userName:it.userName}};
            dispatch(logIn());
          }
        }
      })
    }
  }

  // 회원가입
  const signUpTest = (e) =>{
    e.preventDefault();
    const _id = document.getElementById('id').value
    const _password = document.getElementById('password').value
    const _passwordCheack = document.getElementById('passwordCheack').value
    const _name = document.getElementById('userName').value
    const _email = document.getElementById('email').value
    const _gender = document.getElementById('gender').value
    const _age = document.getElementById('age').value
    if(!_id ||  !_password || !_passwordCheack || !_name || !_email || !_gender || !_age){
      alert("내용을 기입해주세요");
    }else{
      // const action = {type:'SIGNUP', data:{id:nId, userName:_name, userId:_id,userPw:_password, email:_email, gender:_gender, age:_age}};
      // store.dispatch(action);
      // nId++;
    }
  }

  const logOuttest = (e) =>{
    e.preventDefault();
  }
 
  useEffect(()=>{
    fetchUserData();
    fetchSchooleInfo();
  }, [])

  return (
    <div className="App">
      <UserDataContext.Provider value={userInfo}>
        <SchoolInfoContext.Provider value={schoolInfo}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login loginFunc={LoginTest} />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/signup" element={<SignUp signUpTest = {signUpTest}/>} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/schools" element={<Schools />} />
              <Route path="/promotion" element={<Promotion />} />
              <Route path="/schooldetail/:id" element={<SchoolDetail />} />
              <Route path="/schooldetail/:id/schoolinfos" element={<SchoolInfos />} />
              <Route path="/schooldetail/:id/reviews" element={<Review />} />
              <Route path="/schooldetail/:id/traffic" element={<Traffic />} />
              <Route path="/schooldetail/:id/education" element={<Education />} />
              <Route path="/schooldetail/:id/qna" element={<QnA />} />
            </Routes>
          </BrowserRouter>
        </SchoolInfoContext.Provider>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;