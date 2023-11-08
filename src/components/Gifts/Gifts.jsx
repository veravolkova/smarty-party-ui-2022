import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AvailabilityFilter from "../AvailabilityFilter";
import GiftsTable from "../Tables/GiftsTable";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
  }
}));


const Gifts = ({ currentUser }) => {
  const gifts = useSelector((state) => state.gifts);
  const filter = useSelector((state) => state.filter);

  const classes = useStyles();

  if (!gifts && !currentUser && !filter) {
    return null;
  }

  return (
    <div>
      <div className={classes.container} >
        <Typography
          color="textPrimary"
          gutterBottom
          align="center"
          fontSize="2.5vh"
        > Gifts
        </Typography>
      </div>

      <div className={classes.container} >
        <AvailabilityFilter />
      </div>

      <Link to="/create">Suggest Gift</Link>

      <div>
        <GiftsTable
          gifts={gifts}
          currentUser={currentUser}
          filter={filter}
        />;
      </div>
    </div>
  );
};

export default Gifts;
