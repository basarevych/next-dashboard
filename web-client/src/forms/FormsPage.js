import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect
} from "react";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { AutoSizer } from "react-virtualized";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/styles";
import { lighten } from "@material-ui/core/styles/colorManipulator";
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
import ShippingInfo from "./ShippingInfo";
import BillingForm from "./BillingForm";
import BillingInfo from "./BillingInfo";
import ConfirmForm from "./ConfirmForm";
import MessageModal from "../app/modals/MessageModal";
import shippingSchema from "../../common/forms/shipping";
import billingSchema from "../../common/forms/billing";

const useIsomorphicLayoutEffect = process.browser ? useLayoutEffect : useEffect;

const shippingFields = _.keys(shippingSchema.fields);
const billingFields = _.keys(billingSchema.fields);

const useStyles = makeStyles(theme => ({
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
    margin: "3rem 1rem 1rem 1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    }
  },
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(2)
  },
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
    width: theme.spacing(50),
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
      marginTop: theme.spacing(1) / 2,
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
    marginLeft: -theme.spacing(1) / 2,
    marginRight: theme.spacing(1) / 2
  }
}));

function FormsPage(props) {
  const classes = useStyles(props);

  const [trigger, setTrigger] = useState(0);

  const [currentStep, setCurrentStep] = useState(0);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const shippingForm = useRef(null);
  const [shippingValues, setShippingValues] = useState({});
  const [shippingErrors, setShippingErrors] = useState({});
  const [shippingTouched, setShippingTouched] = useState(false);

  const billingForm = useRef(null);
  const [billingValues, setBillingValues] = useState({});
  const [billingErrors, setBillingErrors] = useState({});
  const [billingTouched, setBillingTouched] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const bag = shippingForm.current && shippingForm.current.getFormikBag();
    const values = bag ? bag.values : {};
    const errors = bag ? bag.errors : {};
    if (!_.isEqual(values, shippingValues)) setShippingValues(values);
    if (!_.isEqual(errors, shippingErrors)) setShippingErrors(errors);
  }, [trigger]);

  useIsomorphicLayoutEffect(() => {
    const bag = billingForm.current && billingForm.current.getFormikBag();
    const values = bag ? bag.values : {};
    const errors = bag ? bag.errors : {};
    if (!_.isEqual(values, billingValues)) setBillingValues(values);
    if (!_.isEqual(errors, billingErrors)) setBillingErrors(errors);
  }, [trigger]);

  const handleMessageOpen = useCallback(() => {
    setIsMessageOpen(true);
  }, [setIsMessageOpen]);

  const handleMessageClose = useCallback(() => {
    setIsMessageOpen(false);
  }, [setIsMessageOpen]);

  const getIsFirstStep = () => currentStep === 0;

  const getIsLastStep = () => currentStep === 2;

  const getIsError = step => {
    switch (step) {
      case 0:
        return (
          currentStep != 0 && shippingTouched && _.keys(shippingErrors).length
        );
      case 1:
        return (
          currentStep != 1 && billingTouched && _.keys(billingErrors).length
        );
    }
    return false;
  };

  const getIsCompleted = step => {
    switch (step) {
      case 0:
        return (
          currentStep != 0 && shippingTouched && !_.keys(shippingErrors).length
        );
      case 1:
        return (
          currentStep != 1 && billingTouched && !_.keys(billingErrors).length
        );
    }
    return false;
  };

  const getIsAllDone = () => getIsCompleted(0) && getIsCompleted(1);

  const getWizardStatus = () => {
    switch (currentStep) {
      case 0:
        return "SHIPPING_STEP_DESCR";
      case 1:
        return "BILLING_STEP_DESCR";
    }
    return getIsAllDone()
      ? "CONFIRM_STEP_DESCR_SUCCESS"
      : "CONFIRM_STEP_DESCR_FAILURE";
  };

  const handleStepSwitch = async newStep => {
    if (newStep === currentStep) return;

    if (currentStep === 0 || newStep === 2) {
      if (!shippingForm.current) return;

      shippingForm.current.setTouched(
        _.reduce(
          shippingFields,
          (acc, cur) => {
            acc[cur] = true;
            return acc;
          },
          {}
        )
      );

      await shippingForm.current.validateForm();
      setShippingTouched(true);
    }

    if (currentStep === 1 || newStep === 2) {
      if (!billingForm.current) return;

      billingForm.current.setTouched(
        _.reduce(
          billingFields,
          (acc, cur) => {
            acc[cur] = true;
            return acc;
          },
          {}
        )
      );

      await billingForm.current.validateForm();
      setBillingTouched(true);
    }

    setCurrentStep(newStep);
    setTrigger(value => value + 1);
  };

  const renderHeaderStep = step => {
    let Icon;
    switch (step) {
      case 0:
        Icon = getIsCompleted(0) ? CompletedIcon : ShippingIcon;
        break;
      case 1:
        Icon = getIsCompleted(1) ? CompletedIcon : BillingIcon;
        break;
      case 2:
        Icon = getIsCompleted(2) ? CompletedIcon : ConfirmIcon;
        break;
    }

    const labelProps = {
      classes: {
        alternativeLabel: classes.stepLabelAlternative,
        label: classes.stepLabel,
        active: classes.stepLabelActive
      },
      icon: (
        <Icon
          className={classNames(
            classes.stepLabelIcon,
            currentStep === step && classes.stepLabelActive
          )}
          color="inherit"
          fontSize="inherit"
        />
      ),
      onClick: () => handleStepSwitch(step)
    };
    if (getIsError(step)) {
      labelProps.error = true;
      labelProps.optional = (
        <Typography variant="button" className={classes.stepLabelError}>
          <FormattedMessage id="WIZARD_ERROR_LABEL" />
        </Typography>
      );
    }
    return (
      <Step className={classes.step}>
        <StepLabel {...labelProps}>
          {step === 0 && <FormattedMessage id="SHIPPING_STEP_TITLE" />}
          {step === 1 && <FormattedMessage id="BILLING_STEP_TITLE" />}
          {step === 2 && <FormattedMessage id="CONFIRM_STEP_TITLE" />}
        </StepLabel>
      </Step>
    );
  };

  const renderHeader = (isVertical = false) => {
    return (
      <Stepper
        nonLinear
        alternativeLabel={!isVertical}
        orientation={isVertical ? "vertical" : "horizontal"}
        activeStep={currentStep}
        connector={<StepConnector classes={{ line: classes.line }} />}
        className={classes.stepper}
      >
        {renderHeaderStep(0)}
        {renderHeaderStep(1)}
        {renderHeaderStep(2)}
      </Stepper>
    );
  };

  const renderFooter = () => {
    return (
      <>
        <Hidden smDown>
          <div className={classes.footer}>
            <Button
              variant="contained"
              color="primary"
              disabled={getIsFirstStep()}
              className={classes.button}
              onClick={() => handleStepSwitch(currentStep - 1)}
            >
              <PrevIcon className={classes.buttonIcon} />
              <FormattedMessage id="WIZARD_PREV_BUTTON" />
            </Button>
            <div className={classes.status}>
              <Typography variant="body1" color="inherit">
                <FormattedMessage id={getWizardStatus()} />
              </Typography>
            </div>
            {getIsLastStep() && (
              <Button
                variant="contained"
                color="secondary"
                disabled={!getIsAllDone()}
                className={classes.button}
                onClick={handleMessageOpen}
              >
                <SubmitIcon className={classes.buttonIcon} />
                <FormattedMessage id="WIZARD_SUBMIT_BUTTON" />
              </Button>
            )}
            {!getIsLastStep() && (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => handleStepSwitch(currentStep + 1)}
              >
                <NextIcon className={classes.buttonIcon} />
                <FormattedMessage id="WIZARD_NEXT_BUTTON" />
              </Button>
            )}
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.footer}>
            <Button
              variant="contained"
              color="primary"
              disabled={getIsFirstStep()}
              className={classes.button}
              onClick={() => handleStepSwitch(currentStep - 1)}
            >
              <PrevIcon className={classes.buttonIcon} />
              <FormattedMessage id="WIZARD_PREV_BUTTON" />
            </Button>
            {getIsLastStep() && (
              <Button
                variant="contained"
                color="secondary"
                disabled={!getIsAllDone()}
                className={classes.button}
                onClick={handleMessageOpen}
              >
                <SubmitIcon className={classes.buttonIcon} />
                <FormattedMessage id="WIZARD_SUBMIT_BUTTON" />
              </Button>
            )}
            {!getIsLastStep() && (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => handleStepSwitch(currentStep + 1)}
              >
                <NextIcon className={classes.buttonIcon} />
                <FormattedMessage id="WIZARD_NEXT_BUTTON" />
              </Button>
            )}
          </div>
          <div className={classes.status}>
            <Typography variant="body1" color="inherit">
              <FormattedMessage id={getWizardStatus()} />
            </Typography>
          </div>
        </Hidden>
      </>
    );
  };

  return (
    <React.Fragment>
      <div className={classes.message}>
        <Typography variant="h6" className={classes.messageTitle}>
          <FormattedMessage id="FORMS_MESSAGE_TITLE" />
        </Typography>
        <Typography variant="body1" className={classes.messageContent}>
          <FormattedMessage id="FORMS_MESSAGE_CONTENT" />
        </Typography>
      </div>

      <div className={classes.layout}>
        <Typography variant="h3" color="inherit" className={classes.title}>
          <FormattedMessage id="TITLE_FORMS" />
        </Typography>

        <div className={classes.root}>
          <Paper className={classes.page}>
            <Hidden smDown>{renderHeader(false)}</Hidden>
            <Hidden mdUp>{renderHeader(true)}</Hidden>

            <AutoSizer disableHeight>
              {({ width }) => (
                <SwipeableViews index={currentStep} style={{ width }}>
                  <div className={classes.form}>
                    <ShippingForm ref={shippingForm} />
                  </div>
                  <div className={classes.form}>
                    <BillingForm
                      ref={billingForm}
                      shippingValues={shippingValues}
                    />
                  </div>
                  <div className={classes.form}>
                    <ConfirmForm
                      shippingValues={shippingValues}
                      shippingErrors={shippingErrors}
                      billingValues={billingValues}
                      billingErrors={billingErrors}
                    />
                  </div>
                </SwipeableViews>
              )}
            </AutoSizer>

            {renderFooter()}
          </Paper>

          {currentStep === 0 && <ShippingInfo className={classes.info} />}
          {currentStep === 1 && <BillingInfo className={classes.info} />}
          {currentStep === 2 && <div className={classes.info} />}
        </div>

        {isMessageOpen && (
          <MessageModal
            title="FORMS_SUCCESS_TITLE"
            text="FORMS_SUCCESS_TEXT"
            submit="FORMS_SUCCESS_SUBMIT"
            onSubmit={handleMessageClose}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default FormsPage;
