import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EditGift from "./components/EditGift";
import Gift from "./components/Gift";
import GiftForm from "./components/GiftForm";
import Gifts from "./components/Gifts";
import HomePage from "./components/pages/HomePage";
import User from "./components/User";
import Users from "./components/Users";

import Grid from "@material-ui/core/Grid";


const RouterProvider = ({ currentUser }) => {

  if (!currentUser) {
    return null;
  }

  return (
    <Switch>
      <Route path="/gifts/:id">
        <Grid item xs={8}>
          <Gift />
        </Grid>
      </Route>
      <Route exact path="/gifts">
        <Grid item xs={8}>
          <Gifts currentUser={currentUser} />
        </Grid>
      </Route>
      <Route path="/users/:id">
        <Grid item xs={8}>
          <User />
        </Grid>
      </Route>
      <Route path="/users">
        <Grid item xs={6}>
          <Users />
        </Grid>
      </Route>
      <Route path="/create">
        <Grid item xs={6}>
          <GiftForm currentUser={currentUser} />
        </Grid>
      </Route>
      <Route path="/edit/:id">
        <Grid item xs={6}>
          <EditGift />
        </Grid>
      </Route>
      <Route path="/">
        <Grid item xs={8}>
          <HomePage />
        </Grid>
      </Route>
    </Switch>
  );
};

export default RouterProvider;