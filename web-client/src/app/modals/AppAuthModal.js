import React, { useContext, useCallback } from "react";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import AnonymousIcon from "@material-ui/icons/VisibilityOff";
import { Form, Field, Status } from "../forms";
import constants from "../../../common/constants";
import facebookIcon from "../../../public/img/facebook.svg";
import googleIcon from "../../../public/img/google.svg";
import twitterIcon from "../../../public/img/twitter.svg";
import schema from "../../../common/forms/auth";
import { appOperations } from "../state";
import { UserContext } from "../providers/User";

const useStyles = makeStyles(theme => ({
  error: theme.main.error,
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  },
  credentialsPaper: {
    background: darken(theme.palette.background.paper, 0.15),
    height: "100%",
    padding: "1rem 1rem 2rem"
  },
  credentialsLabel: {
    marginTop: "0.5rem",
    textAlign: "center"
  },
  anonymousButton: {
    width: "100%",
    marginBottom: ["1rem", "!important"]
  },
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
    width: "100%",
    color: theme.palette.primary.contrastText,
    background: ["#3b5998", "!important"],
    "&:hover": {
      background: ["#1b3978", "!important"]
    }
  },
  google: {
    width: "100%",
    color: theme.palette.primary.contrastText,
    background: ["#dd4b39", "!important"],
    "&:hover": {
      background: ["#bd2b19", "!important"]
    }
  },
  twitter: {
    width: "100%",
    color: theme.palette.primary.contrastText,
    background: ["#38A1F3", "!important"],
    "&:hover": {
      background: ["#1881d3", "!important"]
    }
  }
}));

function AppAuthModal(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const user = useContext(UserContext);

  const handleProvider = useCallback(
    provider => dispatch(appOperations.linkProvider({ provider })),
    []
  );

  const handleClose = useCallback(
    () => dispatch(appOperations.hideAuthModal()),
    []
  );

  const submit = useCallback(
    async (
      { isNewUser, email, password },
      { setSubmitting, setErrors, setStatus }
    ) => {
      let result = isNewUser
        ? await dispatch(appOperations.signUp({ email, password }))
        : await dispatch(appOperations.signIn({ email, password }));
      if (result === true) {
        setSubmitting(false);
        dispatch(appOperations.hideAuthModal());
      } else {
        let { _status, ...errors } = result;
        setSubmitting(false);
        setErrors(errors);
        setStatus(_status);
      }
    },
    []
  );

  const renderForm = useCallback(
    ({ isSubmitting, status, handleSubmit }) => {
      const renderButton = provider => {
        const name = provider.toLowerCase();

        let isProviderEnabled = false;
        for (let item of user.providers) {
          if (name.toLowerCase() === item.name.toLowerCase()) {
            isProviderEnabled = true;
            break;
          }
        }

        return (
          <Button
            variant="contained"
            color="default"
            classes={{ contained: classes[name] }}
            disabled={isSubmitting || !isProviderEnabled}
            onClick={() => handleProvider(name)}
          >
            <Hidden xsDown>
              <FormattedMessage id="APP_AUTH_SERVICE_BUTTON" />
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
      };

      return (
        <Dialog maxWidth="sm" open onClose={handleClose}>
          <DialogTitle>
            <FormattedMessage id="APP_AUTH_TITLE" />
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={1}>
              <Grid
                container
                spacing={1}
                alignContent="center"
                item
                xs={12}
                sm={6}
              >
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.anonymousButton}
                    disabled={isSubmitting}
                    onClick={handleClose}
                  >
                    <AnonymousIcon />
                    &nbsp;&nbsp;
                    <FormattedMessage id="APP_AUTH_ANONYMOUS_BUTTON" />
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {renderButton(constants.oauthProviders.FACEBOOK)}
                </Grid>
                <Grid item xs={12}>
                  {renderButton(constants.oauthProviders.GOOGLE)}
                </Grid>
                <Grid item xs={12}>
                  {renderButton(constants.oauthProviders.TWITTER)}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.credentialsPaper}>
                  <Grid container spacing={1} direction="column">
                    <Grid item>
                      <Typography
                        variant="h5"
                        className={classes.credentialsLabel}
                      >
                        <FormattedMessage id="APP_AUTH_CREDENTIALS_LABEL" />
                      </Typography>
                    </Grid>
                    <Status error={status} classes={classes} />
                    <Grid item>
                      <Field name="isNewUser" type="checkbox" color="default" />
                    </Grid>
                    <Grid item>
                      <Field name="email" type="text" />
                    </Grid>
                    <Grid item>
                      <Field name="password" type="password" />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions classes={{ root: classes.actions }}>
            <Button
              variant="contained"
              color="secondary"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              <FormattedMessage id="APP_AUTH_SUBMIT" />
            </Button>
          </DialogActions>
        </Dialog>
      );
    },
    [classes, facebookIcon, googleIcon, twitterIcon]
  );

  return (
    <Form schema={schema} onSubmit={submit}>
      {renderForm}
    </Form>
  );
}

export default AppAuthModal;
