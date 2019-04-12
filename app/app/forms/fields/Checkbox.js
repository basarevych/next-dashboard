import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import FieldMessages from "./FieldMessagesContainer";

export const styles = () => ({
  formHelper: {
    margin: 0
  },
  label: {
    marginLeft: 0
  }
});

class MyCheckbox extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.string),
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onSubmit: PropTypes.func
  };

  render() {
    let errors = null;
    if (
      this.props.meta.touched &&
      !this.props.meta.active &&
      (this.props.meta.error || this.props.meta.submitError)
    ) {
      errors = [];
      if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
      if (this.props.meta.submitError)
        errors = errors.concat(this.props.meta.submitError);
      errors = _.uniq(errors);
    }

    return (
      <FormControl
        className={this.props.className}
        variant={this.props.variant || "standard"}
        fullWidth
        error={!!errors}
      >
        <FormControlLabel
          classes={{ root: this.props.classes.label }}
          label={this.props.label}
          control={
            <Checkbox
              name={this.props.input.name}
              value="on"
              autoFocus={this.props.autoFocus}
              checked={this.props.input.value}
              disabled={this.props.meta.submitting || this.props.disabled}
              color={this.props.color || "primary"}
              onChange={this.props.input.onChange}
              onBlur={this.props.input.onBlur}
              onFocus={this.props.input.onFocus}
              inputProps={{
                onKeyDown: evt => {
                  if (this.props.onSubmit && evt.keyCode === 13) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    this.props.form.blur(this.props.input.name);
                    this.props.onSubmit();
                  }
                }
              }}
            />
          }
        />
        {!!(this.props.messages || errors) && (
          <FormHelperText
            component="div"
            classes={{ root: this.props.classes.formHelper }}
          >
            <FieldMessages messages={this.props.messages} errors={errors} />
          </FormHelperText>
        )}
      </FormControl>
    );
  }
}

export default MyCheckbox;
