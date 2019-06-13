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
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.string),
    native: PropTypes.bool,
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(evt) {
    this.props.onChange(evt);
    return this.props.field.onChange(evt);
  }

  handleBlur(evt) {
    this.props.onBlur(evt);
    return this.props.field.onBlur(evt);
  }

  render() {
    let errors =
      !!this.props.form.touched[this.props.name] &&
      this.props.form.errors[this.props.name];

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
          name={this.props.field.name}
          value={
            this.props.field.value ? this.props.field.value.toString() : ""
          }
          native={this.props.native}
          autoFocus={this.props.autoFocus}
          disabled={this.props.form.isSubmitting || this.props.disabled}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          input={
            <SelectInput
              inputProps={{
                onKeyDown: evt => {
                  if (evt.keyCode === 13) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    this.props.handleSubmit();
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
            <FieldMessages
              messages={this.props.messages || null}
              errors={errors || null}
            />
          </FormHelperText>
        )}
      </FormControl>
    );
  }
}

export default MySelect;
