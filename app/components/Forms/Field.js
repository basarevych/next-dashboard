import React from "react";
import PropTypes from "prop-types";
import shallowEquals from "react-redux/lib/utils/shallowEqual";
import { injectIntl, FormattedMessage } from "react-intl";
import { Field } from "redux-form/immutable";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import red from "@material-ui/core/colors/red";
import ErrorIcon from "@material-ui/icons/InfoOutlined";
import normalize from "../../../common/normalize";

const styles = () => ({
  formHelper: {
    margin: 0
  },
  errorList: {
    padding: 0
  },
  errorListItem: {
    paddingTop: "0.5rem",
    paddingLeft: "0.5rem",
    paddingRight: 0
  },
  label: {
    marginLeft: 0
  },
  error: {
    color: red[300]
  }
});

class FieldComponent extends React.PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    fieldId: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    type: PropTypes.oneOf(["text", "password", "checkbox", "dropdown"])
      .isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array,
    className: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    color: "primary"
  };

  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.cachedValue = props.input.value;
    this.cachedPosition = 0;

    switch (props.type) {
      case "checkbox":
        this.handleChange = this.handleCheckboxChange.bind(this);
        break;
      default:
        this.handleChange = this.handleDefaultChange.bind(this);
    }

    this.handleFocus = this.handleDefaultFocus.bind(this);
    this.handleBlur = this.handleDefaultBlur.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.input.value === prevProps.input.value) return;

    if (this.input.current) {
      // fix cursor position on changing the value to the normalized variant
      let str;
      let index;
      switch (this.props.type) {
        case "text":
        case "password":
          str = (this.cachedValue || "").substr(0, this.cachedPosition);
          index =
            (this.props.input.value || "").indexOf(str) + this.cachedPosition;
          if (
            index !== -1 &&
            this.cachedPosition < (this.cachedValue || "").length
          )
            this.input.current.selectionStart = this.input.current.selectionEnd = index;
          break;
      }
    }

    this.cachedValue = this.props.input.value;
  }

  handleDefaultChange(evt) {
    this.cachedValue = evt.target.value;
    this.cachedPosition = evt.target.selectionEnd;
    return this.props.input.onChange(this.cachedValue);
  }

  handleCheckboxChange(evt) {
    return this.props.input.onChange(evt.target.checked ? "on" : "off");
  }

  handleDefaultFocus(...args) {
    return this.props.input.onFocus(...args);
  }

  handleDefaultBlur() {
    return this.props.input.onBlur(this.cachedValue);
  }

  renderErrors() {
    if (!this.props.meta.error) return null;

    return (
      <List classes={{ root: this.props.classes.errorList }}>
        {/* eslint-disable-line */ this.props.meta.error.map((error, index) => (
          <ListItem
            key={`error-${index}`}
            classes={{ root: this.props.classes.errorListItem }}
          >
            <ListItemIcon>
              <ErrorIcon className={this.props.classes.error} />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: this.props.classes.error }}
              primary={
                _.isString(error)
                  ? error
                  : this.props.intl.formatMessage(error.toJS())
              }
            />
          </ListItem>
        ))}
      </List>
    );
  }

  renderInput() {
    const errors = this.renderErrors();

    return (
      <TextField
        className={this.props.className}
        autoComplete="off"
        fullWidth
        type={this.props.type}
        value={this.props.input.value.toString()}
        label={
          this.props.label &&
          this.props.intl.formatMessage({ id: this.props.label })
        }
        disabled={this.props.meta.submitting || this.props.disabled}
        error={!!this.props.meta.error}
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
            if (evt.keyCode === 13) {
              evt.preventDefault();
              evt.stopPropagation();
              if (this.props.onSubmit) this.props.onSubmit();
            }
          }
        }}
      />
    );
  }

  renderCheckbox() {
    return (
      <FormControlLabel
        classes={{ root: this.props.classes.label }}
        control={
          <Checkbox
            checked={this.props.input.value === "on"}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value="on"
            color={this.props.color}
          />
        }
        label={this.props.intl.formatMessage({ id: this.props.label })}
      />
    );
  }

  renderDropdown() {
    const errors = this.renderErrors();

    return (
      <FormControl
        className={this.props.className}
        variant="filled"
        fullWidth
        error={!!this.props.meta.error}
      >
        <InputLabel htmlFor={this.props.fieldId}>
          <FormattedMessage id={this.props.label} />
        </InputLabel>
        <Select
          value={this.props.input.value}
          disabled={this.props.meta.submitting || this.props.disabled}
          onChange={this.handleChange}
          input={
            <FilledInput
              id={this.props.fieldId}
              inputProps={{
                onKeyDown: evt => {
                  if (evt.keyCode === 13) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    if (this.props.onSubmit) this.props.onSubmit();
                  }
                }
              }}
            />
          }
        >
          {_.map(this.props.options, (item, index) => (
            <MenuItem key={`item-${index}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {errors && (
          <FormHelperText
            component="div"
            classes={{ root: this.props.classes.formHelper }}
          >
            {errors}
          </FormHelperText>
        )}
      </FormControl>
    );
  }

  render() {
    switch (this.props.type) {
      case "text":
      case "password":
        return this.renderInput();
      case "checkbox":
        return this.renderCheckbox();
      case "dropdown":
        return this.renderDropdown();
    }

    return null;
  }
}

const LocalizedField = injectIntl(
  withStyles(styles, { withTheme: true })(FieldComponent)
);

class FormField extends React.Component {
  static propTypes = {
    formFields: PropTypes.object.isRequired,
    formProps: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.array,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onSubmit: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.normalize = this.normalize.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      !shallowEquals(this.props.formFields, nextProps.formFields) ||
      this.props.name !== nextProps.name ||
      this.props.type !== nextProps.type ||
      this.props.options !== nextProps.options ||
      this.props.autoFocus !== nextProps.autoFocus ||
      this.props.disabled !== nextProps.disabled
    );
  }

  normalize(value, ...args) {
    if (!this.props.formFields[this.props.name]) return value;

    let options = this.props.formFields[this.props.name].normalize;
    if (!options) return value;

    return normalize(this.props.formProps, options, value, ...args);
  }

  render() {
    let { formFields, formProps, name, type, ...fieldProps } = this.props; // eslint-disable-line

    return (
      <Field
        component={LocalizedField}
        fieldId={`input-${name}`}
        name={name}
        type={type}
        normalize={this.normalize}
        label={formFields[name] && formFields[name].label}
        {...fieldProps}
      />
    );
  }
}

export default FormField;
