import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import HeaderBar from "./header/HeaderBar";
import { appSelectors } from "../state";

const useStyles = makeStyles(() => ({
  spacer: {
    height: "2rem"
  },
  wrapper: {
    zIndex: 1400,
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    height: 10
  },
  smallWrapper: {
    zIndex: 1400,
    alignSelf: "stretch"
  }
}));

function Header(props) {
  const classes = useStyles(props);

  const user = useSelector(appSelectors.getUser);
  const isAuthenticated = user ? user.isAuthenticated : false;

  const [isVisible, setIsVisible] = useState(false);

  const handleWrapperMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleWrapperMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      <Hidden smUp initialWidth="lg">
        <div className={classes.smallWrapper}>
          <HeaderBar
            withShadow={false}
            isVisible={true}
            isAuthenticated={isAuthenticated}
            onSidebarToggle={props.onSidebarToggle}
            onClose={handleClose}
          />
        </div>
      </Hidden>
      <Hidden xsDown initialWidth="lg">
        <div
          className={classes.wrapper}
          onMouseEnter={handleWrapperMouseEnter}
          onMouseLeave={handleWrapperMouseLeave}
        >
          <HeaderBar
            withShadow={true}
            isVisible={isVisible}
            isAuthenticated={isAuthenticated}
            onSidebarToggle={props.onSidebarToggle}
            onClose={handleClose}
          />
        </div>
        <div className={classes.spacer} />
      </Hidden>
    </>
  );
}

Header.propTypes = {
  onSidebarToggle: PropTypes.func.isRequired
};

export default Header;
