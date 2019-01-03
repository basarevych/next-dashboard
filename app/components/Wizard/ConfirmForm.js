import React from "react";
import PropTypes from "prop-types";
import { allCountries, iso2Lookup } from "country-telephone-data";
import { intlShape, FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "stretch",
    "& dd": {
      marginLeft: "3rem",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "1rem"
      }
    }
  },
  paneLeft: {
    flex: 1,
    marginRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0.5rem"
    }
  },
  paneRight: {
    flex: 1,
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0.5rem"
    }
  },
  term: {
    fontWeight: "bold"
  },
  data: {
    fontSize: "90%"
  }
});

class ConfirmForm extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    getShippingValue: PropTypes.func.isRequired,
    getShippingError: PropTypes.func.isRequired,
    getBillingValue: PropTypes.func.isRequired,
    getBillingError: PropTypes.func.isRequired,
    onReady: PropTypes.func.isRequired
  };

  static formName = "confirmForm";

  componentDidMount() {
    this.props.onReady({
      formName: this.constructor.formName,
      validate: null,
      refresh: null
    });
  }

  renderField(form, field) {
    const hasError = !!(form === "shipping" ||
    (this.props.getBillingValue("isSameAddress") &&
      !_.includes(["cardNumber", "cardDate"], field))
      ? this.props.getShippingError(field)
      : this.props.getBillingError(field));
    if (hasError) return null;

    let value =
      form === "shipping"
        ? this.props.getShippingValue(field)
        : this.props.getBillingValue(field);
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
        value = _.replace(value, /\d{4}(?= \d{4})/g, "••••");
        break;
      case "cardDate":
        label = "CONFIRM_CARD_DATE_LABEL";
        break;
    }

    return (
      <React.Fragment>
        <dt className={this.props.classes.term}>
          <FormattedMessage id={label} />
        </dt>
        <dd className={this.props.classes.data}>{value}</dd>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.paneLeft}>
          <Typography variant="h6">
            <FormattedMessage id="CONFIRM_SHIPPING_LABEL" />
          </Typography>
          <Divider />
          <dl>
            {this.renderField("shipping", "firstName")}
            {this.renderField("shipping", "middleName")}
            {this.renderField("shipping", "lastName")}
            {this.renderField("shipping", "address")}
            {this.renderField("shipping", "city")}
            {this.renderField("shipping", "state")}
            {this.renderField("shipping", "code")}
            {this.renderField("shipping", "country")}
            {this.renderField("shipping", "phone")}
            {this.renderField("shipping", "email")}
          </dl>
        </div>
        <div className={this.props.classes.paneRight}>
          <Typography variant="h6">
            <FormattedMessage id="CONFIRM_BILLING_LABEL" />
          </Typography>
          <Divider />
          <dl>
            {this.renderField("billing", "cardNumber")}
            {this.renderField("billing", "cardDate")}
            {this.renderField("billing", "firstName")}
            {this.renderField("billing", "middleName")}
            {this.renderField("billing", "lastName")}
            {this.renderField("billing", "address")}
            {this.renderField("billing", "city")}
            {this.renderField("billing", "state")}
            {this.renderField("billing", "code")}
            {this.renderField("billing", "country")}
            {this.renderField("billing", "phone")}
            {this.renderField("billing", "email")}
          </dl>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ConfirmForm);
