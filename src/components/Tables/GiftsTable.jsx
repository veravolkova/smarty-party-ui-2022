import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeAvailability, removeGift } from "../../reducers/gifts";
import { setNotification } from "../../reducers/notification";
import Button from "../Buttons/Button";
import common from "../../utils/common";
import availabilityLogic from "../../utils/availabilityLogic";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
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

const GiftsTable = ({ gifts, currentUser, filter }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  // reservation
  const handleAvailability = (gift, giftUser) => {
    const giftToChange = availabilityLogic.applyLogic(gift, giftUser);
    giftToChange
      ? dispatch(changeAvailability(giftToChange))
      : dispatch(setNotification("Availability change failed", "error", 5));
  };

  // removal
  const handleRemove = (gift) => {
    if (window.confirm("Do you want to remove this gift?")) {
      dispatch(removeGift(gift.id));
    }
  };

  // editing
  const isEditingAllowed = (gift) => {
    return common.editingAllowed(gift, currentUser);
  };

  // filtering
  const reservedByCurrentUser = () => {
    const giftWithUsers = gifts.filter((gift) => gift.users.length > 0);
    const result = [];
    giftWithUsers.map((gift) =>
      gift.users.map((user) => {
        if (user.id === currentUser.id) {
          result.push(gift);
        }
      })
    );
    return result;
  };

  const giftsToShow = () => {
    switch (filter) {
    case "All":
      return gifts;
    case "Reserved":
      return reservedByCurrentUser();
    case "Available":
      return gifts.filter((gift) => !gift.reserved);
    }
  };

  if (!gifts && !currentUser && !filter) {
    return null;
  }

  return (
    <TableContainer className={classes.tableContainer}>
      <Table>
        <TableBody>
          {giftsToShow().map((gift) => (
            <TableRow key={gift.id}>
              <TableCell>
                <Link to={`/gifts/${gift.id}`}>{gift.name}</Link>
              </TableCell>
              <TableCell padding="none">
                <div>
                  {gift.users &&
                    gift.users.map((user) => <p key={user.id}>{user.name}</p>)}
                </div>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleAvailability(gift, currentUser)}
                  text={
                    gift.reserved &&
                    gift.users.find((u) => u.id === currentUser.id)
                      ? "release"
                      : "reserve"
                  }
                />
              </TableCell>
              {isEditingAllowed(gift) ? (
                <TableCell>
                  <Button
                    onClick={() => {
                      handleRemove(gift);
                    }}
                    text={"Remove"}
                  />
                </TableCell>
              ) : (
                <></>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GiftsTable;
