import { createContext, useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import MyProfile from "./pages/MyProfile.js/MyProfile";
import Ranking from "./pages/Ranking/Ranking";
import SchoolList from "./pages/SchoolList/SchoolList";
import Promotion from "./pages/Promotion/Promotion";
import SignUp from "./pages/SignUp/SignUp";

function App() {

  
  const[todoList, setTodoList] = useState([{}]);
  const[inputText, setInputText] = useState("");
  const[isDone, setIsDone] = useState(false);

  const url = 'http://localhost:4000/api/userInfo';

  const fetchData = async() => {
    const res = await axios.get(url)
    setTodoList(res.data);
  }

  const handleInputText=(e)=>{
    setInputText(e.target.value);
  }

  const onDone = ()=>{
    if(!isDone){
      setIsDone(true)
    }else{
      setIsDone(false);
    }
  }

  const onSubmitHandle = async () =>{
   const userId = inputText;
   const password = isDone;
   await axios.post(url, {userId, password})
   fetchData();
    // fetch('http://localhost:4000/api/todo',
    // {
    //   method :'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body : JSON.stringify({
    //   text,
    //   done
    // })}
    // )
  }
 
  useEffect(()=>{
    fetchData();
    // fetch('http://localhost:4000/api/todo')
    // .then((res)=>res.json())
    // .then((data)=>setTodoList(data));
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/schoollist" element={<SchoolList />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;