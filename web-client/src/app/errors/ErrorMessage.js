import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useIntl, FormattedMessage } from "react-intl";
import HttpStatus from "http-status-codes";
import { makeStyles } from "@material-ui/styles";
import Link from "@material-ui/core/Link";
import { appOperations } from "../state";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "100%",
    maxWidth: 1300 + theme.spacing(2),
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: theme.spacing(1) / 2,
      maxWidth: 1300 + theme.spacing(1)
    }
  },
  code: {
    fontSize: "300%",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    padding: "0.5rem 2rem",
    color: `1px solid ${theme.palette.text.primary}`,
    borderRight: `1px solid ${theme.palette.text.disabled}`,
    [theme.breakpoints.down("md")]: {
      borderRight: "none"
    }
  },
  text: {
    fontSize: "200%",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    padding: "0.5rem 2rem",
    color: `1px solid ${theme.palette.text.secondary}`,
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  },
  linkWrapper: {
    fontSize: "1rem",
    marginTop: "1rem"
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      color: "#ffffff"
    }
  }
}));

function ErrorMessage(props) {
  const intl = useIntl();
  const router = useRouter();
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const code = useMemo(() => {
    if (props.error) return intl.formatMessage({ id: "ERROR" });
    if (!props.statusCode || props.statusCode === 200) return 500;
    return props.statusCode;
  }, [props.error, props.statusCode]);

  const text = useMemo(() => {
    if (props.error) return props.error.message;
    return _.isString(code)
      ? "An Error Occurred"
      : HttpStatus.getStatusText(code);
  }, [props.error, code]);

  const reload = useCallback(() => window.location.reload(true));

  const signIn = useCallback(() => dispatch(appOperations.showAuthModal()), [
    dispatch
  ]);

  return (
    <div className={classes.layout}>
      <div className={classes.code}>{code}</div>
      <div className={classes.text}>
        {text}
        <div className={classes.linkWrapper}>
          <div>
            &gt;&nbsp;&nbsp;
            <Link className={classes.link} onClick={reload}>
              <FormattedMessage id="ERROR_REFRESH_LINK" />
            </Link>
          </div>
          {router.asPath !== "/" && (
            <div>
              &gt;&nbsp;&nbsp;
              <Link href="/" className={classes.link}>
                <FormattedMessage id="ERROR_GO_HOME_LINK" />
              </Link>
            </div>
          )}
          {code === 401 && (
            <div>
              &gt;&nbsp;&nbsp;
              <Link className={classes.link} onClick={signIn}>
                <FormattedMessage id="ERROR_TRY_AUTH_LINK" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  statusCode: PropTypes.number,
  error: PropTypes.object
};

export default ErrorMessage;
