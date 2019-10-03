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
          _.map(
            _.isArray(props.error) ? props.error : [props.error],
            (item, index) => (
              <div key={`error-${index}`} className={props.classes.error}>
                {_.isArray(item) ? (
                  <FormattedMessage id={item[0]} values={item[1]} />
                ) : (
                  <FormattedMessage id={item} />
                )}
              </div>
            )
          )}
        {!!props.message &&
          _.map(
            _.isArray(props.message) ? props.message : [props.message],
            (item, index) => (
              <div key={`error-${index}`} className={props.classes.info}>
                {_.isArray(item) ? (
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
