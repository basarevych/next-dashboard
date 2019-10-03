import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.text.secondary
  },
  details: {
    paddingTop: 0
  }
}));

function ShippingInfo(props) {
  const classes = useStyles(props);

  const [active, setActive] = useState(0);

  return (
    <div className={props.className}>
      <ExpansionPanel expanded={active === 0} onChange={() => setActive(0)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
        >
          <Typography variant="subtitle1">
            <FormattedMessage id="SHIPPING_Q1" />
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ornare viverra sapien in cursus. Integer feugiat tellus pulvinar
            vulputate luctus. Quisque nulla turpis, aliquet et nunc ac, cursus
            eleifend dui. Sed ullamcorper velit nec felis aliquam, in vehicula
            sapien aliquam. Fusce viverra varius nulla at semper.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={active === 1} onChange={() => setActive(1)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
        >
          <Typography variant="subtitle1">
            <FormattedMessage id="SHIPPING_Q2" />
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography variant="body2">
            Curabitur varius sem at nulla interdum, eget rhoncus ligula
            tristique. Suspendisse risus magna, hendrerit sed metus eget,
            facilisis porttitor felis. Praesent ac velit nec lectus iaculis
            accumsan. Nam iaculis pellentesque purus, et rhoncus nisi consequat
            nec. In aliquet fringilla odio quis commodo. Donec auctor id ante at
            efficitur. Quisque sit amet nisl sit amet lorem congue tempus.
            Aenean finibus, urna in malesuada viverra, elit ipsum aliquet erat,
            eget commodo ante diam sit amet purus. Praesent erat nunc, cursus
            vitae justo ut, tristique fermentum nisi. In quis nulla at massa
            vestibulum aliquam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={active === 2} onChange={() => setActive(2)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
        >
          <Typography variant="subtitle1">
            <FormattedMessage id="SHIPPING_Q3" />
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography variant="body2">
            Etiam elementum, ipsum sit amet lobortis pulvinar, dui urna
            venenatis eros, a posuere ex nisl ut ante. Donec consequat tellus
            ligula, sit amet varius mi venenatis a. Fusce ac nisl consectetur,
            ultricies ligula eu, ornare massa. Cras ut arcu non metus imperdiet
            fermentum ut a neque. Curabitur volutpat tincidunt purus id euismod.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

ShippingInfo.propTypes = {
  className: PropTypes.string
};

export default ShippingInfo;
