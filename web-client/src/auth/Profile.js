import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { FormattedMessage } from "react-intl";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import { Form, Field } from "../app/forms";
import fields from "../../common/forms/profile";
import ConfirmModal from "../app/modals/ConfirmModalContainer";
import facebookIcon from "../../static/img/facebook.svg";
import googleIcon from "../../static/img/google.svg";
import twitterIcon from "../../static/img/twitter.svg";

export const styles = theme => ({
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
});

class ProfilePage extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onLink: PropTypes.func.isRequired,
    onUnlink: PropTypes.func.isRequired,
    onVerify: PropTypes.func.isRequired,
    onDestroy: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      animating: false,
      message: null,
      isConfirmOpen: false
    };

    this.messageTimer = null;

    this.save = this.save.bind(this);
    this.verify = this.verify.bind(this);
    this.destroy = this.destroy.bind(this);

    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.handleCancelDelete = this.handleCancelDelete.bind(this);
  }

  async save(
    { name, email, password1 },
    { setSubmitting, setFieldValue, setErrors, setStatus }
  ) {
    let result = await this.props.onSave(name || null, email, password1);
    if (result === true) {
      setSubmitting(false);
      setFieldValue("password1", "");
      setFieldValue("password2", "");
      this.showMessage("PROFILE_SAVE_SUCCESS");
    } else {
      let { _status, ...errors } = result;
      setSubmitting(false);
      setErrors(errors);
      setStatus(_status);
    }
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

  renderButton(provider, submitting) {
    const name = _.toLower(provider.name);
    const isLinked = provider.isLinked;

    return (
      <Button
        key={provider}
        variant="contained"
        color="default"
        classes={{ contained: this.props.classes[name] }}
        disabled={submitting}
        onClick={() => (isLinked ? this.unlink(name) : this.link(name))}
      >
        <Hidden xsDown>
          <FormattedMessage
            id={isLinked ? "PROFILE_UNLINK_BUTTON" : "PROFILE_LINK_BUTTON"}
          />
        </Hidden>
        {name === "facebook" && (
          <span
            dangerouslySetInnerHTML={{ __html: facebookIcon }}
            className={this.props.classes.serviceLogo}
          />
        )}
        {name === "google" && (
          <span
            dangerouslySetInnerHTML={{ __html: googleIcon }}
            className={this.props.classes.serviceLogo}
          />
        )}
        {name === "twitter" && (
          <span
            dangerouslySetInnerHTML={{ __html: twitterIcon }}
            className={this.props.classes.serviceLogo}
          />
        )}
        {_.upperFirst(name)}
      </Button>
    );
  }

  render() {
    return (
      <div className={this.props.classes.layout}>
        <Paper className={this.props.classes.profile}>
          <Form
            fields={fields}
            initialValues={this.props.user}
            onSubmit={this.save}
            render={({ isSubmitting, status, handleSubmit }) => {
              const services = _.map(this.props.user.providers, provider =>
                this.renderButton(provider, isSubmitting)
              );

              return (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      classes={{ root: this.props.classes.title }}
                    >
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
                  {!!status && (
                    <Grid item xs={12}>
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
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                    >
                      <FormattedMessage id="PROFILE_SAVE_BUTTON" />
                    </Button>
                    <Button
                      variant="contained"
                      color="inherit"
                      className={this.props.classes.destroyButton}
                      disabled={isSubmitting}
                      onClick={this.destroy}
                    >
                      <FormattedMessage id="PROFILE_DESTROY_BUTTON" />
                    </Button>
                  </Grid>
                  {!this.props.user.isEmailVerified && (
                    <Grid item xs={12} container justify="flex-start">
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={this.verify}
                      >
                        <FormattedMessage id="PROFILE_VERIFY_BUTTON" />
                      </Button>
                    </Grid>
                  )}
                </Grid>
              );
            }}
          />

          {this.state.isConfirmOpen && (
            <ConfirmModal
              title="DELETE_PROFILE_TITLE"
              text="DELETE_PROFILE_TEXT"
              cancel="DELETE_PROFILE_CANCEL"
              submit="DELETE_PROFILE_SUBMIT"
              onCancel={this.handleCancelDelete}
              onSubmit={this.handleConfirmDelete}
            />
          )}
        </Paper>
      </div>
    );
  }
}

export default ProfilePage;
