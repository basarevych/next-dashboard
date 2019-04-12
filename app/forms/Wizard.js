import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { AutoSizer } from "react-virtualized";
import SwipeableViews from "react-swipeable-views";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import ShippingIcon from "@material-ui/icons/LocalShipping";
import BillingIcon from "@material-ui/icons/AccountBalanceWallet";
import ConfirmIcon from "@material-ui/icons/ShoppingCart";
import CompletedIcon from "@material-ui/icons/DoneOutline";
import PrevIcon from "@material-ui/icons/KeyboardArrowLeft";
import NextIcon from "@material-ui/icons/KeyboardArrowRight";
import SubmitIcon from "@material-ui/icons/Check";
import ShippingForm from "./ShippingForm";
import ShippingInfo from "./ShippingInfoContainer";
import BillingForm from "./BillingForm";
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
    marginTop: "3rem",
    marginBottom: "1rem"
  },
  stepper: {
    background: theme.form.stepperBackground,
    paddingBottom: 16
  },
  line: {
    borderColor: theme.form.stepperLine
  },
  step: {
    cursor: "pointer"
  },
  stepLabel: {
    color: [theme.form.stepperColor, "!important"],
    fontSize: ["110%", "!important"],
    textAlign: "left",
    marginTop: [-10, "!important"]
  },
  stepLabelAlternative: {
    color: [theme.form.stepperColor, "!important"],
    fontSize: ["110%", "!important"],
    textAlign: "center",
    marginTop: [0, "!important"]
  },
  stepLabelActive: {
    color: [theme.form.stepperActive, "!important"]
  },
  stepLabelIcon: {
    fontSize: 46,
    marginTop: -10
  },
  stepLabelError: {
    fontWeight: "bold",
    color: [theme.form.stepperColor, "!important"]
  },
  page: {
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
    background: theme.form.stepperBackground,
    color: theme.form.stepperActive,
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

class Wizard extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
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

    this.state = {
      step: 0,
      isMessageOpen: false
    };
    this.forms = {};

    for (let i = 0; i < Wizard.steps.length; i++) {
      const formName = Wizard.steps[i].form.formName;
      this.state[formName] = {
        touched: false,
        updated: 0
      };
      this.forms[formName] = {
        submitter: null,
        values: {},
        errors: {}
      };
    }

    this.isDestroyed = false;

    this.handleStepStatus = this.handleStepStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  isError(step) {
    if (step === this.constructor.steps.length - 1) return false;
    const formName = this.constructor.steps[step].form.formName;
    const state = this.state[formName];
    const status = this.forms[formName];
    return (
      step !== this.state.step &&
      state.touched &&
      !!_.keys(status.errors).length
    );
  }

  isCompleted(step) {
    if (step === this.constructor.steps.length - 1) return false;
    const formName = this.constructor.steps[step].form.formName;
    const state = this.state[formName];
    const status = this.forms[formName];
    return (
      step !== this.state.step && state.touched && !_.keys(status.errors).length
    );
  }

  isAllDone() {
    for (let i = 0; i < this.constructor.steps.length - 1; i++)
      if (!this.isCompleted(i)) return false;
    return true;
  }

  getWizardStatus() {
    let descr = this.constructor.steps[this.state.step].descr;
    if (descr) return descr;
    return this.isAllDone()
      ? "CONFIRM_STEP_DESCR_SUCCESS"
      : "CONFIRM_STEP_DESCR_FAILURE";
  }

  handleStepStatus(formName, submitter, values, errors) {
    this.forms[formName] = {
      submitter,
      values: values || {},
      errors: errors || {}
    };
  }

  async handleStepSwitch(newStep) {
    if (newStep === this.state.step) return;

    const prevFormName = this.constructor.steps[this.state.step].form.formName;
    if (this.forms[prevFormName].submitter)
      this.forms[prevFormName].submitter();

    let state = {
      step: newStep
    };

    if (newStep === this.constructor.steps.length - 1) {
      for (let step of this.constructor.steps) {
        state[step.form.formName] = {
          touched: true,
          updated: Date.now()
        };
      }
    } else {
      state[prevFormName] = _.assign({}, this.state[prevFormName], {
        touched: true,
        updated: Date.now()
      });
    }

    this.setState(state);
  }

  handleSubmit() {
    if (!this.state.isMessageOpen) this.setState({ isMessageOpen: true });
  }

  handleMessageClose() {
    if (this.state.isMessageOpen) this.setState({ isMessageOpen: false });
  }

  renderHeader(isVertical = false) {
    const connector = (
      <StepConnector
        classes={{
          line: this.props.classes.line
        }}
      />
    );

    return (
      <Stepper
        nonLinear
        alternativeLabel={!isVertical}
        orientation={isVertical ? "vertical" : "horizontal"}
        activeStep={this.state.step}
        connector={connector}
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
            onClick: () => this.handleStepSwitch(index)
          };
          if (this.isError(index)) {
            labelProps.error = true;
            labelProps.optional = (
              <Typography
                variant="button"
                className={this.props.classes.stepLabelError}
              >
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

  renderFooter() {
    return (
      <>
        <Hidden smDown>
          <div className={this.props.classes.footer}>
            <Button
              variant="contained"
              color="primary"
              disabled={this.isFirstStep()}
              className={this.props.classes.button}
              onClick={() => this.handleStepSwitch(this.state.step - 1)}
            >
              <PrevIcon className={this.props.classes.buttonIcon} />
              <FormattedMessage id="WIZARD_PREV_BUTTON" />
            </Button>
            <div className={this.props.classes.status}>
              <Typography variant="body1" color="inherit">
                <FormattedMessage id={this.getWizardStatus()} />
              </Typography>
            </div>
            {this.isLastStep() && (
              <Button
                variant="contained"
                color="secondary"
                disabled={!this.isAllDone()}
                className={this.props.classes.button}
                onClick={this.handleSubmit}
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
                onClick={() => this.handleStepSwitch(this.state.step + 1)}
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
              onClick={() => this.handleStepSwitch(this.state.step - 1)}
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
                onClick={this.handleSubmit}
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
                onClick={() => this.handleStepSwitch(this.state.step + 1)}
              >
                <NextIcon className={this.props.classes.buttonIcon} />
                <FormattedMessage id="WIZARD_NEXT_BUTTON" />
              </Button>
            )}
          </div>
          <div className={this.props.classes.status}>
            <Typography variant="body1" color="inherit">
              <FormattedMessage id={this.getWizardStatus()} />
            </Typography>
          </div>
        </Hidden>
      </>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Typography
          variant="h3"
          color="inherit"
          className={this.props.classes.title}
        >
          <FormattedMessage id="TITLE_FORMS" />
        </Typography>

        <div className={this.props.classes.root}>
          <Paper className={this.props.classes.page}>
            <Hidden smDown>{this.renderHeader(false)}</Hidden>
            <Hidden mdUp>{this.renderHeader(true)}</Hidden>

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
                        <Form
                          shippingValues={
                            this.forms[ShippingForm.formName].values
                          }
                          shippingErrors={
                            this.forms[ShippingForm.formName].errors
                          }
                          billingValues={
                            this.forms[BillingForm.formName].values
                          }
                          billingErrors={
                            this.forms[BillingForm.formName].errors
                          }
                          onSetStatus={this.handleStepStatus}
                        />
                      </div>
                    );
                  })}
                </SwipeableViews>
              )}
            </AutoSizer>

            {this.renderFooter()}
          </Paper>

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

export default Wizard;
