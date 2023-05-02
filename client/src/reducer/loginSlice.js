export const LOGIN = "USER/LOGIN";
export const LOGOUT = "USER/LOGOUT";

export const logIn = (isLogin) => ({type:LOGIN, isLogin});
export const logOut = (isLogin) => ({type:LOGOUT, isLogin});

const isLoginState = {
  isLogin:false
};


const login = (state = isLoginState, action) => {
  switch (action.type){
    case LOGIN:
      return{
        ...state,
        isLogin: true
      }
    case LOGOUT:
      return{
        ...state,
        isLogin: false
      };
    
    default:
      return state;
  }
}

export default login;