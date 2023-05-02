export const LOGIN = "USER/LOGIN";
export const LOGOUT = "USER/LOGOUT";

export const logIn = () => ({type:LOGIN});
export const logOut = () => ({type:LOGOUT});

const initState = {
  test:"test"
}

const loginSclice = (state = initState, action) => {
  switch (action.type){
    case LOGIN:
      return{
        state
      }
    case LOGOUT:
      return{
        state
      };
    
    default:
      return state;
  }
}

export default loginSclice;