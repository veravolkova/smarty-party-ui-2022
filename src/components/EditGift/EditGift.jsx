import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateGift } from "../../reducers/gifts";
import LinkButton from "../Buttons/LinkButton";
import TextFieldMUI from "../FormElements/TextFieldMUI";
import { Box, Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const EditGift = () => {
  const classes = useStyles();

  // get gift

  const id = useParams().id;
  const gift = useSelector((state) => state.gifts.find((g) => g.id === id));

  // set form values

  const [values, setValues] = useState({
    name: gift.name ? gift.name : "",
    description: gift.description ? gift.description : "",
    url: gift.url ? gift.url : "",
  });

  // handle input

  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatchGiftEntry = (gift) => {
    dispatch(updateGift(gift));
  };

  const changedGift = {
    ...gift,
    name: values.name,
    description: values.description,
    url: values.url,
    users: gift.users.map((u) => u.id),
  };

  const editGiftEntry = (event) => {
    event.preventDefault();
    dispatchGiftEntry(changedGift);
    history.push("/gifts");
    setValues({
      name: "",
      description: "",
      url: "",
    });
  };

  if (!gift) {
    return null;
  }

  const textFields = Object.keys(values).map((key, index) => {
    return (
      <Box mb={2} key={index}>
        <TextFieldMUI
          key={index}
          label={key}
          type="text"
          id={key}
          value={values[key]}
          name={key}
          onChange={handleInputChange}
        />
      </Box>
    );
  });

  return (
    <div className={classes.root}>
      <Grid item xs={12} container justify="center">
        <Grid item xs={8}>
          <Typography>Edit Gift</Typography>
        </Grid>
        <Grid item xs={8}>
          <form onSubmit={editGiftEntry} autoComplete="off">
            <div>
              {textFields}
              <Button type="submit">save</Button>
              <LinkButton to="/gifts" text="back" />
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditGift;