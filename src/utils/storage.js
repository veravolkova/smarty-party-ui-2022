import constants from "../utils/constants";

const saveUser = (user) =>
  window.localStorage.setItem(
    constants.STORAGE_KEY, JSON.stringify(user)
  );

const loadUser = () => window.localStorage.getItem(
  constants.STORAGE_KEY
);

const logoutUser = () => window.localStorage.removeItem(
  constants.STORAGE_KEY
);

export default {
  saveUser,
  loadUser,
  logoutUser,
};
