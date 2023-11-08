import React, { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { initUsers } from "../../reducers/users";
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

const User = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initUsers());
  }, [dispatch]);

  const match = useRouteMatch("/users/:id");
  const user = match
    ? props.users.find((user) => user.id === match.params.id)
    : null;

  let history = useHistory();

  if (!user) {
    return null;
  }

  return (
    <div>
      <TableCommon
        title={`Gifts Reserved by${user.name}`}
        object={user.gifts}
        path="gifts"
      />
      <div className={classes.bottom}>
        <Button onClick={() => history.goBack()} text="back" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = {
  initUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
