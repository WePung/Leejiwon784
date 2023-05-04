import React,{ createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

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

function App() {
  // 데이터 값
  const [userInfo, setUserInfo] = useState([]);
  const [schoolInfo ,setSchoolInfo] = useState([]);

  const {me} = useSelector((state)=>state.userSlice);

  const fetchSchooleInfo = async() => {
    const res = await axios.get('http://localhost:4000/api/schoolInfo')
    setSchoolInfo(res.data);
  }

  const logOuttest = (e) =>{
    e.preventDefault();
  }
 
  useEffect(()=>{
    fetchSchooleInfo();
    console.log(me);
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