import {
  // formatError,
  login,
  runLogoutTimer,
  saveTokenInLocalStorage,
  signUp,
} from "../../services/AuthService";
// import jwt from "jsonwebtoken";

export const SIGNUP_CONFIRMED_ACTION = "[signup action] confirmed signup";
export const SIGNUP_FAILED_ACTION = "[signup action] failed signup";
export const LOGIN_CONFIRMED_ACTION = "[login action] confirmed login";
export const LOGIN_FAILED_ACTION = "[login action] failed login";
export const LOADING_TOGGLE_ACTION = "[Loading action] toggle loading";
export const LOGOUT_ACTION = "[Logout action] logout action";

export function signupAction(userName, email, password, history) {
  return (dispatch) => {
    signUp(email, password, userName).then((response) => {
      const token = response;
      const [, payload] = token.split(".");
      const decodedPayload = JSON.parse(window.atob(payload));
      console.log("decodedPayload", decodedPayload);
      console.log("decodedPayload", decodedPayload.userId);
      console.log("decodedPayload", response);
      // saveTokenInLocalStorage(response);
      // runLogoutTimer(dispatch, response.data.expiresIn * 1000, history);
      localStorage.setItem("userDetails", JSON.stringify(response));
      // if (decodedPayload) {
      dispatch(confirmedSignupAction(decodedPayload.userId));
      // }
      history.push("/dashboard");
    });
  };
}

export function logout(history) {
  localStorage.removeItem("userDetails");
  history.push("/login");
  return {
    type: LOGOUT_ACTION,
  };
}

export function loginAction(email, password, history) {
  return (dispatch) => {
    login(email, password).then((response) => {
      const token = response;
      const [, payload] = token.split(".");
      const decodedPayload = JSON.parse(window.atob(payload));
      localStorage.setItem("userDetails", JSON.stringify(response));
      dispatch(loginConfirmedAction(decodedPayload.userId));
      history.push("/dashboard");
    });
  };
}

export function loginFailedAction(data) {
  return {
    type: LOGIN_FAILED_ACTION,
    payload: data,
  };
}

export function loginConfirmedAction(data) {
  console.log("wow3");
  console.log("wow3", data);
  return {
    type: LOGIN_CONFIRMED_ACTION,
    payload: data,
  };
}

export function confirmedSignupAction(payload) {
  console.log("wow");
  console.log("wow", payload);
  return {
    type: SIGNUP_CONFIRMED_ACTION,
    payload,
  };
}

export function signupFailedAction(message) {
  return {
    type: SIGNUP_FAILED_ACTION,
    payload: message,
  };
}

export function loadingToggleAction(status) {
  return {
    type: LOADING_TOGGLE_ACTION,
    payload: status,
  };
}
