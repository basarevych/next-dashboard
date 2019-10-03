import React from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowIcon from "@material-ui/icons/ArrowRightAlt";
import { appOperations } from "../app/state";

const useStyles = makeStyles(() => ({
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
}));

function NotificationsPage(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const sendToast = position => {
    dispatch(
      appOperations.sendToast({
        position,
        title: "Lorem Ipsum!",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare viverra sapien in cursus."
      })
    );
  };

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <div className={classes.row}>
          <Button
            className={classes.item}
            onClick={() => sendToast(toast.POSITION.TOP_LEFT)}
          >
            <ArrowIcon style={{ transform: "rotate(-135deg)" }} />
          </Button>
          <Button
            className={classes.item}
            onClick={() => sendToast(toast.POSITION.TOP_CENTER)}
          >
            <ArrowIcon style={{ transform: "rotate(-90deg)" }} />
          </Button>
          <Button
            className={classes.item}
            onClick={() => sendToast(toast.POSITION.TOP_RIGHT)}
          >
            <ArrowIcon style={{ transform: "rotate(-45deg)" }} />
          </Button>
        </div>
        <div className={classes.label}>
          <Typography variant="overline">
            <FormattedMessage id="NOTIFICATIONS_LABEL" />
          </Typography>
        </div>
        <div className={classes.row}>
          <Button
            className={classes.item}
            onClick={() => sendToast(toast.POSITION.BOTTOM_LEFT)}
          >
            <ArrowIcon style={{ transform: "rotate(135deg)" }} />
          </Button>
          <Button
            className={classes.item}
            onClick={() => sendToast(toast.POSITION.BOTTOM_CENTER)}
          >
            <ArrowIcon style={{ transform: "rotate(90deg)" }} />
          </Button>
          <Button
            className={classes.item}
            onClick={() => sendToast(toast.POSITION.BOTTOM_RIGHT)}
          >
            <ArrowIcon style={{ transform: "rotate(45deg)" }} />
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default NotificationsPage;
