import React from "react";
import Header from "../../Header";
import ConfettiAnim from "../../ConfettiAnim";
import brthGirl from "../../../static/images/birthday-girl.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "500px",
    height: "100px",
  },
  pic: {
    borderRadius: "80%",
    marginTop: "10px",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Header />
        <img
          className={classes.pic}
          src={brthGirl}
          alt="birthday-girl"
          width={430}
          height={450}
        />
      </div>
      <ConfettiAnim />
    </div>
  );
};

export default HomePage;
