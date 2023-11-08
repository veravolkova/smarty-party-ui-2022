import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import constants from "../../utils/constants";
import LinkButton from "../Buttons/LinkButton";
import { Button, ButtonGroup, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btnGroup: {
    flexGrow: 1,
  },
}));

const Navbar = ({ handleLogout }) => {
  const user = useSelector((state) => state.login);
  const classes = useStyles();

  const navLinks = constants.NAV_LINKS.map((navLink, i) => {
    return (
      <LinkButton
        key={i}
        to={navLink.path}
        text={navLink.name}
        className={classes.btn}
      />
    );
  });

  return (
    <div style={{ marginBottom: "15px" }}>
      <Toolbar>
        <ButtonGroup
          color="primary"
          aria-label="outlined primary button group"
          className={classes.btnGroup}
        >
          {navLinks}
        </ButtonGroup>
        {user ? (
          <Button
            color="inherit"
            size="small"
            component={Link}
            to="/logout"
            onClick={handleLogout}
          >
            logout
          </Button>
        ) : (
          <Button color="inherit" size="small" component={Link} to="/login">
            login
          </Button>
        )}
      </Toolbar>
    </div>
  );
};

Navbar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Navbar;
