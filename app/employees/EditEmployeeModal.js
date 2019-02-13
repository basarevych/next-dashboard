import React from "react";
import PropTypes from "prop-types";
import { fromJS } from "immutable";
import { intlShape, FormattedMessage } from "react-intl";
import { graphql } from "react-relay";
import { fromGlobalId } from "graphql-relay";
import { SubmissionError } from "redux-form/immutable";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import { NextQueryRenderer } from "../app/providers/Relay";
import Form from "../app/forms/Form";
import Field from "../app/forms/FieldContainer";
import constants from "../../common/constants";
import fields from "../../common/forms/employee";
import { allCountries } from "../../common/countries";

export const styles = theme => ({
  paper: {
    background: theme.main.background
  },
  error: {
    color: red[500]
  },
  actions: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem"
  }
});

export const query = graphql`
  query EditEmployeeModalQuery($currentId: ID) {
    viewer {
      employee(id: $currentId) {
        id
        uid
        checked
        name
        dept
        title
        country {
          id
          name
        }
        salary
      }
    }
  }
`;

class EditEmployeeModal extends Form {
  static propTypes = {
    ...Form.propTypes,
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    currentId: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  static formName = "editEmployeeForm";

  static fields = fields;

  static async onSubmit(values, dispatch, props) {
    let result;

    if (props.currentId) {
      result = await props.onEdit(
        props.currentId,
        props.getValue("uid"),
        props.getValue("checked") || false,
        props.getValue("name"),
        props.getValue("dept"),
        props.getValue("title"),
        props.getValue("country"),
        parseInt(props.getValue("salary"))
      );
    } else {
      result = await props.onCreate(
        props.getValue("uid"),
        props.getValue("checked") || false,
        props.getValue("name"),
        props.getValue("dept"),
        props.getValue("title"),
        props.getValue("country"),
        parseInt(props.getValue("salary"))
      );
    }

    if (result && _.isObject(result)) throw new SubmissionError(result);

    return result;
  }

  constructor(props) {
    super(props);

    this.deptOptions = fromJS(
      _.map(_.values(constants.depts), item => ({
        value: item,
        label: item && this.props.intl.formatMessage({ id: `DEPT_${item}` })
      }))
    );

    this.countryOptions = fromJS(
      _.map(allCountries, item => ({
        value: item.iso2,
        label: item.name
      }))
    );

    this.state = {
      isLoaded: false
    };

    props.dispatch(props.change("dept", this.deptOptions.getIn([0, "value"])));
    props.dispatch(
      props.change("country", this.countryOptions.getIn([0, "value"]))
    );
  }

  renderForm() {
    return (
      <Dialog
        maxWidth="xs"
        classes={{ paper: this.props.classes.paper }}
        open
        onClose={this.props.onCancel}
      >
        <DialogTitle>
          <FormattedMessage
            id={
              this.props.currentId
                ? "EDIT_EMPLOYEE_TITLE_EDIT"
                : "EDIT_EMPLOYEE_TITLE_CREATE"
            }
          />
        </DialogTitle>
        {this.props.error && (
          <DialogContent>
            {_.map(
              _.isArray(this.props.error)
                ? this.props.error
                : [this.props.error],
              (error, index) => (
                <DialogContentText
                  key={`error-${index}`}
                  classes={{ root: this.props.classes.error }}
                >
                  {_.isArray(error) ? (
                    <FormattedMessage id={error[0]} values={error[1]} />
                  ) : (
                    <FormattedMessage id={error} />
                  )}
                </DialogContentText>
              )
            )}
          </DialogContent>
        )}
        <DialogContent>
          <Grid
            container
            spacing={16}
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={this.submit}
          >
            <Grid item xs={12}>
              <Field name="uid" type="text" onSubmit={this.submit} />
            </Grid>
            <Grid item xs={12}>
              <Field name="name" type="text" onSubmit={this.submit} />
            </Grid>
            <Grid item xs={12}>
              <Field name="checked" type="checkbox" onSubmit={this.submit} />
            </Grid>
            <Grid item xs={12} container spacing={16}>
              <Grid item xs={6}>
                {_.map(_.values(constants.depts), (item, index) => {
                  if (index % 2 !== 0) return null;
                  return (
                    <Field
                      key={`radio-${item}`}
                      name="dept"
                      type="radio"
                      value={item}
                      label={this.props.intl.formatMessage({
                        id: `DEPT_${item}`
                      })}
                      onSubmit={this.submit}
                    />
                  );
                })}
              </Grid>
              <Grid item xs={6}>
                {_.map(_.values(constants.depts), (item, index) => {
                  if (index % 2 === 0) return null;
                  return (
                    <Field
                      key={`radio-${item}`}
                      name="dept"
                      type="radio"
                      value={item}
                      label={this.props.intl.formatMessage({
                        id: `DEPT_${item}`
                      })}
                      onSubmit={this.submit}
                    />
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Field name="title" type="text" onSubmit={this.submit} />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="country"
                type="select"
                native
                options={this.countryOptions}
                onSubmit={this.submit}
              />
            </Grid>
            <Grid item xs={12}>
              <Field name="salary" type="text" onSubmit={this.submit} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions classes={{ root: this.props.classes.actions }}>
          <Button
            variant="contained"
            color="primary"
            disabled={this.props.submitting}
            onClick={this.props.onCancel}
          >
            <FormattedMessage id="EDIT_EMPLOYEE_CANCEL" />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            disabled={this.props.submitting}
            onClick={this.submit}
          >
            <FormattedMessage id="EDIT_EMPLOYEE_SUBMIT" />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  loadData(viewer) {
    if (this.state.isLoaded) return;

    setTimeout(() => {
      this.props.dispatch(
        this.props.change(
          "uid",
          parseInt(_.get(viewer, "employee.uid", "0")).toString()
        )
      );
      this.props.dispatch(
        this.props.change("checked", _.get(viewer, "employee.checked", false))
      );
      this.props.dispatch(
        this.props.change("name", _.get(viewer, "employee.name", ""))
      );
      this.props.dispatch(
        this.props.change("dept", _.get(viewer, "employee.dept", ""))
      );
      this.props.dispatch(
        this.props.change("title", _.get(viewer, "employee.title", ""))
      );
      this.props.dispatch(
        this.props.change(
          "country",
          fromGlobalId(_.get(viewer, "employee.country.id", "")).id
        )
      );
      this.props.dispatch(
        this.props.change(
          "salary",
          _.get(viewer, "employee.salary", "").toString()
        )
      );
      this.setState({ isLoaded: true });
    });
  }

  render() {
    if (!this.props.currentId) return this.renderForm();

    return (
      <NextQueryRenderer
        query={query}
        variables={{ currentId: this.props.currentId }}
        render={({ error, props }) => {
          if (error || !props) return null;
          this.loadData(props.viewer);
          return this.renderForm();
        }}
      />
    );
  }
}

export default EditEmployeeModal;
