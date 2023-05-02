import { SIGNUPUSER } from "./types";
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

export function logInUser(dataToSubmit) {
  const data = request("POST", userUrl)
}