import storage from "../utils/storage";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getToken = () => {
  return {
    headers: { Authorization: token },
  };
};

const setUser = (user) => {
  storage.saveUser(user);
};

const getUser = () => {
  const loggedUserJSON = JSON.parse(storage.loadUser());
  if (loggedUserJSON) {
    const user = loggedUserJSON;
    token = user.token;
    return user;
  }

  return null;
};

const clearUser = () => {
  storage.logoutUser();
  token = null;
};

export default {
  setToken,
  setUser,
  getToken,
  getUser,
  clearUser,
};
