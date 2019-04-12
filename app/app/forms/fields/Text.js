import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import FieldMessages from "./FieldMessagesContainer";

export const styles = () => ({
  formHelper: {
    margin: 0
  }
});

class MyText extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    type: PropTypes.oneOf(["text", "password", "textarea"]).isRequired,
    messages: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool,
    rows: PropTypes.number,
    className: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onSubmit: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.cachedValue = props.input.value;
    this.cachedPosition = 0;

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidUpdate() {
    if (this.input.current) {
      // Fixes case when input is normalized in onChange() and
      // the cursor sometimes jumps to the end of input.
      let cur = this.props.input.value || "";
      let cached = this.cachedValue || "";
      if (this.cachedPosition !== cached.length) {
        let str = cached.substr(0, this.cachedPosition);
        let index = cur.indexOf(str);
        index =
          index === -1 ? this.cachedPosition : index + this.cachedPosition;
        let delta = cur.length - cached.length;
        if (cached !== str && delta > 0) index += delta;
        if (index <= cur.length)
          this.input.current.setSelectionRange(index, index);
      }
    }
  }

  handleChange(evt) {
    this.cachedPosition = evt.target.selectionEnd;
    this.cachedValue = evt.target.value;
    this.forceUpdate();
    return this.props.input.onChange(evt);
  }

  handleFocus(evt) {
    this.cachedPosition = evt.target.selectionEnd;
    this.forceUpdate();
    return this.props.input.onFocus(evt);
  }

  handleBlur(evt) {
    return this.props.input.onBlur(evt);
  }

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
      <TextField
        className={this.props.className}
        autoComplete="off"
        autoFocus={this.props.autoFocus}
        fullWidth
        variant={
          this.props.variant ||
          (this.props.type === "textarea" ? "outlined" : "standard")
        }
        type={this.props.type}
        multiline={this.props.type === "textarea"}
        rows={this.props.rows}
        rowsMax={this.props.rows}
        value={this.props.input.value ? this.props.input.value.toString() : ""}
        label={this.props.label}
        disabled={this.props.meta.submitting || this.props.disabled}
        error={!!errors}
        FormHelperTextProps={{
          component: this.props.messages || errors ? "div" : undefined,
          classes: { root: this.props.classes.formHelper }
        }}
        helperText={
          this.props.messages || errors ? (
            <FieldMessages messages={this.props.messages} errors={errors} />
          ) : (
            undefined
          )
        }
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        inputRef={this.input}
        inputProps={{
          onKeyDown: evt => {
            if (
              this.props.type !== "textarea" &&
              this.props.onSubmit &&
              evt.keyCode === 13
            ) {
              evt.preventDefault();
              evt.stopPropagation();
              this.props.form.blur(this.props.input.name);
              this.props.onSubmit();
            }
          }
        }}
      />
    );
  }
}

export default MyText;
