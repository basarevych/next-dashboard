import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import { SubmissionError } from "redux-form/immutable";
import { withStyles } from "@material-ui/core/styles";
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
import red from "@material-ui/core/colors/red";
import AnonymousIcon from "@material-ui/icons/VisibilityOff";
import Form from "../Forms/Form";
import Field from "../Forms/Field";
import constants from "../../../common/constants";
import facebookIcon from "../../../static/img/facebook.svg";
import googleIcon from "../../../static/img/google.svg";
import twitterIcon from "../../../static/img/twitter.svg";

const styles = theme => ({
  paper: {
    background: theme.main.background
  },
  error: {
    color: red[500]
  },
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  },
  credentialsPaper: {
    height: "100%",
    padding: "1rem"
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
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    providers: PropTypes.array.isRequired,
    cookie: PropTypes.object.isRequired,
    onSignIn: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired
  };

  static formName = "signInForm";

  static fields = {
    isNewUser: {
      label: "APP_AUTH_NEW_USER_LABEL"
    },
    email: {
      normalize: "rows:1|remove:spaces",
      transform: "trim",
      validate: "required|email",
      label: "APP_AUTH_EMAIL_LABEL"
    },
    password: {
      validate: "required|password",
      label: "APP_AUTH_PASSWORD_LABEL"
    }
  };

  static async onSubmit(values, dispatch, props) {
    let result;

    if (this.getValue(props, "isNewUser") === "yes") {
      result = await props.onSignUp(
        this.getValue(props, "email"),
        this.getValue(props, "password")
      );
    } else {
      result = await props.onSignIn(
        this.getValue(props, "email"),
        this.getValue(props, "password")
      );
    }

    if (result && _.isObject(result)) {
      let errors = {};
      for (let field of _.keys(result)) {
        errors[field] = [];
        for (let message of result[field]) errors[field].push({ id: message });
      }

      throw new SubmissionError(errors);
    }

    return result;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};

    if (prevState.isOpen !== nextProps.isOpen) {
      nextProps.dispatch(nextProps.change("isNewUser", "no"));
      nextProps.dispatch(nextProps.change("password", ""));
      nextProps.dispatch(nextProps.clearAsyncError("_"));
      state.isOpen = nextProps.isOpen;
      state.errors = null;
    }

    if (nextProps.error && nextProps.error.has("_"))
      state.errors = nextProps.error.get("_");

    return _.keys(state).length ? state : null;
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
      errors: null
    };

    this.handleAnonymous = this.handleAnonymous.bind(this);
    this.handleProvider = this.handleProvider.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAnonymous() {
    this.props.onSignIn(null, null);
  }

  handleProvider(provider) {
    this.props.cookie.set("redirect", window.location.pathname, 0.042);
    window.location.href = `${constants.apiBase}/oauth/${_.toLower(provider)}`;
  }

  async handleSubmit() {
    this.setState({ errors: null });
    if (!(await super.submit()) && !this.state.errors)
      this.setState({ errors: ["APP_AUTH_FAILED"] });
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
      <Dialog
        maxWidth={"sm"}
        fullWidth
        classes={{ paper: this.props.classes.paper }}
        open={this.props.isOpen}
        onClose={_.noop}
      >
        <DialogTitle>
          <FormattedMessage id="APP_AUTH_TITLE" />
        </DialogTitle>
        {this.state.errors && (
          <DialogContent>
            {_.map(this.state.errors, (error, index) => (
              <DialogContentText
                key={`error-${index}`}
                classes={{ root: this.props.classes.error }}
              >
                <FormattedMessage id={error} />
              </DialogContentText>
            ))}
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
            onSubmit={this.handleSubmit}
          >
            <Grid
              container
              spacing={16}
              direction="column"
              justify="center"
              item
              xs={12}
              sm={5}
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
                  &nbsp;&nbsp;&nbsp;
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
            <Grid item xs={12} sm={7}>
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
                      formFields={this.constructor.fields}
                      formProps={this.props}
                      name="isNewUser"
                      type="checkbox"
                      color="default"
                      onSubmit={this.handleSubmit}
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      formFields={this.constructor.fields}
                      formProps={this.props}
                      name="email"
                      type="text"
                      onSubmit={this.handleSubmit}
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      formFields={this.constructor.fields}
                      formProps={this.props}
                      name="password"
                      type="password"
                      onSubmit={this.handleSubmit}
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
            onClick={this.handleSubmit}
          >
            <FormattedMessage id="APP_AUTH_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AppAuthModal);
