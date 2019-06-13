import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const styles = theme => ({
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
});

class VerifyEmail extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    token: PropTypes.string,
    onVerify: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      message: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    this.setState({ message: null });
    const success = await this.props.onVerify(this.props.token);
    if (success) return Router.push("/auth/profile");
    this.setState({ message: "VERIFY_FAILED_MESSAGE" });
  }

  render() {
    return (
      <div className={this.props.classes.layout}>
        <div className={this.props.classes.form}>
          <Typography variant="h4" classes={{ root: this.props.classes.title }}>
            <FormattedMessage id="TITLE_VERIFY" />
          </Typography>
          {this.state.message && (
            <p className={this.props.classes.error}>
              <FormattedMessage id={this.state.message} />
            </p>
          )}
          <p>
            <FormattedMessage id="VERIFY_INTRO_MESSAGE" />
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            <FormattedMessage id="VERIFY_ACTION_BUTTON" />
          </Button>
        </div>
      </div>
    );
  }
}

export default VerifyEmail;
