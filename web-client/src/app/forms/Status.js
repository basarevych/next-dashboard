import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";

function Status(props) {
  if (!props.error && !props.message) return null;

  return (
    <Grow in>
      <Grid item xs={12}>
        {!!props.error &&
          (Array.isArray(props.error) ? props.error : [props.error]).map(
            (item, index) => (
              <div key={`error-${index}`} className={props.classes.error}>
                {Array.isArray(item) ? (
                  <FormattedMessage id={item[0]} values={item[1]} />
                ) : (
                  <FormattedMessage id={item} />
                )}
              </div>
            )
          )}
        {!!props.message &&
          (Array.isArray(props.message) ? props.message : [props.message]).map(
            (item, index) => (
              <div key={`error-${index}`} className={props.classes.info}>
                {Array.isArray(item) ? (
                  <FormattedMessage id={item[0]} values={item[1]} />
                ) : (
                  <FormattedMessage id={item} />
                )}
              </div>
            )
          )}
      </Grid>
    </Grow>
  );
}

Status.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  classes: PropTypes.object.isRequired
};

export default Status;
