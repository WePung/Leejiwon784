import { combineReducers } from "redux";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  userSlice
});

export default rootReducer;