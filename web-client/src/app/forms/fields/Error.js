import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FieldMessages from "./FieldMessages";

const useStyles = makeStyles(() => ({
  formHelper: {
    margin: 0
  },
  label: {
    marginLeft: 0
  }
}));

function MyError(props) {
  const classes = useStyles(props);

  const errors =
    !!props.form.touched[props.name] && props.form.errors[props.name];

  if (!errors) return null;

  return (
    <FormControl
      className={props.className}
      variant={props.variant || "standard"}
      fullWidth
      error={!!errors}
    >
      <FormHelperText component="div" classes={{ root: classes.formHelper }}>
        <FieldMessages errors={errors} />
      </FormHelperText>
    </FormControl>
  );
}

MyError.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string
};

export default MyError;
