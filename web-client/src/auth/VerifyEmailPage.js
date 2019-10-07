import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { appOperations } from "../app/state";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "100%",
    maxWidth: 700
  },
  title: {
    borderBottom: `1px dotted ${theme.palette.text.primary}`
  },
  error: theme.main.error
}));

function VerifyEmailPage(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const [message, setMessage] = useState(null);

  const doVerify = useCallback(async () => {
    setMessage(null);
    const success = await dispatch(
      appOperations.finishEmailVerification({ token: props.token })
    );
    if (success) return Router.push("/auth/profile");
    setMessage("VERIFY_FAILED_MESSAGE");
  }, []);

  return (
    <div className={classes.layout}>
      <div className={classes.form}>
        <Typography variant="h4" classes={{ root: classes.title }}>
          <FormattedMessage id="TITLE_VERIFY" />
        </Typography>
        {message && (
          <p className={classes.error}>
            <FormattedMessage id={message} />
          </p>
        )}
        <p>
          <FormattedMessage id="VERIFY_INTRO_MESSAGE" />
        </p>
        <Button variant="contained" color="primary" onClick={doVerify}>
          <FormattedMessage id="VERIFY_ACTION_BUTTON" />
        </Button>
      </div>
    </div>
  );
}

VerifyEmailPage.propTypes = {
  token: PropTypes.string
};

VerifyEmailPage.getInitialProps = ({ query: requestQuery }) => {
  return {
    token: requestQuery.token
  };
};

export default VerifyEmailPage;
