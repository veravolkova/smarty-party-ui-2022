import storage from "../utils/storage";
import { setNotification } from "./notification";

const loggedInUserJSON = JSON.parse(storage.loadUser());

const initialState = loggedInUserJSON ? loggedInUserJSON : null;

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case "LOGIN":
    return action.data;
  case "LOGOUT": {
    return null;
  }
  default:
    return state;
  }
};

export const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "LOGIN",
      data: user,
    });
    dispatch(setNotification(`Welcome, ${user.name}!`, "success", 10));
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export default loginReducer;
