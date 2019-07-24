import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import { lighten } from "@material-ui/core/styles/colorManipulator";
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
import { Form, Field } from "../forms";
import constants from "../../../common/constants";
import facebookIcon from "../../../static/img/facebook.svg";
import googleIcon from "../../../static/img/google.svg";
import twitterIcon from "../../../static/img/twitter.svg";
import fields from "../../../common/forms/auth";

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
});

class AppAuthModal extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    apiServer: PropTypes.string.isRequired,
    onLink: PropTypes.func.isRequired,
    onSignIn: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  async submit(
    { isNewUser, email, password },
    { setSubmitting, setErrors, setStatus }
  ) {
    let result = isNewUser
      ? await this.props.onSignUp(email, password)
      : await this.props.onSignIn(email, password);
    if (result === true) {
      setSubmitting(false);
      this.props.onClose();
    } else {
      let { _status, ...errors } = result;
      setSubmitting(false);
      setErrors(errors);
      setStatus(_status);
    }
  }

  isEnabledProvider(provider) {
    for (let item of this.props.user.providers)
      if (_.toLower(provider) === _.toLower(item.name)) return true;
    return false;
  }

  renderButton(provider, submitting) {
    provider = _.toLower(provider);

    return (
      <Button
        variant="contained"
        color="default"
        classes={{ contained: this.props.classes[provider] }}
        disabled={submitting || !this.isEnabledProvider(provider)}
        onClick={() => this.props.onLink(provider)}
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
      <Form
        fields={fields}
        initialValues={{ isNewUser: false }}
        onSubmit={this.submit}
        render={({ isSubmitting, status, handleSubmit }) => (
          <Dialog maxWidth="sm" open onClose={this.props.onClose}>
            <DialogTitle>
              <FormattedMessage id="APP_AUTH_TITLE" />
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={1} justify="space-evenly">
                <Grid
                  container
                  spacing={1}
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
                      disabled={isSubmitting}
                      onClick={this.props.onClose}
                    >
                      <AnonymousIcon />
                      &nbsp;&nbsp;
                      <FormattedMessage id="APP_AUTH_ANONYMOUS_BUTTON" />
                    </Button>
                  </Grid>
                  <Grid item>
                    {this.renderButton(
                      constants.oauthProviders.FACEBOOK,
                      isSubmitting
                    )}
                  </Grid>
                  <Grid item>
                    {this.renderButton(
                      constants.oauthProviders.GOOGLE,
                      isSubmitting
                    )}
                  </Grid>
                  <Grid item>
                    {this.renderButton(
                      constants.oauthProviders.TWITTER,
                      isSubmitting
                    )}
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={this.props.classes.credentialsPaper}>
                    <Grid container spacing={1} direction="column">
                      <Grid item>
                        <Typography
                          variant="h5"
                          className={this.props.classes.credentialsLabel}
                        >
                          <FormattedMessage id="APP_AUTH_CREDENTIALS_LABEL" />
                        </Typography>
                      </Grid>
                      {!!status && (
                        <Grid item>
                          {_.map(
                            _.isArray(status) ? status : [status],
                            (error, index) => (
                              <div
                                key={`error-${index}`}
                                className={this.props.classes.error}
                              >
                                {_.isArray(error) ? (
                                  <FormattedMessage
                                    id={error[0]}
                                    values={error[1]}
                                  />
                                ) : (
                                  <FormattedMessage id={error} />
                                )}
                              </div>
                            )
                          )}
                        </Grid>
                      )}
                      <Grid item>
                        <Field
                          name="isNewUser"
                          type="checkbox"
                          color="default"
                        />
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
            <DialogActions classes={{ root: this.props.classes.actions }}>
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
        )}
      />
    );
  }
}

export default AppAuthModal;
