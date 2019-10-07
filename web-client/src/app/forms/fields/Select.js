import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import Input from "@material-ui/core/Input";
import FieldMessages from "./FieldMessages";

const useStyles = makeStyles(() => ({
  formHelper: {
    margin: 0
  }
}));

function MySelect(props) {
  const classes = useStyles(props);

  const handleChange = useCallback(
    evt => {
      if (props.onChange) props.onChange(evt);
      return props.field.onChange(evt);
    },
    [props.onChange, props.field.onChange]
  );

  const handleBlur = useCallback(
    evt => {
      if (props.onBlur) props.onBlur(evt);
      return props.field.onBlur(evt);
    },
    [props.onBlur, props.field.onBlur]
  );

  const {
    className,
    variant,
    label,
    name,
    field,
    form,
    disabled,
    forwardedRef,
    handleSubmit,
    messages,
    ...restProps
  } = props;

  const SelectInput = variant === "filled" ? FilledInput : Input;
  const errors = !!form.touched[name] && form.errors[name];

  return (
    <FormControl
      className={className}
      variant={variant || "standard"}
      fullWidth
      error={!!errors}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        {...restProps}
        ref={forwardedRef}
        name={name}
        value={field.value ? field.value.toString() : ""}
        disabled={form.isSubmitting || disabled}
        onChange={handleChange}
        onBlur={handleBlur}
        input={
          <SelectInput
            inputProps={{
              onKeyDown: evt => {
                if (evt.keyCode === 13) {
                  evt.preventDefault();
                  evt.stopPropagation();
                  handleSubmit();
                }
              }
            }}
          />
        }
      >
        {!props.native &&
          props.options.map((item, index) => (
            <MenuItem key={`item-${index}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        {!!props.native &&
          props.options.map((item, index) => (
            <option key={`item-${index}`} value={item.value}>
              {item.label}
            </option>
          ))}
      </Select>
      {!!(messages || errors) && (
        <FormHelperText component="div" classes={{ root: classes.formHelper }}>
          <FieldMessages messages={messages || null} errors={errors || null} />
        </FormHelperText>
      )}
    </FormControl>
  );
}

MySelect.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  forwardedRef: PropTypes.object,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  native: PropTypes.bool,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default MySelect;
