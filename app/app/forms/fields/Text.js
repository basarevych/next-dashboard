import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Errors from "./ErrorsContainer";

export const styles = () => ({
  formHelper: {
    margin: 0
  }
});

class MyText extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    fieldId: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    type: PropTypes.oneOf(["text", "password", "textarea"]).isRequired,
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
      // fix cursor position on changing the value to the normalized variant
      let cur = this.props.input.value || "";
      let cached = this.cachedValue || "";
      if (this.cachedPosition !== cached.length) {
        let str = cached.substr(0, this.cachedPosition);
        let index = cur.indexOf(str);
        index =
          index === -1 ? this.cachedPosition : index + this.cachedPosition;
        let delta = cur.length - cached.length;
        if (delta > 0) index += delta;
        if (index <= cur.length)
          this.input.current.setSelectionRange(index, index);
      }
    }

    this.cachedValue = this.props.input.value;
  }

  handleChange(evt) {
    this.cachedPosition = evt.target.selectionEnd;
    this.cachedValue = evt.target.value;
    this.forceUpdate();
    return this.props.input.onChange(evt.target.value);
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
    const errors = this.props.meta.error ? (
      <Errors errors={this.props.meta.error} />
    ) : null;

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
          component: errors ? "div" : undefined,
          classes: { root: this.props.classes.formHelper }
        }}
        helperText={errors || undefined}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        inputRef={this.input}
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
    );
  }
}

export default MyText;
