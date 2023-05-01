import React,{ createContext, useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { legacy_createStore as createStore } from 'redux';

const loginState = {
    name: "",
    id: "",
    isLoading: false, // optional
    isLogin: null,
   };
  
  const Reducer = (state = loginState, action) => {  
    var newState = {};
  
    switch(action.type){
      // 로그인
        case 'LOGIN' : {
          console.log(`reducer로 받은 아이디는 ${action.userId}이고 비밀번호는 ${action.userPw} 고유 아이디번호는${action.id} 이름은 ${action.userName}`)
          newState = Object.assign({},state, {name:action.userName, id:action.id})
          console.log(newState)
          return newState;
        }
  
        // 로그아웃
  
        case 'LOGOUT':{
  
        }
  
        // 회원가입
        case 'CREATE' : {
          return
        }
        default:
          return newState
      }
      return newState
    };

export default Reducer;