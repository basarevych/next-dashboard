import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const styles = theme => ({
  icon: {
    color: theme.palette.text.secondary
  },
  details: {
    paddingTop: 0
  }
});

class BillingInfo extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  handleSwitch(active) {
    if (this.state.active !== active) this.setState({ active });
  }

  render() {
    return (
      <div className={this.props.className}>
        <ExpansionPanel
          expanded={this.state.active === 0}
          onChange={() => this.handleSwitch(0)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={this.props.classes.icon} />}
          >
            <Typography variant="subtitle1">
              <FormattedMessage id="BILLING_Q1" />
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={this.props.classes.details}>
            <Typography variant="body2">
              Nam iaculis pellentesque purus, et rhoncus nisi consequat nec. In
              aliquet fringilla odio quis commodo. Donec auctor id ante at
              efficitur. Quisque sit amet nisl sit amet lorem congue tempus.
              Aenean finibus, urna in malesuada viverra, elit ipsum aliquet
              erat, eget commodo ante diam sit amet purus.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={this.state.active === 1}
          onChange={() => this.handleSwitch(1)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={this.props.classes.icon} />}
          >
            <Typography variant="subtitle1">
              <FormattedMessage id="BILLING_Q2" />
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={this.props.classes.details}>
            <Typography variant="body2">
              Praesent erat nunc, cursus vitae justo ut, tristique fermentum
              nisi. In quis nulla at massa vestibulum aliquam. Suspendisse risus
              magna, hendrerit sed metus eget, facilisis porttitor felis.
              Praesent ac velit nec lectus iaculis accumsan.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default BillingInfo;
