import { request } from "../utils/axios";
import { SIGNUPUSER } from "../actions/types";

export const LOGIN = "USER/LOGIN";
export const LOGOUT = "USER/LOGOUT";
export const SINGUP = "USER/SIGNUP";

export const logIn = () => ({type:LOGIN});
export const logOut = () => ({type:LOGOUT});
export const singUp = () => ({type:SINGUP});

const initState = {
  test:"test"
}

const userSlice = (state = initState, action) => {
  switch (action.type){
    case LOGIN:
      console.log(action.userId)
      return{
        state
      }
      
    case LOGOUT:
      return{
        state
      };

    case SINGUP:
      return{
        state
      };

    case SIGNUPUSER:
      return{
        ...state,
        loginSuccess: action.payload
      };

    default:
      return state;
  }
}

export default userSlice;