import React from "react";
import common from "../../utils/common";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  text: {
    color: "#34013F",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div id="mainTitle">
      <Typography variant="h4" component="h5" className={classes.text}>
        <strong>Liza&apos;s Birthday 26.02.{common.getCurrentYear()}</strong>
      </Typography>
    </div>
  );
}
