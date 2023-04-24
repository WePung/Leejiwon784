import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import MyProfile from "./pages/MyProfile.js/MyProfile";
import SignUp from "./pages/SignUp/SignUp";
import Ranking from "./pages/Ranking/Ranking";
import Promotion from "./pages/Promotion/Promotion";
import SchoolDetail from "./pages/SchoolDetail/SchoolDetail";
import Schools from "./pages/Schools/Schools";

const reducer = (state, action) => {
  let newState = [];

  return newState;
}


export const UserDataContext = React.createContext(); //User 데이터 context
export const SchoolInfoContext = React.createContext(); //School 데이터 context

function App() {

  const [userInfo, setuserInfo] = useState([]);
  const [schoolInfo ,setSchoolInfo] = useState([]);

  const fetchUserData = async() => {
    const res = await axios.get('http://localhost:4000/api/userInfo')
    setuserInfo(res.data);
  }

  const fetchSchooleInfo = async() => {
    const res = await axios.get('http://localhost:4000/api/schoolInfo')
    setSchoolInfo(res.data);
  }

  // const onSubmitHandle = async () =>{
  //  const userId = inputText;
  //  const password = isDone;
  //  await axios.post(url, {userId, password})
  //  fetchUserData();
  //   // fetch('http://localhost:4000/api/todo',
  //   // {
  //   //   method :'POST',
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   },
  //   //   body : JSON.stringify({
  //   //   text,
  //   //   done
  //   // })}
  //   // )
  // }
 
  useEffect(()=>{
    fetchUserData();
    fetchSchooleInfo();
    // fetch('http://localhost:4000/api/todo')
    // .then((res)=>res.json())
    // .then((data)=>setTodoList(data));
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
            </Routes>
          </BrowserRouter>
        </SchoolInfoContext.Provider>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;