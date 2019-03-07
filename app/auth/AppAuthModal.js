import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import { SubmissionError } from "redux-form/immutable";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import AnonymousIcon from "@material-ui/icons/VisibilityOff";
import Form from "../app/forms/Form";
import Field from "../app/forms/FieldContainer";
import constants from "../../common/constants";
import facebookIcon from "../../static/img/facebook.svg";
import googleIcon from "../../static/img/google.svg";
import twitterIcon from "../../static/img/twitter.svg";
import fields from "../../common/forms/auth";

export const styles = theme => ({
  error: theme.main.error,
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  },
  credentialsPaper: {
    background: lighten(theme.palette.background.paper, 0.15),
    height: "100%",
    padding: "1rem 1rem 2rem"
  },
  credentialsLabel: {
    marginTop: "0.5rem",
    textAlign: "center"
  },
  anonymousButton: {
    width: "100%"
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
});

class AppAuthModal extends Form {
  static propTypes = {
    ...Form.propTypes,
    intl: intlShape,
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    providers: PropTypes.array.isRequired,
    onSetCookie: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired
  };

  static formName = "signInForm";

  static fields = fields;

  static async onSubmit(values, dispatch, props) {
    let result;

    if (props.getValue("isNewUser")) {
      result = await props.onSignUp(
        props.getValue("email"),
        props.getValue("password")
      );
    } else {
      result = await props.onSignIn(
        props.getValue("email"),
        props.getValue("password")
      );
    }

    if (result && _.isObject(result)) throw new SubmissionError(result);

    return result;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (prevState.isOpen !== nextProps.isOpen) {
      nextProps.dispatch(nextProps.change("isNewUser", false));
      nextProps.dispatch(nextProps.change("password", ""));
      nextProps.dispatch(nextProps.clearAsyncError());
      nextProps.dispatch(nextProps.clearSubmitErrors());
      state.isOpen = nextProps.isOpen;
    }

    return _.keys(state).length ? state : null;
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.handleAnonymous = this.handleAnonymous.bind(this);
    this.handleProvider = this.handleProvider.bind(this);
  }

  handleAnonymous() {
    this.props.onSignIn(null, null);
  }

  handleProvider(provider) {
    this.props.onSetCookie("redirect", window.location.pathname, 0.042);
    window.location.href = `${constants.apiBase}/oauth/${_.toLower(provider)}`;
  }

  renderButton(provider) {
    provider = _.toLower(provider);

    return (
      <Button
        variant="contained"
        color="default"
        classes={{ contained: this.props.classes[provider] }}
        disabled={
          this.props.submitting || !_.includes(this.props.providers, provider)
        }
        onClick={() => this.handleProvider(provider)}
      >
        <Hidden xsDown>
          <FormattedMessage id="APP_AUTH_SERVICE_BUTTON" />
        </Hidden>
        {provider === "facebook" && (
          <span
            dangerouslySetInnerHTML={{ __html: facebookIcon }}
            className={this.props.classes.serviceLogo}
          />
        )}
        {provider === "google" && (
          <span
            dangerouslySetInnerHTML={{ __html: googleIcon }}
            className={this.props.classes.serviceLogo}
          />
        )}
        {provider === "twitter" && (
          <span
            dangerouslySetInnerHTML={{ __html: twitterIcon }}
            className={this.props.classes.serviceLogo}
          />
        )}
        {_.upperFirst(provider)}
      </Button>
    );
  }

  render() {
    return (
      <Dialog maxWidth="sm" open={this.props.isOpen} onClose={_.noop}>
        <DialogTitle>
          <FormattedMessage id="APP_AUTH_TITLE" />
        </DialogTitle>
        {this.props.error && (
          <DialogContent>
            {_.map(
              _.isArray(this.props.error)
                ? this.props.error
                : [this.props.error],
              (error, index) => (
                <DialogContentText
                  key={`error-${index}`}
                  classes={{ root: this.props.classes.error }}
                >
                  {_.isArray(error) ? (
                    <FormattedMessage id={error[0]} values={error[1]} />
                  ) : (
                    <FormattedMessage id={error} />
                  )}
                </DialogContentText>
              )
            )}
          </DialogContent>
        )}
        <DialogContent>
          <Grid
            container
            spacing={16}
            justify="space-evenly"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={this.submit}
          >
            <Grid
              container
              spacing={16}
              direction="column"
              justify="center"
              item
              xs={12}
              sm={6}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  className={this.props.classes.anonymousButton}
                  disabled={this.props.submitting}
                  onClick={this.handleAnonymous}
                >
                  <AnonymousIcon />
                  &nbsp;&nbsp;
                  <FormattedMessage id="APP_AUTH_ANONYMOUS_BUTTON" />
                </Button>
              </Grid>
              <Grid item>
                {this.renderButton(constants.oauthProviders.FACEBOOK)}
              </Grid>
              <Grid item>
                {this.renderButton(constants.oauthProviders.GOOGLE)}
              </Grid>
              <Grid item>
                {this.renderButton(constants.oauthProviders.TWITTER)}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={this.props.classes.credentialsPaper}>
                <Grid container spacing={8} direction="column">
                  <Grid item>
                    <Typography
                      variant="h5"
                      className={this.props.classes.credentialsLabel}
                    >
                      <FormattedMessage id="APP_AUTH_CREDENTIALS_LABEL" />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Field
                      name="isNewUser"
                      type="checkbox"
                      color="default"
                      onSubmit={this.submit}
                    />
                  </Grid>
                  <Grid item>
                    <Field name="email" type="text" onSubmit={this.submit} />
                  </Grid>
                  <Grid item>
                    <Field
                      name="password"
                      type="password"
                      onSubmit={this.submit}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions classes={{ root: this.props.classes.actions }}>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.submit}
          >
            <FormattedMessage id="APP_AUTH_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AppAuthModal;
