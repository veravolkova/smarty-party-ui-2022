import React, { useState, useImperativeHandle } from "react";
import Button from "../Buttons/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Togglable = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button onClick={toggleVisibility} text={props.buttonLabel} />
      </div>
      <div style={showWhenVisible} className="togglableContent">
        {props.children}
        <div className={classes.content}>
          <Button onClick={toggleVisibility} text="cancel" />
        </div>
      </div>
    </div>
  );
});

Togglable.displayName = "Togglable";

export default Togglable;