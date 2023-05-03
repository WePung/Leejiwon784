import { SIGNUPUSER, LOGIN, LOGOUT } from "../actions/types";
import {produce} from "immer";

const initState = {
  me:null,
}

const userSlice = (state = initState, action) => {
  produce(state, draft => {
  switch (action.type){
    case LOGIN:
      draft.me = action.payload;
      break;

    case SIGNUPUSER:
      draft.me = action.payload;
      break;

    case LOGOUT:
      draft.me = action.payload;
      break;

    default:
      return state;
    }
  })
  return state;
}

export default userSlice;