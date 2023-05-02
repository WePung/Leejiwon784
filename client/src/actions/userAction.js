import { SIGNUPUSER, LOGIN, LOGOUT} from "./types";
import { request } from "../utils/axios";

const userUrl = "/api/userInfo";
const schoolUrl = "/api/schoolInfo"

export function signUpUser(dataToSubmit) {
  const data = request("POST", userUrl + "/signUp", dataToSubmit);
  return {
    type: SIGNUPUSER,
    payload: data,
  };
}

export function logIn(dataToLogin){
  const data = request("POST", userUrl + "/login", dataToLogin);
  return{
    type: LOGIN,
    payload: data,
  }
}

export function logOut(){
    return{
        type: LOGOUT,
        
    }
}