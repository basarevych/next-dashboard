import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import NumberFormat from "react-number-format";
import TextField from "@material-ui/core/TextField";
import FieldMessages from "./FieldMessages";

const useStyles = makeStyles(() => ({
  formHelper: {
    margin: 0
  }
}));

function MyText(props) {
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
    type,
    name,
    field,
    label,
    form,
    format,
    disabled,
    messages,
    forwardedRef,
    handleSubmit,
    ...restProps
  } = props;

  const Component = format ? NumberFormat : TextField;
  const extraProps = format ? { customInput: TextField, format } : {};
  const errors = !!form.touched[name] && form.errors[name];

  return (
    <Component
      fullWidth
      {...extraProps}
      {...restProps}
      className={className}
      autoComplete="off"
      variant={variant || (type === "textarea" ? "outlined" : "standard")}
      type={type}
      multiline={type === "textarea"}
      name={name}
      value={field.value ? field.value.toString() : ""}
      label={label}
      disabled={form.isSubmitting || disabled}
      error={!!errors}
      FormHelperTextProps={{
        component: messages || errors ? "div" : undefined,
        classes: { root: classes.formHelper }
      }}
      helperText={
        messages || errors ? (
          <FieldMessages messages={messages || null} errors={errors || null} />
        ) : (
          undefined
        )
      }
      onChange={handleChange}
      onBlur={handleBlur}
      inputRef={forwardedRef}
      inputProps={{
        onKeyDown: evt => {
          if (type !== "textarea" && evt.keyCode === 13) {
            evt.preventDefault();
            evt.stopPropagation();
            handleSubmit();
          }
        }
      }}
    />
  );
}

MyText.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  forwardedRef: PropTypes.object,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password", "textarea"]).isRequired,
  label: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  variant: PropTypes.string,
  format: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default MyText;
