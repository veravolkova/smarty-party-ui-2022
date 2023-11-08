import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  alert: {
    position: "fixed",
    left: "0px",
    top: "8%",
    margin: "0 10%",
    width: "80%",
  },
});

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const classes = useStyles();

  if (!notification.message) {
    return null;
  }

  return (
    <div className="flash-messages">
      <Alert
        id="alert"
        variant="outlined"
        severity={notification.messageType}
        className={classes.alert}
      >
        {notification.message}
      </Alert>
    </div>
  );
};

export default Notification;
