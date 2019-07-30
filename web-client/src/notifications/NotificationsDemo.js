import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowIcon from "@material-ui/icons/ArrowRightAlt";

export const styles = () => ({
  layout: {
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    width: 300
  },
  row: {
    display: "flex",
    justifyContent: "center"
  },
  item: {
    width: "33%",
    fontSize: "200%",
    padding: "0.5rem"
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem"
  }
});

class NotificationsDemo extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    sendToast: PropTypes.func.isRequired
  };

  toast(position) {
    this.props.sendToast(
      position,
      "Lorem Ipsum!",
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
       ornare viverra sapien in cursus.`
    );
  }

  render() {
    return (
      <div className={this.props.classes.layout}>
        <Paper className={this.props.classes.paper}>
          <div className={this.props.classes.row}>
            <Button
              className={this.props.classes.item}
              onClick={() => this.toast(toast.POSITION.TOP_LEFT)}
            >
              <ArrowIcon style={{ transform: "rotate(-135deg)" }} />
            </Button>
            <Button
              className={this.props.classes.item}
              onClick={() => this.toast(toast.POSITION.TOP_CENTER)}
            >
              <ArrowIcon style={{ transform: "rotate(-90deg)" }} />
            </Button>
            <Button
              className={this.props.classes.item}
              onClick={() => this.toast(toast.POSITION.TOP_RIGHT)}
            >
              <ArrowIcon style={{ transform: "rotate(-45deg)" }} />
            </Button>
          </div>
          <div className={this.props.classes.label}>
            <Typography variant="overline">
              <FormattedMessage id="NOTIFICATIONS_LABEL" />
            </Typography>
          </div>
          <div className={this.props.classes.row}>
            <Button
              className={this.props.classes.item}
              onClick={() => this.toast(toast.POSITION.BOTTOM_LEFT)}
            >
              <ArrowIcon style={{ transform: "rotate(135deg)" }} />
            </Button>
            <Button
              className={this.props.classes.item}
              onClick={() => this.toast(toast.POSITION.BOTTOM_CENTER)}
            >
              <ArrowIcon style={{ transform: "rotate(90deg)" }} />
            </Button>
            <Button
              className={this.props.classes.item}
              onClick={() => this.toast(toast.POSITION.BOTTOM_RIGHT)}
            >
              <ArrowIcon style={{ transform: "rotate(45deg)" }} />
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default NotificationsDemo;
