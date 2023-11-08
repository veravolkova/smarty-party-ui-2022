import React from "react";
import { TextField } from "@material-ui/core";


export default function TextFieldMUI( props ) {
  const { label, type, id, value, name, onChange } = props;

  return <TextField
    label={label}
    type={type}
    id={id}
    value={value}
    name={name}
    onChange={onChange}
  />;
}
