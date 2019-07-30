import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import FieldMessages from "./FieldMessagesContainer";

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
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.string),
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
            <Radio
              name={this.props.field.name}
              value={this.props.value}
              autoFocus={this.props.autoFocus}
              checked={this.props.field.value === this.props.value}
              disabled={this.props.form.isSubmitting || this.props.disabled}
              color={this.props.color || "primary"}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
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
        />
        {!!this.props.messages && (
          <FormHelperText
            component="div"
            classes={{ root: this.props.classes.formHelper }}
          >
            <FieldMessages
              messages={this.props.messages || null}
              errors={null}
            />
          </FormHelperText>
        )}
      </FormControl>
    );
  }
}

export default MyRadio;
