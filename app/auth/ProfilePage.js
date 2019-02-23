import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { FormattedMessage } from "react-intl";
import { SubmissionError } from "redux-form/immutable";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import Form from "../app/forms/Form";
import Field from "../app/forms/FieldContainer";
import fields from "../../common/forms/profile";
import isRouteAllowed from "../../common/isRouteAllowed";
import ConfirmModal from "../app/modals/ConfirmModalContainer";
import constants from "../../common/constants";
import facebookIcon from "../../static/img/facebook.svg";
import googleIcon from "../../static/img/google.svg";
import twitterIcon from "../../static/img/twitter.svg";

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  profile: {
    width: "100%",
    maxWidth: 700
  },
  destroyButton: {
    background: red[500]
  },
  title: {
    borderBottom: `1px dotted ${theme.palette.text.primary}`
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
    color: theme.palette.primary.contrastText,
    background: ["#3b5998", "!important"],
    "&:hover": {
      background: ["#1b3978", "!important"]
    }
  },
  google: {
    color: theme.palette.primary.contrastText,
    background: ["#dd4b39", "!important"],
    "&:hover": {
      background: ["#bd2b19", "!important"]
    }
  },
  twitter: {
    color: theme.palette.primary.contrastText,
    background: ["#38A1F3", "!important"],
    "&:hover": {
      background: ["#1881d3", "!important"]
    }
  }
});

class ProfilePage extends Form {
  static propTypes = {
    ...Form.propTypes,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    userRoles: PropTypes.array.isRequired,
    userVerified: PropTypes.bool.isRequired,
    userProviders: PropTypes.object.isRequired,
    onLoad: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onLink: PropTypes.func.isRequired,
    onUnlink: PropTypes.func.isRequired,
    onVerify: PropTypes.func.isRequired,
    onDestroy: PropTypes.func.isRequired
  };

  static formName = "profileForm";
  static fields = fields;

  static async onSubmit(values, dispatch, props) {
    let result = await props.onSave(
      props.getValue("name") || null,
      props.getValue("email"),
      props.getValue("password1")
    );

    if (result && _.isObject(result)) throw new SubmissionError(result);
    if (result === true) await ProfilePage.load(props);

    return result;
  }

  static async load(props) {
    const { name, email } = await props.onLoad();
    props.dispatch(props.change("name", name));
    props.dispatch(props.change("email", email));
    props.dispatch(props.change("password1", ""));
    props.dispatch(props.change("password2", ""));
  }

  constructor(props) {
    super(props);

    this.state = {
      animating: false,
      message: null,
      isConfirmOpen: false
    };

    this.messageTimer = null;

    this.submit = this.submit.bind(this);
    this.verify = this.verify.bind(this);
    this.destroy = this.destroy.bind(this);

    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
  }

  componentDidMount() {
    ProfilePage.load(this.props).catch(console.error);
  }

  showMessage(message) {
    if (this.messageTimer) clearTimeout(this.messageTimer);
    this.messageTimer = setTimeout(() => {
      this.messageTimer = null;
      this.setState({ animating: false }, () => {
        this.messageTimer = setTimeout(() => {
          this.messageTimer = null;
          this.setState({ message: null });
        }, this.props.theme.transitions.duration.leavingScreen);
      });
    }, 5000);
    this.setState({ message, animating: true });
  }

  async submit() {
    if ((await super.submit()) === true)
      this.showMessage("PROFILE_SAVE_SUCCESS");
  }

  async verify() {
    let success = await this.props.onVerify();
    this.showMessage(success ? "PROFILE_VERIFY_SUCCESS" : "OPERATION_FAILED");
  }

  async link(provider) {
    let success = await this.props.onLink(provider);
    this.showMessage(success ? "PROFILE_LINK_SUCCESS" : "OPERATION_FAILED");
  }

  async unlink(provider) {
    let success = await this.props.onUnlink(provider);
    this.showMessage(success ? "PROFILE_UNLINK_SUCCESS" : "OPERATION_FAILED");
  }

  async destroy() {
    this.setState({ isConfirmOpen: true });
  }

  handleCancelDelete() {
    this.setState({ isConfirmOpen: false });
  }

  async handleConfirmDelete() {
    this.setState({ isConfirmOpen: false });
    if (await this.props.onDestroy()) Router.push("/");
  }

  async;
  renderButton(provider) {
    provider = _.toLower(provider);
    const isLinked = this.props.userProviders[provider];

    return (
      <Button
        variant="contained"
        color="default"
        classes={{ contained: this.props.classes[provider] }}
        disabled={
          this.props.submitting ||
          !_.includes(_.keys(this.props.userProviders), provider)
        }
        onClick={() => (isLinked ? this.unlink(provider) : this.link(provider))}
      >
        <Hidden xsDown>
          <FormattedMessage
            id={isLinked ? "PROFILE_UNLINK_BUTTON" : "PROFILE_LINK_BUTTON"}
          />
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
    if (!isRouteAllowed("/auth/profile", this.props.userRoles)) return null;

    return (
      <div className={this.props.classes.layout}>
        <Grid
          className={this.props.classes.profile}
          container
          spacing={this.props.theme.main.spacing}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={this.submit}
        >
          <Grid item xs={12}>
            <Typography
              variant="h4"
              classes={{ root: this.props.classes.title }}
            >
              <FormattedMessage id="TITLE_PROFILE" />
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="space-between">
            {this.renderButton(constants.oauthProviders.FACEBOOK)}
            {this.renderButton(constants.oauthProviders.GOOGLE)}
            {this.renderButton(constants.oauthProviders.TWITTER)}
          </Grid>
          {this.props.error && (
            <Grid item xs={12}>
              {_.map(
                _.isArray(this.props.error)
                  ? this.props.error
                  : [this.props.error],
                (error, index) => (
                  <div
                    key={`error-${index}`}
                    className={this.props.classes.error}
                  >
                    {_.isArray(error) ? (
                      <FormattedMessage id={error[0]} values={error[1]} />
                    ) : (
                      <FormattedMessage id={error} />
                    )}
                  </div>
                )
              )}
            </Grid>
          )}
          {this.state.message && (
            <Grid item xs={12}>
              <Grow in={this.state.animating}>
                <div className={this.props.classes.info}>
                  <FormattedMessage id={this.state.message} />
                </div>
              </Grow>
            </Grid>
          )}
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
              disabled={this.props.submitting}
              onClick={this.submit}
            >
              <FormattedMessage id="PROFILE_SAVE_BUTTON" />
            </Button>
            <Button
              variant="contained"
              color="inherit"
              className={this.props.classes.destroyButton}
              disabled={this.props.submitting}
              onClick={this.destroy}
            >
              <FormattedMessage id="PROFILE_DESTROY_BUTTON" />
            </Button>
          </Grid>
          {!this.props.userVerified && (
            <Grid item xs={12} container justify="flex-start">
              <Button
                variant="contained"
                color="primary"
                disabled={this.props.submitting}
                onClick={this.verify}
              >
                <FormattedMessage id="PROFILE_VERIFY_BUTTON" />
              </Button>
            </Grid>
          )}
        </Grid>
        <ConfirmModal
          isOpen={this.state.isConfirmOpen}
          title="DELETE_PROFILE_TITLE"
          text="DELETE_PROFILE_TEXT"
          cancel="DELETE_PROFILE_CANCEL"
          submit="DELETE_PROFILE_SUBMIT"
          onCancel={this.handleCancelDelete}
          onSubmit={this.handleConfirmDelete}
        />
      </div>
    );
  }
}

export default ProfilePage;
