import React from "react";
import { Button as ButtomMUI } from "@material-ui/core";

export default function Button( props ) {
  const { onClick, text } = props;

  return <ButtomMUI onClick={onClick} size="small">{text}</ButtomMUI>;

}
