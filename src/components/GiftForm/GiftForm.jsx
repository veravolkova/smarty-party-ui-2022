import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextFieldMUI from "../FormElements/TextFieldMUI";
import LinkButton from "../Buttons/LinkButton";
import { useDispatch } from "react-redux";
import { createGift } from "../../reducers/gifts";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const GiftForm = ({ currentUser }) => {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  // set values

  const [values, setValues] = useState({ name: "", description: "", url: "" });

  // handle values change

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatchGiftEntry = (giftObject) => {
    dispatch(createGift(giftObject));
  };

  const addGiftEntry = (event) => {
    event.preventDefault();
    dispatchGiftEntry({
      name: values.name,
      description: values.description,
      url: values.url,
      reserved: true,
      user: currentUser.id,
    });
    history.push("/gifts");
    setValues({ name: "", description: "", url: "" });
  };

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
          <Typography>Create a new entry</Typography>
        </Grid>
        <Grid item xs={8}>
          <form onSubmit={addGiftEntry} autoComplete="off">
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

export default GiftForm;