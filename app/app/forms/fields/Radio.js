import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import Errors from "./ErrorsContainer";

export const styles = () => ({
  formHelper: {
    margin: 0
  },
  label: {
    marginLeft: 0
  }
});

class MyRadio extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    fieldId: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    type: PropTypes.oneOf(["radio"]).isRequired,
    label: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onSubmit: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(evt) {
    return this.props.input.onChange(evt.target.value);
  }

  handleFocus(evt) {
    return this.props.input.onFocus(evt);
  }

  handleBlur(evt) {
    return this.props.input.onBlur(evt);
  }

  render() {
    const errors = this.props.meta.error ? (
      <FormHelperText
        component="div"
        classes={{ root: this.props.classes.formHelper }}
      >
        <Errors errors={this.props.meta.error} />
      </FormHelperText>
    ) : null;

    return (
      <FormControl
        className={this.props.className}
        variant={this.props.variant || "standard"}
        fullWidth
        error={!!errors}
      >
        <FormControlLabel
          classes={{ root: this.props.classes.label }}
          control={
            <Radio
              id={`${this.props.fieldId}-${this.props.input.value}`}
              name={this.props.input.name}
              value={this.props.input.value}
              autoFocus={this.props.autoFocus}
              checked={this.props.input.checked}
              disabled={this.props.meta.submitting || this.props.disabled}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              color={this.props.color || "primary"}
            />
          }
          label={this.props.label}
        />
        {errors}
      </FormControl>
    );
  }
}

export default MyRadio;
