import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "100%",
    maxWidth: 700
  },
  title: {
    borderBottom: `1px dotted ${theme.palette.text.primary}`
  },
  hint: {
    marginTop: "4rem",
    marginLeft: "5rem"
  }
}));

function AuthErrorPage(props) {
  const classes = useStyles(props);

  let msg = "OAUTH_ERROR_GENERIC";
  let hints = [];
  if (props.type === "oauth") {
    msg = "OAUTH_ERROR_ACCOUNT_EXISTS";
    hints.push({
      title: "OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1",
      body: "OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1"
    });
    hints.push({
      title: "OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2",
      body: "OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2"
    });
  }

  return (
    <div className={classes.layout}>
      <div className={classes.form}>
        <Typography variant="h4" classes={{ root: classes.title }}>
          <FormattedMessage id="TITLE_OAUTH_ERROR" />
        </Typography>
        <p>
          <FormattedMessage id={msg} />
        </p>
        {hints.map((hint, index) => (
          <div key={`hint-${index}`} className={classes.hint}>
            <Typography variant="h5">
              <FormattedMessage id={hint.title} />
            </Typography>
            <Typography variant="body1">
              <FormattedMessage id={hint.body} />
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

AuthErrorPage.propTypes = {
  type: PropTypes.string
};

AuthErrorPage.getInitialProps = ({ query: requestQuery }) => {
  return {
    type: requestQuery.type
  };
};

export default AuthErrorPage;
