import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { AutoSizer } from "react-virtualized";
import { lighten, fade } from "@material-ui/core/styles/colorManipulator";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import ShippingIcon from "@material-ui/icons/LocalShipping";
import BillingIcon from "@material-ui/icons/AccountBalanceWallet";
import ConfirmIcon from "@material-ui/icons/ShoppingCart";
import CompletedIcon from "@material-ui/icons/DoneOutline";
import PrevIcon from "@material-ui/icons/KeyboardArrowLeft";
import NextIcon from "@material-ui/icons/KeyboardArrowRight";
import SubmitIcon from "@material-ui/icons/Check";
import ShippingForm from "./ShippingFormContainer";
import ShippingInfo from "./ShippingInfoContainer";
import BillingForm from "./BillingFormContainer";
import BillingInfo from "./BillingInfoContainer";
import ConfirmForm from "./ConfirmFormContainer";
import MessageModal from "../app/modals/MessageModalContainer";

export const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "stretch"
    }
  },
  title: {
    marginTop: "3rem"
  },
  stepper: {
    background: fade(theme.palette.primary.main, 0.5),
    paddingBottom: 16
  },
  step: {
    cursor: "pointer"
  },
  stepLabel: {
    color: [theme.palette.text.secondary, "!important"],
    fontSize: ["110%", "!important"],
    textAlign: "left",
    marginTop: [-10, "!important"]
  },
  stepLabelAlternative: {
    color: [theme.palette.text.secondary, "!important"],
    fontSize: ["110%", "!important"],
    textAlign: "center",
    marginTop: [0, "!important"]
  },
  stepLabelActive: {
    color: [theme.palette.common.white, "!important"],
    textShadow: "1px 1px 3px black"
  },
  stepLabelIcon: {
    fontSize: 46,
    marginTop: -10
  },
  page: {
    boxShadow: theme.shadows[2],
    background: lighten(theme.palette.background.paper, 0.05),
    flex: 1
  },
  form: {
    padding: 16
  },
  info: {
    width: theme.spacing.unit * 50,
    marginLeft: "1rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: "1rem",
      flex: 1,
      width: "unset"
    }
  },
  footer: {
    marginTop: "1rem",
    flex: 1,
    display: "flex",
    justifyContent: "stretch",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between"
    }
  },
  status: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    background: fade(theme.palette.primary.main, 0.5),
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "3rem",
      marginTop: theme.spacing.unit / 2,
      marginBottom: 0
    },
    "& *": {
      fontSize: "110%"
    }
  },
  button: {
    margin: "0.5rem 1rem"
  },
  buttonIcon: {
    marginLeft: -theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2
  }
});

