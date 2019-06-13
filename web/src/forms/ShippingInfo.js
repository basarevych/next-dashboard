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

class ShippingInfo extends React.PureComponent {
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
              <FormattedMessage id="SHIPPING_Q1" />
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={this.props.classes.details}>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ornare viverra sapien in cursus. Integer feugiat tellus pulvinar
              vulputate luctus. Quisque nulla turpis, aliquet et nunc ac, cursus
              eleifend dui. Sed ullamcorper velit nec felis aliquam, in vehicula
              sapien aliquam. Fusce viverra varius nulla at semper.
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
              <FormattedMessage id="SHIPPING_Q2" />
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={this.props.classes.details}>
            <Typography variant="body2">
              Curabitur varius sem at nulla interdum, eget rhoncus ligula
              tristique. Suspendisse risus magna, hendrerit sed metus eget,
              facilisis porttitor felis. Praesent ac velit nec lectus iaculis
              accumsan. Nam iaculis pellentesque purus, et rhoncus nisi
              consequat nec. In aliquet fringilla odio quis commodo. Donec
              auctor id ante at efficitur. Quisque sit amet nisl sit amet lorem
              congue tempus. Aenean finibus, urna in malesuada viverra, elit
              ipsum aliquet erat, eget commodo ante diam sit amet purus.
              Praesent erat nunc, cursus vitae justo ut, tristique fermentum
              nisi. In quis nulla at massa vestibulum aliquam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={this.state.active === 2}
          onChange={() => this.handleSwitch(2)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon className={this.props.classes.icon} />}
          >
            <Typography variant="subtitle1">
              <FormattedMessage id="SHIPPING_Q3" />
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={this.props.classes.details}>
            <Typography variant="body2">
              Etiam elementum, ipsum sit amet lobortis pulvinar, dui urna
              venenatis eros, a posuere ex nisl ut ante. Donec consequat tellus
              ligula, sit amet varius mi venenatis a. Fusce ac nisl consectetur,
              ultricies ligula eu, ornare massa. Cras ut arcu non metus
              imperdiet fermentum ut a neque. Curabitur volutpat tincidunt purus
              id euismod.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default ShippingInfo;
