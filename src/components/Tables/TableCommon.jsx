import React from "react";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    maxHeight: 300,
    minHeight: 300,
    marginTop: "5vh",
    marginBottom: "5vh",
  },
}));

const TableCommon = ({ title, object, path }) => {
  const classes = useStyles();

  if (!title && !object  && !path) {
    return null;
  }

  return (
    <TableContainer className={classes.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">{title}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow></TableRow>
          {object.map((el) => (
            <TableRow key={el.id}>
              <TableCell align="center">
                <Link to={`/${path}/${el.id}`}>{el.name}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCommon;