class Forms extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    hasErrors: PropTypes.object.isRequired
  };

  static steps = [
    {
      icon: ShippingIcon,
      label: "SHIPPING_STEP_TITLE",
      descr: "SHIPPING_STEP_DESCR",
      form: ShippingForm,
      info: ShippingInfo
    },
    {
      icon: BillingIcon,
      label: "BILLING_STEP_TITLE",
      descr: "BILLING_STEP_DESCR",
      form: BillingForm,
      info: BillingInfo
    },
    {
      icon: ConfirmIcon,
      label: "CONFIRM_STEP_TITLE",
      descr: null,
      form: ConfirmForm,
      info: null
    }
  ];

  constructor(props) {
    super(props);

    this.state = { step: 0, isMessageOpen: false };
    this.forms = {};
    this.isDestroyed = false;

    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleMessageClose = this.handleMessageClose.bind(this);
  }

  componentWillUnmount() {
    this.isDestroyed = true;
  }

  isFirstStep() {
    return this.state.step === 0;
  }

  isLastStep() {
    return this.state.step === this.constructor.steps.length - 1;
  }

  isAllDone() {
    for (let form of _.keys(this.forms).slice(0, -1)) {
      if (!this.forms[form].isChecked) return false;
      if (this.props.hasErrors[form]) return false;
    }
    return true;
  }

  isCompleted(step) {
    let formName = this.constructor.steps[step].form.formName;
    let form = this.forms[formName];
    return !!(form && form.isChecked) && !this.isError(step);
  }

  isError(step) {
    let formName = this.constructor.steps[step].form.formName;
    let form = this.forms[formName];
    return !!(form && form.isChecked) && this.props.hasErrors[formName];
  }

  getStatus() {
    let descr = this.constructor.steps[this.state.step].descr;
    if (descr) return descr;
    return this.isAllDone()
      ? "CONFIRM_STEP_DESCR_SUCCESS"
      : "CONFIRM_STEP_DESCR_FAILURE";
  }

  handleRegistration({ formName, validate, refresh }) {
    if (this.isDestroyed) return;
    this.forms[formName] = {
      isChecked: false,
      validate,
      refresh
    };
    if (_.keys(this.forms).length === this.constructor.steps) {
      for (let form of _.keys(this.forms)) {
        if (this.forms[form].refresh) this.forms[form].refresh();
      }
    }
  }

  handleMessageClose() {
    this.setState({ isMessageOpen: false });
  }

  async validateForm(step) {
    let form = _.find(
      this.forms,
      (item, name) => name === this.constructor.steps[step].form.formName
    );
    if (form && form.validate) {
      form.isChecked = true;
      await form.validate();
      if (this.isDestroyed) return;
    }

    for (let form of _.keys(this.forms))
      if (this.forms[form].refresh) this.forms[form].refresh();
  }

  async handleSwitch(step) {
    if (step === this.state.step || this.isDestroyed) return;

    let cur = this.state.step;
    this.setState({ step });

    let form = _.find(
      this.forms,
      (item, name) => name === this.constructor.steps[step].form.formName
    );
    if (form) form.isChecked = false;

    if (step === this.constructor.steps.length - 1) {
      for (let i = 0; i < this.constructor.steps.length - 1; i++)
        await this.validateForm(i);
    } else {
      await this.validateForm(cur);
    }
  }

  handleSubmit() {
    this.setState({ isMessageOpen: true });
  }

  renderStepper(isVertical = false) {
    return (
      <Stepper
        nonLinear
        alternativeLabel={!isVertical}
        orientation={isVertical ? "vertical" : "horizontal"}
        activeStep={this.state.step}
        className={this.props.classes.stepper}
      >
        {_.map(this.constructor.steps, (step, index) => {
          const Icon = this.isCompleted(index) ? CompletedIcon : step.icon;
          const labelProps = {
            classes: {
              alternativeLabel: this.props.classes.stepLabelAlternative,
              label: this.props.classes.stepLabel,
              active: this.props.classes.stepLabelActive
            },
            icon: (
              <Icon
                className={classNames(
                  this.props.classes.stepLabelIcon,
                  this.state.step === index &&
                    this.props.classes.stepLabelActive
                )}
                color="inherit"
                fontSize="inherit"
              />
            ),
            onClick: () => this.handleSwitch(index)
          };
          if (this.isError(index)) {
            labelProps.error = true;
            labelProps.optional = (
              <Typography variant="body2" color="error">
                <FormattedMessage id="WIZARD_ERROR_LABEL" />
              </Typography>
            );
          }
          return (
            <Step key={`step-${index}`} className={this.props.classes.step}>
              <StepLabel {...labelProps}>
                <FormattedMessage id={step.label} />
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h3" className={this.props.classes.title}>
          <FormattedMessage id="TITLE_FORMS" />
        </Typography>

        <div className={this.props.classes.root}>
          <div className={this.props.classes.page}>
            <Hidden smDown>{this.renderStepper(false)}</Hidden>
            <Hidden mdUp>{this.renderStepper(true)}</Hidden>

            <AutoSizer disableHeight>
              {({ width }) => (
                <SwipeableViews index={this.state.step} style={{ width }}>
                  {_.map(this.constructor.steps, (step, index) => {
                    const Form = step.form;
                    return (
                      <div
                        key={`form-${index}`}
                        className={this.props.classes.form}
                      >
                        <Form onReady={this.handleRegistration} />
                      </div>
                    );
                  })}
                </SwipeableViews>
              )}
            </AutoSizer>

            <Hidden smDown>
              <div className={this.props.classes.footer}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={this.isFirstStep()}
                  className={this.props.classes.button}
                  onClick={() => this.handleSwitch(this.state.step - 1)}
                >
                  <PrevIcon className={this.props.classes.buttonIcon} />
                  <FormattedMessage id="WIZARD_PREV_BUTTON" />
                </Button>
                <div className={this.props.classes.status}>
                  <Typography variant="body1">
                    <FormattedMessage id={this.getStatus()} />
                  </Typography>
                </div>
                {this.isLastStep() && (
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={!this.isAllDone()}
                    className={this.props.classes.button}
                    onClick={() => this.handleSubmit()}
                  >
                    <SubmitIcon className={this.props.classes.buttonIcon} />
                    <FormattedMessage id="WIZARD_SUBMIT_BUTTON" />
                  </Button>
                )}
                {!this.isLastStep() && (
                  <Button
                    variant="contained"
                    color="primary"
                    className={this.props.classes.button}
                    onClick={() => this.handleSwitch(this.state.step + 1)}
                  >
                    <NextIcon className={this.props.classes.buttonIcon} />
                    <FormattedMessage id="WIZARD_NEXT_BUTTON" />
                  </Button>
                )}
              </div>
            </Hidden>
            <Hidden mdUp>
              <div className={this.props.classes.footer}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={this.isFirstStep()}
                  className={this.props.classes.button}
                  onClick={() => this.handleSwitch(this.state.step - 1)}
                >
                  <PrevIcon className={this.props.classes.buttonIcon} />
                  <FormattedMessage id="WIZARD_PREV_BUTTON" />
                </Button>
                {this.isLastStep() && (
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={!this.isAllDone()}
                    className={this.props.classes.button}
                    onClick={() => this.handleSubmit()}
                  >
                    <SubmitIcon className={this.props.classes.buttonIcon} />
                    <FormattedMessage id="WIZARD_SUBMIT_BUTTON" />
                  </Button>
                )}
                {!this.isLastStep() && (
                  <Button
                    variant="contained"
                    color="primary"
                    className={this.props.classes.button}
                    onClick={() => this.handleSwitch(this.state.step + 1)}
                  >
                    <NextIcon className={this.props.classes.buttonIcon} />
                    <FormattedMessage id="WIZARD_NEXT_BUTTON" />
                  </Button>
                )}
              </div>
              <div className={this.props.classes.status}>
                <div>
                  <FormattedMessage id={this.getStatus()} />
                </div>
              </div>
            </Hidden>
          </div>

          {_.map(this.constructor.steps, (step, index) => {
            if (index !== this.state.step) return null;
            const Info = step.info;
            return Info ? (
              <Info key={`info-${index}`} className={this.props.classes.info} />
            ) : (
              <div key={`info-${index}`} className={this.props.classes.info} />
            );
          })}
        </div>

        <MessageModal
          isOpen={this.state.isMessageOpen}
          title="FORMS_SUCCESS_TITLE"
          text="FORMS_SUCCESS_TEXT"
          submit="FORMS_SUCCESS_SUBMIT"
          onSubmit={this.handleMessageClose}
        />
      </React.Fragment>
    );
  }
}

export default Forms;
