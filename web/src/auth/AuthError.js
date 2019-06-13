import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";

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
  hint: {
    marginTop: "4rem",
    marginLeft: "5rem"
  }
});

class AuthError extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    type: PropTypes.string
  };

  render() {
    let msg = "OAUTH_ERROR_GENERIC";
    let hints = [];
    if (this.props.type === "oauth") {
      msg = "OAUTH_ERROR_ACCOUNT_EXISTS";
      hints.push({
        title: "OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1",
        body: "OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1"
      });
      hints.push({
        title: "OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2",
        body: "OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2"
      });
    }

    return (
      <div className={this.props.classes.layout}>
        <div className={this.props.classes.form}>
          <Typography variant="h4" classes={{ root: this.props.classes.title }}>
            <FormattedMessage id="TITLE_OAUTH_ERROR" />
          </Typography>
          <p>
            <FormattedMessage id={msg} />
          </p>
          {_.map(hints, (hint, index) => (
            <div key={`hint-${index}`} className={this.props.classes.hint}>
              <Typography variant="h5">
                <FormattedMessage id={hint.title} />
              </Typography>
              <Typography variant="body1">
                <FormattedMessage id={hint.body} />
              </Typography>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AuthError;
