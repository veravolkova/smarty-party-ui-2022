import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import mainBackground from "../../../static/images/pexels-balloons.jpg";
import LoginForm from "../../LoginForm/LoginForm";
import Notification from "../../Notification";

const useStyles = makeStyles((theme) => ({
  loginMain: {
    backgroundImage: `url(${mainBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: "90%",
    width: "100vw",
    minWidth: "100vw",
    height: "100vh",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContent: {
    marginBottom: "5%",
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.loginMain}>
        <Notification />
        <div className={classes.loginContent}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
