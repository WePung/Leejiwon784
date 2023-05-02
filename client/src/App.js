import React,{ createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { legacy_createStore as createStore} from 'redux';

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


export const UserDataContext = React.createContext(); //User 데이터 context
export const SchoolInfoContext = React.createContext(); //School 데이터 context
export const StoreContext = React.createContext(); // store기초 값

function App() {
  // 데이터 값
  const [userInfo, setuserInfo] = useState([{id: null,
    userId: null,
    password: null,
    userName: null,
    email: null,
    gender: null,
    age : null}]);
  const [schoolInfo ,setSchoolInfo] = useState([]);
  //새로운 아이디 고유 번호(임시)
  var nId = 3;

  const store = useContext(StoreContext);

  const fetchUserData = async() => {
    const res = await axios.get('http://localhost:4000/api/userInfo')
    setuserInfo(res.data);
  }

  const fetchSchooleInfo = async() => {
    const res = await axios.get('http://localhost:4000/api/schoolInfo')
    setSchoolInfo(res.data);
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
              <Route path="/login" element={<Login />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/signup" element={<SignUp />} />
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