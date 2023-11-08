import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import Togglable from "../Togglable";
import Button from "../Buttons/Button";
import common from "../../utils/common";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Typography,
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapIcon: {
    verticalAlign: "middle",
    display: "inline-flex",
  },
  tableContainer: {
    maxHeight: 300,
    minHeight: 300,
    marginTop: "5vh",
    marginBottom: "5vh",
  },
  bottomButtons: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
  },
  comments: {
    alignItems: "center",
  },
}));

const Gift = () => {
  const classes = useStyles();
  const history = useHistory();

  // get gift and user

  const id = useParams().id;
  const gift = useSelector((state) => state.gifts.find((g) => g.id === id));
  const user = useSelector((state) => state.login);

  // check if user is allowed to edit gift

  const isEditingAllowed = (gift) => {
    return common.editingAllowed(gift, user);
  };

  if (!gift && !user) {
    return null;
  }

  return (
    <div>
      {gift && isEditingAllowed(gift) ? (
        <Typography variant="subtitle1" className={classes.wrapIcon}>
          <EditIcon color="secondary" />
          <Link to={`/edit/${gift.id}`}>edit</Link>
        </Typography>
      ) : (
        <></>
      )}
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">{gift.name}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{gift.url}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">{gift.description}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.bottomButtons}>
        <div className={classes.comments}>
          <Togglable buttonLabel="Open Comments">
            <></>
          </Togglable>
        </div>
        <Button onClick={() => history.goBack()} text="back" />
      </div>
    </div>
  );
};

export default Gift;
