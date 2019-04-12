import React from "react";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import Input from "@material-ui/core/Input";
import FieldMessages from "./FieldMessagesContainer";

export const styles = () => ({
  formHelper: {
    margin: 0
  }
});

class MySelect extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    messages: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    native: PropTypes.bool,
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
      (this.props.meta.error || this.props.meta.submitError)
    ) {
      errors = [];
      if (this.props.meta.error) errors = errors.concat(this.props.meta.error);
      if (this.props.meta.submitError)
        errors = errors.concat(this.props.meta.submitError);
      errors = _.uniq(errors);
    }

    const SelectInput = this.props.variant === "filled" ? FilledInput : Input;

    return (
      <FormControl
        className={this.props.className}
        variant={this.props.variant || "standard"}
        fullWidth
        error={!!errors}
      >
        <InputLabel>{this.props.label}</InputLabel>
        <Select
          value={this.props.input.value || ""}
          native={this.props.native}
          autoFocus={this.props.autoFocus}
          disabled={this.props.meta.submitting || this.props.disabled}
          onChange={this.props.input.onChange}
          onBlur={this.props.input.onBlur}
          onFocus={this.props.input.onFocus}
          input={
            <SelectInput
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
        >
          {!this.props.native &&
            _.map(this.props.options, (item, index) => (
              <MenuItem key={`item-${index}`} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          {!!this.props.native &&
            _.map(this.props.options, (item, index) => (
              <option key={`item-${index}`} value={item.value}>
                {item.label}
              </option>
            ))}
        </Select>
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

export default MySelect;
