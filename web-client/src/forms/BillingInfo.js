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

function BillingInfo(props) {
  const classes = useStyles(props);

  const [active, setActive] = useState(0);

  return (
    <div className={props.className}>
      <ExpansionPanel expanded={active === 0} onChange={() => setActive(0)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
        >
          <Typography variant="subtitle1">
            <FormattedMessage id="BILLING_Q1" />
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography variant="body2">
            Nam iaculis pellentesque purus, et rhoncus nisi consequat nec. In
            aliquet fringilla odio quis commodo. Donec auctor id ante at
            efficitur. Quisque sit amet nisl sit amet lorem congue tempus.
            Aenean finibus, urna in malesuada viverra, elit ipsum aliquet erat,
            eget commodo ante diam sit amet purus.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={active === 1} onChange={() => setActive(1)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
        >
          <Typography variant="subtitle1">
            <FormattedMessage id="BILLING_Q2" />
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography variant="body2">
            Praesent erat nunc, cursus vitae justo ut, tristique fermentum nisi.
            In quis nulla at massa vestibulum aliquam. Suspendisse risus magna,
            hendrerit sed metus eget, facilisis porttitor felis. Praesent ac
            velit nec lectus iaculis accumsan.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

BillingInfo.propTypes = {
  className: PropTypes.string
};

export default BillingInfo;
