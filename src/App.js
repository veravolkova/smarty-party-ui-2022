import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import Footer from "./components/Footer";
import LoginPage from "./components/pages/LoginPage";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import RouterProvider from "./RouterProvider";
import userService from "./services/user";
import { logout } from "./reducers/login";
import { initGifts } from "./reducers/gifts";
import { initUsers } from "./reducers/users";
import mainBackground from "./static/images/pexels-balloons.jpg";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${mainBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: "90%",
    width: "100vw",
    minWidth: "100vw",
    height: "100vh",
    position: "fixed",
  },
}));

const App = (props) => {
  const classes = useStyles();

  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initGifts());
    dispatch(initUsers());
  }, []);

  useEffect(() => {
    userService.setUser(user);
    if (user) {
      userService.setToken(user.token);
    }
  }, [user]);

  const handleLogout = () => {
    userService.clearUser();
    dispatch(logout());
  };

  if (!user) {
    return <LoginPage />;
  }

  return (
    <div className={classes.root}>
      <Grid item xs={12} container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Navbar handleLogout={handleLogout} />
        </Grid>
        <Grid item xs={8}>
          <Notification />
        </Grid>
        <RouterProvider currentUser={user} />
        <Footer />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gifts: state.gifts,
    users: state.users,
  };
};

const mapDispatchToProps = {
  initGifts,
  initUsers,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
