import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import { makeStyles } from "@material-ui/styles";
import constants from "../../../common/constants";

const useStyles = makeStyles(theme => ({
  toastBox: {
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    "& button": {
      color: theme.palette.text.primary
    }
  },
  toastProgress: {
    background: theme.palette.secondary.main
  }
}));

function ToastProvider(props) {
  const classes = useStyles(props);

  useEffect(() => {
    const handleToastMessage = evt => {
      toast(
        <div>
          <h3>{evt.detail.title}</h3>
          <p>{evt.detail.content}</p>
        </div>,
        {
          position: evt.detail.position || toast.POSITION.TOP_RIGHT,
          autoClose: evt.detail.autoClose,
          className: classes.toastBox,
          progressClassName: classes.toastProgress
        }
      );
    };

    window.addEventListener(constants.events.TOAST, handleToastMessage);
    return () =>
      window.removeEventListener(constants.events.TOAST, handleToastMessage);
  }, []);

  return (
    <>
      <ToastContainer />
      {props.children}
    </>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default ToastProvider;
