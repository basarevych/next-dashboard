import React from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import Input from "@material-ui/core/Input";
import Errors from "./Errors";

const styles = () => ({
  formHelper: {
    margin: 0
  }
});

class MySelect extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    fieldId: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    type: PropTypes.oneOf(["select"]).isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.instanceOf(List).isRequired,
    native: PropTypes.bool,
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
    const SelectInput = this.props.variant === "filled" ? FilledInput : Input;

    return (
      <FormControl
        className={this.props.className}
        variant={this.props.variant || "standard"}
        fullWidth
        error={!!errors}
      >
        <InputLabel htmlFor={this.props.fieldId}>{this.props.label}</InputLabel>
        <Select
          value={this.props.input.value || ""}
          native={this.props.native}
          autoFocus={this.props.autoFocus}
          disabled={this.props.meta.submitting || this.props.disabled}
          onChange={this.handleChange}
          input={
            <SelectInput
              inputProps={{
                id: this.props.fieldId,
                onKeyDown: evt => {
                  if (this.props.onSubmit && evt.keyCode === 13) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    this.props.onSubmit();
                  }
                }
              }}
            />
          }
        >
          {!this.props.native &&
            // eslint-disable-next-line lodash/prefer-lodash-method
            this.props.options.map((item, index) => (
              <MenuItem key={`item-${index}`} value={item.get("value")}>
                {item.get("label")}
              </MenuItem>
            ))}
          {!!this.props.native &&
            // eslint-disable-next-line lodash/prefer-lodash-method
            this.props.options.map((item, index) => (
              <option key={`item-${index}`} value={item.get("value")}>
                {item.get("label")}
              </option>
            ))}
        </Select>
        {errors}
      </FormControl>
    );
  }
}

export default withStyles(styles)(MySelect);
