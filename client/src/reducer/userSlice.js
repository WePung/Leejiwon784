import { SIGNUPUSER, LOGIN, LOGOUT } from "../actions/types";

const initState = {
  id: null,
  userId: null,
  password: null,
  userName: null,
  email: null,
  gender: null,
  age : null
}

const userSlice = (state = initState, action) => {
  switch (action.type){
    case LOGIN:
      console.log(state)
      return{
        ...state,
        state: action.payload,
      }
      
    case LOGOUT:
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