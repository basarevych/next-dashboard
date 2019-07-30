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
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    variant: PropTypes.string
  };

  render() {
    let errors =
      !!this.props.form.touched[this.props.name] &&
      this.props.form.errors[this.props.name];

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
