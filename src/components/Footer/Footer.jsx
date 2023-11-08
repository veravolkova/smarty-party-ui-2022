import React from "react";
import common from "../../utils/common";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
    position: "absolute",
    justifyContent: "center",
    bottom: "2%",
    fontSize: "10px",
    color: "#34013F",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.footer}>
      Smarty Party App, Vera Popova {common.getCurrentYear()}
    </Typography>
  );
};

export default Footer;
