import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import HttpStatus from "http-status-codes";

export const styles = theme => ({
  layout: {
    width: "100%",
    maxWidth: 1300 + theme.spacing(2),
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: theme.spacing(1) / 2,
      maxWidth: 1300 + theme.spacing(1)
    }
  },
  code: {
    fontSize: "300%",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    padding: "0.5rem 2rem",
    color: `1px solid ${theme.palette.text.primary}`,
    borderRight: `1px solid ${theme.palette.text.disabled}`,
    [theme.breakpoints.down("md")]: {
      borderRight: "none"
    }
  },
  text: {
    fontSize: "200%",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    padding: "0.5rem 2rem",
    color: `1px solid ${theme.palette.text.secondary}`,
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  },
  linkWrapper: {
    fontSize: "1rem",
    marginTop: "1rem"
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      color: "#ffffff"
    }
  }
});

class ErrorMessage extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    statusCode: PropTypes.number,
    error: PropTypes.object,
    onSignIn: PropTypes.func.isRequired
  };

  getCode() {
    if (this.props.error) return this.props.intl.formatMessage({ id: "ERROR" });
    if (!this.props.statusCode || this.props.statusCode === 200) return 500;
    return this.props.statusCode;
  }

  getText() {
    if (this.props.error) return this.props.error.message;
    return HttpStatus.getStatusText(this.getCode());
  }

  render() {
    return (
      <div className={this.props.classes.layout}>
        <div className={this.props.classes.code}>{this.getCode()}</div>
        <div className={this.props.classes.text}>
          {this.getText()}
          <div className={this.props.classes.linkWrapper}>
            <div>
              &gt;&nbsp;&nbsp;
              <a
                href="javascript:void(0)"
                className={this.props.classes.link}
                onClick={() => window.location.reload(true)}
              >
                <FormattedMessage id="ERROR_REFRESH_LINK" />
              </a>
            </div>
            <div>
              &gt;&nbsp;&nbsp;
              <a href="/" className={this.props.classes.link}>
                <FormattedMessage id="ERROR_GO_HOME_LINK" />
              </a>
            </div>
            {this.getCode() === 401 && (
              <div>
                &gt;&nbsp;&nbsp;
                <a
                  href="javascript:void(0)"
                  className={this.props.classes.link}
                  onClick={this.props.onSignIn}
                >
                  <FormattedMessage id="ERROR_TRY_AUTH_LINK" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorMessage;
