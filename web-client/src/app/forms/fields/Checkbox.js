import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import FieldMessages from "./FieldMessages";

const useStyles = makeStyles(() => ({
  formHelper: {
    margin: 0
  },
  label: {
    marginLeft: 0
  }
}));

function MyCheckbox(props) {
  const classes = useStyles(props);

  const handleChange = useCallback(
    evt => {
      evt.target.value = evt.target.checked;
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
    color,
    field,
    form,
    disabled,
    handleSubmit,
    forwardedRef,
    messages,
    ...restProps
  } = props;

  const errors = !!form.touched[name] && form.errors[name];

  return (
    <FormControl
      className={className}
      variant={variant || "standard"}
      fullWidth
      error={!!errors}
    >
      <FormControlLabel
        classes={{ root: classes.label }}
        label={label}
        control={
          <Checkbox
            {...restProps}
            name={name}
            value="on"
            checked={!!field.value}
            disabled={form.isSubmitting || disabled}
            color={color || "primary"}
            onChange={handleChange}
            onBlur={handleBlur}
            inputRef={forwardedRef}
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
      />
      {!!(messages || errors) && (
        <FormHelperText component="div" classes={{ root: classes.formHelper }}>
          <FieldMessages messages={messages || null} errors={errors || null} />
        </FormHelperText>
      )}
    </FormControl>
  );
}

MyCheckbox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  forwardedRef: PropTypes.object,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default MyCheckbox;
