import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Buttons/Button";
import TableCommon from "../Tables/TableCommon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
}));

const Users = () => {
  const classes = useStyles();

  const users = useSelector((state) => state.users);
  let history = useHistory();

  return (
    <div>
      <TableCommon title="Guest List" object={users} path="users" />
      <div className={classes.bottom}>
        <Button onClick={() => history.goBack()} text="back" />
      </div>
    </div>
  );
};

export default Users;
