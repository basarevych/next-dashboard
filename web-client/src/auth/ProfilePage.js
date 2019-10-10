import React, { useContext, useState, useCallback } from "react";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import { Form, Field, Status } from "../app/forms";
import schema from "../../common/forms/profile";
import ConfirmModal from "../app/modals/ConfirmModal";
import facebookIcon from "../../public/img/facebook.svg";
import googleIcon from "../../public/img/google.svg";
import twitterIcon from "../../public/img/twitter.svg";
import { appOperations } from "../app/state";
import { UserContext } from "../app/providers/User";
import useTimer from "../app/lib/useTimer";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  profile: {
    padding: theme.spacing(2),
    width: "100%",
    maxWidth: 700
  },
  destroyButton: {
    background: red[500]
  },
  title: {
    borderBottom: `1px dotted ${theme.palette.text.secondary}`
  },
  error: theme.main.error,
  info: theme.main.info,
  serviceLogo: {
    marginLeft: "0.5em",
    marginRight: "0.5em",
    verticalAlign: "middle",
    "& svg": {
      height: "1.8em",
      fill: "currentColor",
      verticalAlign: "middle"
    }
  },
  facebook: {
    margin: "1rem",
    color: theme.palette.primary.contrastText,
    background: ["#3b5998", "!important"],
    "&:hover": {
      background: ["#1b3978", "!important"]
    }
  },
  google: {
    margin: "1rem",
    color: theme.palette.primary.contrastText,
    background: ["#dd4b39", "!important"],
    "&:hover": {
      background: ["#bd2b19", "!important"]
    }
  },
  twitter: {
    margin: "1rem",
    color: theme.palette.primary.contrastText,
    background: ["#38A1F3", "!important"],
    "&:hover": {
      background: ["#1881d3", "!important"]
    }
  }
}));

function ProfilePage(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const [message, setMessage] = useState(null);
  const [messageTimeout, setMessageTimeout] = useState(0);
  const isMessageShown = useTimer(messageTimeout);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const user = useContext(UserContext);

  const showMessage = useCallback(message => {
    setMessage(message);
    setMessageTimeout(0);
    setMessageTimeout(10000);
  }, []);

  const save = useCallback(
    async (
      { name, email, password1 },
      { setSubmitting, setFieldValue, setErrors, setStatus }
    ) => {
      let result = await dispatch(
        appOperations.updateProfile({
          name: name || null,
          email,
          password: password1
        })
      );
      if (result === true) {
        setSubmitting(false);
        setFieldValue("password1", "");
        setFieldValue("password2", "");
        showMessage("PROFILE_SAVE_SUCCESS");
      } else {
        let { _status, ...errors } = result;
        setSubmitting(false);
        setErrors(errors);
        setStatus(_status);
      }
    },
    []
  );

  const verify = useCallback(async () => {
    let success = await dispatch(appOperations.requestEmailVerification());
    showMessage(success ? "PROFILE_VERIFY_SUCCESS" : "OPERATION_FAILED");
  }, []);

  const link = useCallback(async provider => {
    let success = await dispatch(appOperations.linkProvider({ provider }));
    showMessage(success ? "PROFILE_LINK_SUCCESS" : "OPERATION_FAILED");
  }, []);

  const unlink = useCallback(async provider => {
    let success = await dispatch(appOperations.unlinkProvider({ provider }));
    showMessage(success ? "PROFILE_UNLINK_SUCCESS" : "OPERATION_FAILED");
  }, []);

  const destroy = useCallback(() => {
    setIsConfirmOpen(true);
  }, []);

  const handleCancelDelete = useCallback(() => {
    setIsConfirmOpen(false);
  }, []);

  const handleConfirmDelete = useCallback(async () => {
    setIsConfirmOpen(false);
    if (await dispatch(appOperations.deleteProfile())) Router.push("/");
  }, []);

  const renderForm = useCallback(
    ({ isSubmitting, status, handleSubmit }) => {
      const services = user.providers.map(provider => {
        const name = provider.name.toLowerCase();
        const isLinked = provider.isLinked;

        return (
          <Button
            key={name}
            variant="contained"
            color="default"
            classes={{ contained: classes[name] }}
            disabled={isSubmitting}
            onClick={() => (isLinked ? unlink(name) : link(name))}
          >
            <Hidden xsDown>
              <FormattedMessage
                id={isLinked ? "PROFILE_UNLINK_BUTTON" : "PROFILE_LINK_BUTTON"}
              />
            </Hidden>
            {name === "facebook" && (
              <span
                dangerouslySetInnerHTML={{ __html: facebookIcon }}
                className={classes.serviceLogo}
              />
            )}
            {name === "google" && (
              <span
                dangerouslySetInnerHTML={{ __html: googleIcon }}
                className={classes.serviceLogo}
              />
            )}
            {name === "twitter" && (
              <span
                dangerouslySetInnerHTML={{ __html: twitterIcon }}
                className={classes.serviceLogo}
              />
            )}
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Button>
        );
      });

      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" classes={{ root: classes.title }}>
              <FormattedMessage id="TITLE_PROFILE" />
            </Typography>
          </Grid>
          <Hidden xsDown>
            <Grid item xs={12} container justify="space-between">
              {services}
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={12} container justify="center">
              {services}
            </Grid>
          </Hidden>
          <Status
            error={status}
            message={isMessageShown ? message : null}
            classes={classes}
          />
          <Hidden xsDown>
            <Grid item sm={6}>
              <Field name="name" type="text" />
            </Grid>
            <Grid item sm={6}>
              <Field name="password1" type="password" />
            </Grid>
            <Grid item sm={6}>
              <Field name="email" type="text" />
            </Grid>
            <Grid item sm={6}>
              <Field name="password2" type="password" />
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={12}>
              <Field name="name" type="text" />
            </Grid>
            <Grid item xs={12}>
              <Field name="email" type="text" />
            </Grid>
            <Grid item xs={12}>
              <Field name="password1" type="password" />
            </Grid>
            <Grid item xs={12}>
              <Field name="password2" type="password" />
            </Grid>
          </Hidden>
          <Grid item xs={12} container justify="space-between">
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              <FormattedMessage id="PROFILE_SAVE_BUTTON" />
            </Button>
            <Button
              variant="contained"
              color="inherit"
              className={classes.destroyButton}
              disabled={isSubmitting}
              onClick={destroy}
            >
              <FormattedMessage id="PROFILE_DESTROY_BUTTON" />
            </Button>
          </Grid>
          {!user.isEmailVerified && (
            <Grid item xs={12} container justify="flex-start">
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={verify}
              >
                <FormattedMessage id="PROFILE_VERIFY_BUTTON" />
              </Button>
            </Grid>
          )}
        </Grid>
      );
    },
    [classes, user, isMessageShown, message]
  );

  if (!user || !user.isAuthenticated) return null;

  return (
    <div className={classes.layout}>
      <Paper className={classes.profile}>
        <Form
          schema={schema}
          initialValues={user}
          onSubmit={save}
          render={renderForm}
        />

        {isConfirmOpen && (
          <ConfirmModal
            title="DELETE_PROFILE_TITLE"
            text="DELETE_PROFILE_TEXT"
            cancel="DELETE_PROFILE_CANCEL"
            submit="DELETE_PROFILE_SUBMIT"
            onCancel={handleCancelDelete}
            onSubmit={handleConfirmDelete}
          />
        )}
      </Paper>
    </div>
  );
}

export default ProfilePage;
