import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";


export default function LinkButton( props ) {
  const { to, text } = props;

  return <Button
    color="inherit"
    size="small"
    component={Link}
    to={to}
    style={{
      border: "none"
    }}
  >
    {text}
  </Button>;

}
