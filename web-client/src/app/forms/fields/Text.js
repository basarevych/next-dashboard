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
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "password", "textarea"]).isRequired,
    label: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.string),
    autoFocus: PropTypes.bool,
    rows: PropTypes.number,
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

    this.input = React.createRef();
    this.cachedValue = props.field.value;
    this.cachedPosition = 0;

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidUpdate() {
    if (this.input.current) {
      // Fixes case when input is normalized in onChange() and
      // because of that cursor sometimes jumps to the end of input.
      let cur = this.props.field.value || "";
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
    this.props.onChange(evt);
    return this.props.field.onChange(evt);
  }

  handleFocus(evt) {
    this.cachedPosition = evt.target.value.length;
    if (this.input.current) {
      this.input.current.setSelectionRange(
        this.cachedPosition,
        this.cachedPosition
      );
    }
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
        name={this.props.name}
        value={this.props.field.value ? this.props.field.value.toString() : ""}
        label={this.props.label}
        disabled={this.props.form.isSubmitting || this.props.disabled}
        error={!!errors}
        FormHelperTextProps={{
          component: this.props.messages || errors ? "div" : undefined,
          classes: { root: this.props.classes.formHelper }
        }}
        helperText={
          this.props.messages || errors ? (
            <FieldMessages
              messages={this.props.messages || null}
              errors={errors || null}
            />
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
            if (this.props.type !== "textarea" && evt.keyCode === 13) {
              evt.preventDefault();
              evt.stopPropagation();
              this.props.handleSubmit();
            }
          }
        }}
      />
    );
  }
}

export default MyText;
