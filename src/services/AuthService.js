import axios from "axios";
import swal from "sweetalert";
import { loginConfirmedAction, logout } from "../store/actions/AuthActions";

export function signUp(email, userName, password) {
  // return fetch(
  // "https://us-central1-one-of-many-c94a4.cloudfunctions.net/api/auth/n",
  // {
  //   mode: "no-cors",
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     userName: userName,
  //     email: email,
  //     password: password,
  //   }),
  // };

  const data = {
    email: email,
    password: password,
    userName: userName,
  };

  const datas = axios
    .post(
      "https://us-central1-mentor-app-8b6bf.cloudfunctions.net/api/auth/n",
      data
    )
    .then((response) => {
      console.log("Response:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });

  return datas;
}

export function login(email, password) {
  const postData = {
    email,
    password,
  };

  const data = axios
    .post(
      "https://us-central1-mentor-app-8b6bf.cloudfunctions.net/api/auth/login",
      postData
    )
    .then((response) => {
      console.log("Response:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });

  return data;
}

export function formatError(errorResponse) {
  switch (errorResponse.error.message) {
    case "EMAIL_EXISTS":
      //return 'Email already exists';
      swal("Oops", "Email already exists", "error");
      break;
    case "EMAIL_NOT_FOUND":
      //return 'Email not found';
      swal("Oops", "Email not found", "error", { button: "Try Again!" });
      break;
    case "INVALID_PASSWORD":
      //return 'Invalid Password';
      swal("Oops", "Invalid Password", "error", { button: "Try Again!" });
      break;
    case "USER_DISABLED":
      return "User Disabled";

    default:
      return "";
  }
}

export function saveTokenInLocalStorage(tokenDetails) {
  tokenDetails.expireDate = new Date(
    new Date().getTime() + tokenDetails.expiresIn * 1000
  );
  localStorage.setItem("userDetails", JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, history) {
  setTimeout(() => {
    dispatch(logout(history));
  }, timer);
}

export function checkAutoLogin(dispatch, history) {
  const tokenDetailsString = localStorage.getItem("userDetails");
  let tokenDetails = "";
  if (!tokenDetailsString) {
    dispatch(logout(history));
    return;
  }

  tokenDetails = JSON.parse(tokenDetailsString);
  let expireDate = new Date(tokenDetails.expireDate);
  let todaysDate = new Date();

  if (todaysDate > expireDate) {
    dispatch(logout(history));
    return;
  }
  dispatch(loginConfirmedAction(tokenDetails));

  const timer = expireDate.getTime() - todaysDate.getTime();
  runLogoutTimer(dispatch, timer, history);
}
