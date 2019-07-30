import React from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import constants from "../../../common/constants";

export const styles = theme => ({
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
});

class ToastProvider extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
  };

  constructor(props) {
    super(props);

    this.handleToastMessage = this.handleToastMessage.bind(this);
  }

  componentDidMount() {
    window.addEventListener(constants.events.TOAST, this.handleToastMessage);
  }

  componentWillUnmount() {
    window.removeEventListener(constants.events.TOAST, this.handleToastMessage);
  }

  handleToastMessage(evt) {
    toast(
      <div>
        <h3>{evt.detail.title}</h3>
        <p>{evt.detail.content}</p>
      </div>,
      {
        position: evt.detail.position || toast.POSITION.TOP_RIGHT,
        autoClose: evt.detail.autoClose,
        className: this.props.classes.toastBox,
        progressClassName: this.props.classes.toastProgress
      }
    );
  }

  render() {
    return (
      <>
        <ToastContainer />
        {this.props.children}
      </>
    );
  }
}

export default ToastProvider;
