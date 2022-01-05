import { LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS } from "../../constants/actionTypes";

const INIT_STATE = {
  token: localStorage.getItem("auth_token"),
};

const AuthReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:{
      return {
        ...state,
        token: action.payload
      }
    }
    case LOGOUT_USER_SUCCESS:{
      return {
        ...state,
        token: null
      }
    }
    default:
      return { ...state };
  }
};

export default AuthReducers;
