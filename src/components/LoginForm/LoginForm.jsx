import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/login";
import loginService from "../../services/login";
import { setNotification } from "../../reducers/notification";
import storage from "../../utils/storage";
import { Button, TextField } from "@material-ui/core";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    loginService
      .login({
        username: username,
        password: password,
      })
      .then((user) => {
        storage.saveUser(user);
        setUsername("");
        setPassword("");
        dispatch(login(user));
      })
      .catch(() => {
        dispatch(setNotification("wrong username/password", "error", 5));
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <TextField
            label="username"
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <TextField
            label="password"
            id="password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <Button type="submit" id="login-button">
          login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
