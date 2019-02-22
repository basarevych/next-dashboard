import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Forms from "./FormsContainer";
import isRouteAllowed from "../../common/isRouteAllowed";

export const styles = theme => ({
  message: {
    background: lighten(theme.palette.background.paper, 0.1),
    width: "100%",
    marginTop: "-2rem",
    display: "flex",
    justifyContent: "stretch",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  messageTitle: {
    fontSize: 26,
    margin: "3rem 3rem 1rem 3rem"
  },
  messageContent: {
    flex: 1,
    maxWidth: "600px",
    margin: "3rem 1rem 1rem 1rem"
  },
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing
  }
});

class FormsPage extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    userRoles: PropTypes.array.isRequired
  };

  render() {
    if (!isRouteAllowed("/forms", this.props.userRoles)) return null;

    return (
      <React.Fragment>
        <div className={this.props.classes.message}>
          <Typography variant="h6" className={this.props.classes.messageTitle}>
            <FormattedMessage id="FORMS_MESSAGE_TITLE" />
          </Typography>
          <Typography
            variant="body1"
            className={this.props.classes.messageContent}
          >
            <FormattedMessage id="FORMS_MESSAGE_CONTENT" />
          </Typography>
        </div>

        <div className={this.props.classes.layout}>
          <Forms />
        </div>
      </React.Fragment>
    );
  }
}

export default FormsPage;
