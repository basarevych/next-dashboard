import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FieldMessages from "./FieldMessagesContainer";

export const styles = () => ({
  formHelper: {
    margin: 0
  },
  label: {
    marginLeft: 0
  }
});

class MyError extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    className: PropTypes.string,
    variant: PropTypes.string
  };

  render() {
    let errors = null;
    if (
      this.props.meta.touched &&
      !this.props.meta.active &&
      !this.props.meta.submitting &&
      (this.props.meta.error ||
        (this.props.meta.submitError && !this.props.meta.dirtySinceLastSubmit))
    ) {
      errors = [];
      if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
      if (this.props.meta.submitError)
        errors = errors.concat(this.props.meta.submitError);
      errors = _.uniq(errors);
    }

    if (!errors) return null;

    return (
      <FormControl
        className={this.props.className}
        variant={this.props.variant || "standard"}
        fullWidth
        error={!!errors}
      >
        <FormHelperText
          component="div"
          classes={{ root: this.props.classes.formHelper }}
        >
          <FieldMessages errors={errors} />
        </FormHelperText>
      </FormControl>
    );
  }
}

export default MyError;
