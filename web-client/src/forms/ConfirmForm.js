import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { allCountries, iso2Lookup } from "../../common/src/countries";
import shippingSchema from "../../common/forms/shipping";
import billingSchema from "../../common/forms/billing";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "stretch",
    "& dd": {
      marginLeft: "3rem",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "1rem"
      }
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  paneLeft: {
    flex: 1,
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0
    }
  },
  paneRight: {
    flex: 1,
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0
    }
  },
  term: {
    fontWeight: "bold"
  },
  data: {
    fontSize: "90%"
  }
}));

function ConfirmForm(props) {
  const classes = useStyles(props);

  const shippingValues = useMemo(
    () => shippingSchema.cast(props.shippingValues),
    [props.shippingValues]
  );

  const billingValues = useMemo(() => billingSchema.cast(props.billingValues), [
    props.billingValues
  ]);

  const renderField = (form, field) => {
    let value;
    if (
      form === "shipping" ||
      (billingValues.isSameAddress &&
        !_.includes(["cardNumber", "cardDate", "cardSecret"], field))
    ) {
      if (props.shippingErrors[field]) return null;
      value = shippingValues[field];
    } else {
      if (props.billingErrors[field]) return null;
      value = billingValues[field];
    }

    if (!value) return null;

    let label;
    switch (field) {
      case "firstName":
        label = "CONFIRM_FIRST_NAME_LABEL";
        break;
      case "middleName":
        label = "CONFIRM_MIDDLE_NAME_LABEL";
        break;
      case "lastName":
        label = "CONFIRM_LAST_NAME_LABEL";
        break;
      case "address":
        label = "CONFIRM_ADDRESS_LABEL";
        value = _.map(_.split(value, /\n/), (line, index) => (
          <div key={index}>{line}</div>
        ));
        break;
      case "city":
        label = "CONFIRM_CITY_LABEL";
        break;
      case "state":
        label = "CONFIRM_STATE_LABEL";
        value = _.replace(value, /[\r\n]+/g, " ");
        break;
      case "code":
        label = "CONFIRM_CODE_LABEL";
        break;
      case "country":
        label = "CONFIRM_COUNTRY_LABEL";
        value = allCountries[iso2Lookup[value]].name;
        break;
      case "phone":
        label = "CONFIRM_PHONE_LABEL";
        break;
      case "email":
        label = "CONFIRM_EMAIL_LABEL";
        break;
      case "cardNumber":
        label = "CONFIRM_CARD_NUMBER_LABEL";
        value = _.repeat("**** ", 3) + value.slice(-4);
        break;
      case "cardDate":
        label = "CONFIRM_CARD_DATE_LABEL";
        break;
    }

    return (
      <React.Fragment>
        <dt className={classes.term}>
          <FormattedMessage id={label} />
        </dt>
        <dd className={classes.data}>{value}</dd>
      </React.Fragment>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.paneLeft}>
        <Typography variant="h6">
          <FormattedMessage id="CONFIRM_SHIPPING_LABEL" />
        </Typography>
        <Divider />
        <dl>
          {renderField("shipping", "firstName")}
          {renderField("shipping", "middleName")}
          {renderField("shipping", "lastName")}
          {renderField("shipping", "address")}
          {renderField("shipping", "city")}
          {renderField("shipping", "state")}
          {renderField("shipping", "code")}
          {renderField("shipping", "country")}
          {renderField("shipping", "phone")}
          {renderField("shipping", "email")}
        </dl>
      </div>
      <div className={classes.paneRight}>
        <Typography variant="h6">
          <FormattedMessage id="CONFIRM_BILLING_LABEL" />
        </Typography>
        <Divider />
        <dl>
          {renderField("billing", "cardNumber")}
          {renderField("billing", "cardDate")}
          {renderField("billing", "firstName")}
          {renderField("billing", "middleName")}
          {renderField("billing", "lastName")}
          {renderField("billing", "address")}
          {renderField("billing", "city")}
          {renderField("billing", "state")}
          {renderField("billing", "code")}
          {renderField("billing", "country")}
          {renderField("billing", "phone")}
          {renderField("billing", "email")}
        </dl>
      </div>
    </div>
  );
}

ConfirmForm.propTypes = {
  shippingValues: PropTypes.object.isRequired,
  shippingErrors: PropTypes.object.isRequired,
  billingValues: PropTypes.object.isRequired,
  billingErrors: PropTypes.object.isRequired
};

ConfirmForm.formName = "confirmForm";

export default ConfirmForm;
